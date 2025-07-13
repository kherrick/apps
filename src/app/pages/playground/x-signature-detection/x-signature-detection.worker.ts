/// <reference lib="webworker" />

import { isDevMode } from '@angular/core';

import * as ort from 'onnxruntime-web';

import { MODEL_PATH, MODEL_ROOT } from './utils';

export interface ProgressDataMessage {
  type: string;
  key: string;
  current: number;
  total: number;
}

export interface Detection {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
}

const INPUT_SIZE = 640;

let session: ort.InferenceSession | null = null;
let confThreshold = 0.5;
let iouThreshold = 0.5;

// load the ONNX model
async function loadModel(wasmPath: string): Promise<ort.InferenceSession> {
  if (session) return session;

  try {
    postMessage({
      type: 'progress',
      key: 'Loading model...',
      current: 0,
      total: 100,
    });

    // configure ONNX Runtime with proper paths and fallback backends
    ort.env.wasm.wasmPaths = wasmPath;
    // use single thread for better compatibility
    ort.env.wasm.numThreads = 1;

    // try different execution providers in order of preference
    const executionProviders = ['wasm'];

    session = await ort.InferenceSession.create(`${MODEL_ROOT}/${MODEL_PATH}`, {
      executionProviders,
      graphOptimizationLevel: 'disabled', // disable optimizations for better compatibility
      enableCpuMemArena: false,
      enableMemPattern: false,
      executionMode: 'sequential',
    });

    postMessage({
      type: 'progress',
      key: 'Model loaded',
      current: 100,
      total: 100,
    });

    postMessage({
      type: 'modelLoaded',
    });

    return session;
  } catch (error) {
    throw new Error(`Failed to load model: ${error}`);
  }
}

// preprocess image for YOLO model
function preprocessImage(imageData: ImageData): Float32Array {
  const { width, height, data } = imageData;
  const input = new Float32Array(3 * INPUT_SIZE * INPUT_SIZE);

  // calculate scale and padding
  const scale = Math.min(INPUT_SIZE / width, INPUT_SIZE / height);
  const scaledWidth = Math.round(width * scale);
  const scaledHeight = Math.round(height * scale);
  const xPad = (INPUT_SIZE - scaledWidth) / 2;
  const yPad = (INPUT_SIZE - scaledHeight) / 2;

  // create canvas for resizing
  const canvas = new OffscreenCanvas(INPUT_SIZE, INPUT_SIZE);
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Failed to get canvas context');
  }

  // fill with gray background (128, 128, 128)
  ctx.fillStyle = '#808080';
  ctx.fillRect(0, 0, INPUT_SIZE, INPUT_SIZE);

  // create ImageData and draw resized image
  const tempCanvas = new OffscreenCanvas(width, height);
  const tempCtx = tempCanvas.getContext('2d');
  if (!tempCtx) {
    throw new Error('Failed to get temp canvas context');
  }

  tempCtx.putImageData(imageData, 0, 0);
  ctx.drawImage(
    tempCanvas,
    0,
    0,
    width,
    height,
    xPad,
    yPad,
    scaledWidth,
    scaledHeight,
  );

  // get processed image data
  const processedImageData = ctx.getImageData(0, 0, INPUT_SIZE, INPUT_SIZE);
  const processedData = processedImageData.data;

  // convert to CHW format and normalize
  let pixelIndex = 0;
  for (let y = 0; y < INPUT_SIZE; y++) {
    for (let x = 0; x < INPUT_SIZE; x++) {
      const idx = (y * INPUT_SIZE + x) * 4;

      // RGB channels, normalized to [0, 1]
      // r
      input[pixelIndex] = processedData[idx] / 255.0;

      // g
      input[pixelIndex + INPUT_SIZE * INPUT_SIZE] =
        processedData[idx + 1] / 255.0;

      // b
      input[pixelIndex + 2 * INPUT_SIZE * INPUT_SIZE] =
        processedData[idx + 2] / 255.0;

      pixelIndex++;
    }
  }

  return input;
}

// calculate IoU (Intersection over Union) between two bounding boxes
function calculateIoU(box1: Detection, box2: Detection): number {
  const x1 = Math.max(box1.x, box2.x);
  const y1 = Math.max(box1.y, box2.y);
  const x2 = Math.min(box1.x + box1.width, box2.x + box2.width);
  const y2 = Math.min(box1.y + box1.height, box2.y + box2.height);

  if (x2 <= x1 || y2 <= y1) {
    return 0;
  }

  const intersection = (x2 - x1) * (y2 - y1);
  const area1 = box1.width * box1.height;
  const area2 = box2.width * box2.height;
  const union = area1 + area2 - intersection;

  return intersection / union;
}

// apply Non-Maximum Suppression
function applyNMS(detections: Detection[]): Detection[] {
  // sort by confidence (highest first)
  detections.sort((a, b) => b.confidence - a.confidence);

  const filtered: Detection[] = [];

  for (let i = 0; i < detections.length; i++) {
    const current = detections[i];
    let keep = true;

    for (let j = 0; j < filtered.length; j++) {
      const iou = calculateIoU(current, filtered[j]);
      if (iou > iouThreshold) {
        keep = false;
        break;
      }
    }

    if (keep) {
      filtered.push(current);
    }
  }

  return filtered;
}

