import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

// Import @tensorflow/tfjs or @tensorflow/tfjs-core
import * as tf from '@tensorflow/tfjs';

// Adds the WASM backend to the global backend registry.
import '@tensorflow/tfjs-backend-wasm';

// Import model
import {
  BlazeFaceModel,
  NormalizedFace,
  load,
} from '@tensorflow-models/blazeface';

import { setWasmPaths } from '@tensorflow/tfjs-backend-wasm';

import { environment } from '../../environments/environment';

@Component({
  selector: 'x-face-detector',
  imports: [CommonModule, RouterModule],
  template: `
    <section class="face-detector">
      <section id="buttons-section">
        <section id="buttons">
          <button id="startWebcam" (click)="this.startWebcam($event)" disabled>
            start webcam
          </button>
          <button id="stopWebcam" (click)="this.stopWebcam($event)" disabled>
            stop webcam
          </button>
          <button
            id="startPredictions"
            (click)="this.startPredictions()"
            disabled
          >
            start predictions
          </button>
          <button
            id="stopPredictions"
            (click)="this.stopPredictions()"
            disabled
          >
            stop predictions
          </button>
        </section>
      </section>
      <section
        id="canvas-section"
        (drop)="this.handleImageDropPrediction($event)"
        (dragenter)="this.handleDragEnter($event)"
        (dragover)="this.handleDragOver($event)"
        (dragleave)="this.handleDragLeave($event)"
      >
        <section class="flex-section"></section>
        <section id="loading-section">
          <section id="loading">Loading...</section>
          <canvas id="canvas"></canvas>
          <video id="video"></video>
        </section>
        <section class="flex-section"></section>
      </section>
    </section>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/button/style.css' as button-style;

      .face-detector {
        padding-bottom: 1rem;

        .flex-section {
          display: none;
          flex: 1;
        }

        #buttons-section {
          display: none;
          flex-direction: row;
          justify-content: center;
          margin: 0 0 1rem;
        }

        #buttons {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          justify-content: center;
        }

        #canvas-section {
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        #loading-section {
          min-width: unset;
          max-width: 21rem;
          text-align: center;
        }

        #loading {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
          pointer-events: none;
          width: 100%;
        }

        button {
          margin: 0.5rem;
        }

        canvas {
          display: none;
          background-color: var(
            --face-detector-canvas-background-color,
            transparent
          );
          width: var(--face-detector-canvas-width, 100%);
          height: var(--face-detector-canvas-height, auto);
        }

        video {
          display: none;
          width: var(--face-detector-video-width, 100%);
          height: var(--face-detector-video-height, auto);
        }

        @media screen and (min-width: 859px) {
          .flex-section {
            display: flex;
          }

          #loading-section {
            min-width: 21rem;
            max-width: unset;
          }
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class FaceDetectorComponent implements OnInit {
  loadingElement: any;
  canvasElement?: HTMLCanvasElement;
  videoElement?: HTMLVideoElement;
  model?: BlazeFaceModel;

  imgUrl: string = 'https://avatars3.githubusercontent.com/u/3065761';
  strokeStyle = 'yellow';
  lineWidth = 10;
  wasmPath = environment.TFJS_WASM_PATH;

  isStreaming = false;
  isReadyToPredict = false;
  canPredictVideo = false;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  async ngOnInit(): Promise<void> {
    if (this.isBrowser) {
      this.canvasElement =
        this.el.nativeElement.shadowRoot.querySelector('#canvas');
      this.loadingElement =
        this.el.nativeElement.shadowRoot.querySelector('#loading');
      this.videoElement =
        this.el.nativeElement.shadowRoot.querySelector('#video');

      setWasmPaths(this.wasmPath);
      const isBackendSet: boolean = await tf.setBackend('wasm');

      if (!isBackendSet || !this.canvasElement) {
        return;
      }

      this.model = await load();
      this.isReadyToPredict = true;

      this.handleImageUrlPrediction(this.canvasElement, this.imgUrl);
      this.el.nativeElement.shadowRoot.querySelector(
        '#buttons-section',
      ).style.display = 'flex';

      const devices = (await navigator?.mediaDevices?.enumerateDevices()) ?? [];
      const hasVideoInput =
        devices.filter((device) => device.kind === 'videoinput').length > 0;
      this.el.nativeElement.shadowRoot.querySelector('#startWebcam').disabled =
        !hasVideoInput;
    }
  }

  async drawPrediction(
    ctx: CanvasRenderingContext2D | null,
    image: HTMLImageElement,
  ): Promise<void> {
    // Pass in an image or video to the model. The model returns an array of
    // bounding boxes, probabilities, and landmarks, one for each detected face.
    const returnTensors = false; // Pass in `true` to get tensors back, rather than values.
    const predictions: NormalizedFace[] =
      (await this.model?.estimateFaces(image, returnTensors)) ?? [];

    if (ctx && predictions.length > 0) {
      /*
      `predictions` is an array of objects describing each detected face, for example:
      [
        {
          topLeft: [232.28, 145.26],
          bottomRight: [449.75, 308.36],
          probability: [0.998],
          landmarks: [
            [295.13, 177.64], // right eye
            [382.32, 175.56], // left eye
            [341.18, 205.03], // nose
            [345.12, 250.61], // mouth
            [252.76, 211.37], // right ear
            [431.20, 204.93]  // left ear
          ]
        }
      ]
      */

      ctx.strokeStyle = this.strokeStyle;
      ctx.lineWidth = this.lineWidth;

      for (let i = 0; i < predictions.length; i++) {
        const start = predictions[i].topLeft as [number, number];
        const end = predictions[i].bottomRight as [number, number];
        const size = [end[0] - start[0], end[1] - start[1]];

        const x = start[0];
        const y = start[1];
        const w = size[0];
        const h = size[1];

        // render a rectangle over each detected face
        ctx.strokeRect(x, y, w, h);
      }
    }
  }

  getImage(url: string): Promise<HTMLImageElement> {
    return new Promise((res, rej) => {
      this.loadingElement.style.display = 'flex';

      const image = new Image();
      image.crossOrigin = 'Anonymous';
      image.src = url;

      image.addEventListener('error', (e) => rej(e));
      image.addEventListener('load', (e) => res(image));
    });
  }

  requestVideoStream(): Promise<boolean> {
    return new Promise((isStreaming) => {
      const mediaDevices: Promise<MediaStream> =
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: false,
        });

      mediaDevices
        .then((stream: MediaStream) => {
          if (!this.videoElement) {
            throw Error('HTMLVideoElement not found.');
          }

          this.videoElement.srcObject = stream;
          this.videoElement.play();
        })
        .catch((error) => {
          console.error(error);

          isStreaming(false);
        });

      this.videoElement?.addEventListener(
        'canplay',
        (event: any) => {
          if (!this.isStreaming) {
            isStreaming(true);
          }
        },
        false,
      );
    });
  }

  handleDragEnter(event: DragEvent) {
    event.preventDefault();
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();
  }

  handleDragLeave(event: DragEvent) {
    event.preventDefault();
  }

  async handleImageDropPrediction(event: DragEvent) {
    event.preventDefault();

    if (!this.canvasElement) {
      return;
    }

    const files = event.dataTransfer?.files ?? [];

    for (let i = 0; i < (files?.length ?? 0); i++) {
      const imageBitmap = await createImageBitmap(files[i]);
      const ctx = this.getCanvasContext(this.canvasElement, {
        image: imageBitmap,
      });

      const imageFromCanvas = new Image();

      imageFromCanvas.addEventListener('load', async () => {
        this.handleCanvasStylesForImages(imageFromCanvas.width);

        await this.drawPrediction(ctx, imageFromCanvas);
      });

      imageFromCanvas.src = this.canvasElement.toDataURL();
    }
  }

  handleCanvasStylesForVideo() {
    if (!this.canvasElement) {
      return;
    }

    this.canvasElement.style.width = '100%';
    this.canvasElement.style.height = 'auto';
  }

  handleCanvasStylesForImages(imageWidth: number) {
    if (!this.canvasElement) {
      return;
    }

    this.canvasElement.style.display = 'initial';
    this.canvasElement.style.width = '100%';
    this.canvasElement.style.height = 'auto';
  }

  async handleImageUrlPrediction(canvas: HTMLCanvasElement, url: string) {
    const image = await this.getImage(url);
    this.handleCanvasStylesForImages(image.width);
    this.loadingElement.style.display = 'none';

    const ctx = this.getCanvasContext(canvas, { image });
    await this.drawPrediction(ctx, image);
  }

  handleVideoPrediction(canvas: any, video: any) {
    this.canPredictVideo = true;
    this.handleCanvasStylesForVideo();

    let myReq: number;

    const drawVideoPrediction = async () => {
      const ctx = this.getCanvasContext(canvas, { video });
      await this.drawPrediction(ctx, video);

      if (!this.canPredictVideo) {
        cancelAnimationFrame(myReq);

        return;
      }

      // investigate this -- it currently is required
      setTimeout(() => {
        myReq = requestAnimationFrame(drawVideoPrediction);
      });
    };

    myReq = requestAnimationFrame(drawVideoPrediction);
  }

  getCanvasContext(
    canvas: HTMLCanvasElement,
    { image, video }: { image?: any; video?: any },
  ): CanvasRenderingContext2D | null {
    const ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');
    const media = video ? video : image;
    const width = video ? video.videoWidth : image.width;
    const height = video ? video.videoHeight : image.height;

    // set the canvas to the media width and height
    canvas.width = width;
    canvas.height = height;

    if (ctx) {
      ctx.drawImage(media, 0, 0, width, height);
    }

    return ctx;
  }

  clearCanvas() {
    if (!this.canvasElement) {
      return;
    }

    const canvas = this.canvasElement;
    const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d');

    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  fillCanvas(color = '#000000') {
    if (!this.canvasElement) {
      return;
    }

    const canvas = this.canvasElement;
    const ctx: CanvasRenderingContext2D | null = canvas?.getContext('2d');

    if (ctx) {
      ctx.fillStyle = color;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }

  startPredictions() {
    if (!this.canvasElement || !this.videoElement) {
      return;
    }

    // @todo - return a promise?
    this.handleVideoPrediction(this.canvasElement, this.videoElement);

    // @todo -- this should await the above...
    this.canvasElement.style.display = 'flex';
    this.videoElement.style.display = 'none';

    // toggle the buttons disabled status
    this.el.nativeElement.shadowRoot.querySelector(
      '#startPredictions',
    ).disabled = true;
    this.el.nativeElement.shadowRoot.querySelector(
      '#stopPredictions',
    ).disabled = false;
  }

  stopPredictions(): void {
    if (!this.canvasElement || !this.videoElement) {
      return;
    }

    this.canPredictVideo = false;
    this.canvasElement.style.display = 'none';
    this.videoElement.style.display = 'flex';

    // toggle the buttons disabled status
    this.el.nativeElement.shadowRoot.querySelector(
      '#stopPredictions',
    ).disabled = true;
  }

  async startWebcam(event: Event): Promise<void> {
    event.preventDefault();

    if (this.isStreaming || !this.canvasElement || !this.videoElement) {
      return;
    }

    this.loadingElement.style.display = 'flex';
    this.canvasElement.style.display = 'none';
    this.el.nativeElement.shadowRoot.querySelector(
      '#loading-section',
    ).style.flex = 100;

    const isStreaming = await this.requestVideoStream();

    this.loadingElement.style.display = 'none';
    this.canvasElement.style.display = isStreaming ? 'none' : 'flex';
    this.videoElement.style.display = isStreaming ? 'flex' : 'none';

    // toggle the buttons disabled status
    this.el.nativeElement.shadowRoot.querySelector('#stopWebcam').disabled =
      !isStreaming;
    this.el.nativeElement.shadowRoot.querySelector(
      '#startPredictions',
    ).disabled = !isStreaming;

    this.isStreaming = isStreaming;
  }

  stopWebcam(event: Event): void {
    event.preventDefault();

    if (!this.isStreaming || !this.videoElement) {
      return;
    }

    const mediaStream: MediaProvider | null = this.videoElement.srcObject;
    (mediaStream as MediaStream)
      .getTracks()
      .forEach((track: MediaStreamTrack) => {
        track.stop();
      });

    this.isStreaming = false;

    setTimeout(async () => {
      await this.stopPredictions();
    });

    setTimeout(() => {
      if (!this.canvasElement || !this.videoElement) {
        return;
      }

      // set the image back to what it was before the video was started
      this.videoElement.style.display = 'none';
      this.canvasElement.style.display = 'flex';
      this.el.nativeElement.shadowRoot.querySelector(
        '#loading-section',
      ).style.flex = 1;

      // toggle the buttons disabled status
      this.el.nativeElement.shadowRoot.querySelector('#stopWebcam').disabled =
        true;
      this.el.nativeElement.shadowRoot.querySelector(
        '#startPredictions',
      ).disabled = true;
      this.el.nativeElement.shadowRoot.querySelector(
        '#stopPredictions',
      ).disabled = true;
    });

    setTimeout(() => {
      if (!this.canvasElement) {
        return;
      }

      this.handleImageUrlPrediction(this.canvasElement, this.imgUrl);
    });
  }
}