// post-process YOLO output to get detections
function postprocessOutput(
  output: ort.Tensor,
  originalWidth: number,
  originalHeight: number,
): Detection[] {
  const detections: Detection[] = [];
  const outputData = output.data as Float32Array;

  // YOLO output shape: [1, 84, 8400] where 84 = 4 (bbox) + 80 (classes)
  const numDetections = output.dims[2]; // 8400
  const numClasses = output.dims[1] - 4; // 80

  // calculate scale factors for converting back to original image coordinates
  const scale = Math.min(
    INPUT_SIZE / originalWidth,
    INPUT_SIZE / originalHeight,
  );

  const scaledWidth = Math.round(originalWidth * scale);
  const scaledHeight = Math.round(originalHeight * scale);
  const xPad = (INPUT_SIZE - scaledWidth) / 2;
  const yPad = (INPUT_SIZE - scaledHeight) / 2;

  for (let i = 0; i < numDetections; i++) {
    // get bounding box coordinates (center_x, center_y, width, height)
    const centerX = outputData[i];
    const centerY = outputData[numDetections + i];
    const width = outputData[2 * numDetections + i];
    const height = outputData[3 * numDetections + i];

    // get class scores (we'll use the first class for signature)
    let maxScore = 0;
    let maxClass = 0;

    for (let j = 0; j < numClasses; j++) {
      const score = outputData[(4 + j) * numDetections + i];

      if (score > maxScore) {
        maxScore = score;
        maxClass = j;
      }
    }

    // filter by confidence threshold
    if (maxScore > confThreshold) {
      // convert from center coordinates to top-left coordinates
      const x = centerX - width / 2;
      const y = centerY - height / 2;

      // scale back to original image coordinates
      const originalX = Math.max(0, (x - xPad) / scale);
      const originalY = Math.max(0, (y - yPad) / scale);

      const originalBoxWidth = Math.min(
        originalWidth - originalX,
        width / scale,
      );

      const originalBoxHeight = Math.min(
        originalHeight - originalY,
        height / scale,
      );

      // only add valid detections
      if (originalBoxWidth > 0 && originalBoxHeight > 0) {
        detections.push({
          x: originalX,
          y: originalY,
          width: originalBoxWidth,
          height: originalBoxHeight,
          confidence: maxScore,
          class: 'signature',
        });
      }
    }
  }

  // apply Non-Maximum Suppression
  return applyNMS(detections);
}

// load image from file
async function loadImageFromFile(file: File): Promise<ImageData> {
  try {
    // use createImageBitmap which is available in Web Workers
    const imageBitmap = await createImageBitmap(file);

    const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Failed to get canvas context');
    }

    ctx.drawImage(imageBitmap, 0, 0);

    const imageData = ctx.getImageData(
      0,
      0,
      imageBitmap.width,
      imageBitmap.height,
    );

    // clean up the bitmap
    imageBitmap.close();

    return imageData;
  } catch (error) {
    throw new Error(`Failed to load image: ${error}`);
  }
}

// main detection function
async function detectSignatures(
  file: File,
  id: string,
  wasmPath: string,
): Promise<void> {
  try {
    postMessage({
      type: 'progress',
      key: 'Loading image...',
      current: 10,
      total: 100,
    });

    const imageData = await loadImageFromFile(file);

    postMessage({
      type: 'progress',
      key: 'Processing image...',
      current: 30,
      total: 100,
    });

    // load model if not already loaded
    const model = await loadModel(wasmPath);

    postMessage({
      type: 'progress',
      key: 'Running inference...',
      current: 50,
      total: 100,
    });

    // preprocess image
    const inputTensor = new ort.Tensor('float32', preprocessImage(imageData), [
      1,
      3,
      INPUT_SIZE,
      INPUT_SIZE,
    ]);

    // run inference
    const results = await model.run({ images: inputTensor });
    const output = results['output0'];

    postMessage({
      type: 'progress',
      key: 'Processing results...',
      current: 80,
      total: 100,
    });

    // post-process results
    const detections = postprocessOutput(
      output,
      imageData.width,
      imageData.height,
    );

    if (isDevMode()) {
      console.info('detections', detections);
    }

    postMessage({
      type: 'progress',
      key: 'Complete',
      current: 100,
      total: 100,
    });

    // send results
    postMessage({
      type: 'result',
      id,
      result: {
        detections,
        imageData,
      },
    });
  } catch (error: any) {
    postMessage({
      type: 'error',
      id,
      error: error.message,
    });
  }
}

// worker message handler
addEventListener('message', async (event: MessageEvent) => {
  const {
    type,
    id,
    file,
    wasmPath,
    confThreshold: newConfThreshold,
    iouThreshold: newIouThreshold,
  } = event.data;

  switch (type) {
    case 'detect':
      if (newConfThreshold !== undefined) {
        confThreshold = newConfThreshold;
      }

      if (newIouThreshold !== undefined) {
        iouThreshold = newIouThreshold;
      }

      await detectSignatures(file, id, wasmPath);
      break;

    case 'updateThresholds':
      if (newConfThreshold !== undefined) {
        confThreshold = newConfThreshold;
      }

      if (newIouThreshold !== undefined) {
        iouThreshold = newIouThreshold;
      }

      break;

    default:
      console.warn('Unknown message type:', type);
  }
});
