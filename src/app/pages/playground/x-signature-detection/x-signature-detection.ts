import { CommonModule, isPlatformBrowser } from '@angular/common';

import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  ElementRef,
  inject,
  isDevMode,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  QueryList,
  signal,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSliderModule } from '@angular/material/slider';

import { XDialogService } from '../../../../app/shell/x-dialog/x-dialog.service';
import { uuidv4 } from './utils';

const emptyProgress = { key: '', current: 0, total: 0 };

type ImageItem = {
  id: string;
  originalUrl?: string;
  canvasUrl?: string;
  loading: boolean;
  detections?: Detection[];
  needsDrawing?: boolean;
  originalImage?: HTMLImageElement;
  file?: File;
};

type Detection = {
  x: number;
  y: number;
  width: number;
  height: number;
  confidence: number;
  class: string;
};

type DownloadProgress = {
  key: string;
  current: number;
  total: number;
};

@Component({
  selector: 'x-signature-detection',
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
  ],
  template: `
    <div signature-detection-container>
      <section>
        <header>
          <h1>&lt;x-signature-detection&gt;</h1>
          <p>
            <a href="https://kherrick.github.io/signature-detection/"
              >Detect signatures in images with the YOLOv8 object detection
              model</a
            >
            using the
            <a href="https://www.npmjs.com/package/onnxruntime-web"
              >ONNX Runtime Web</a
            >
            package. Processing happens entirely client-side and no data is sent
            to external servers.
          </p>
        </header>
      </section>

      <mat-card
        [class]="dropZoneStyles"
        (dragleave)="handleDragLeave()"
        (drop)="handleDrop($event)"
        (dragover)="handleDragOver($event)"
        (click)="fileInput.click()"
        tabindex="0"
        role="button"
        aria-label="Upload images"
      >
        <div class="drop-zone-content">
          <mat-icon> cloud_upload </mat-icon>
          <p style="margin: 1rem 0 0 0;">Click or drag images here to upload</p>
          <input
            #fileInput
            type="file"
            accept="image/*"
            multiple
            (change)="handleFileSelect($event)"
            hidden
          />
        </div>
      </mat-card>

      <div class="camera-controls">
        <button
          mat-raised-button
          color="primary"
          (click)="toggleCamera()"
          [disabled]="!isBrowser"
        >
          <mat-icon>{{
            isCameraActive() ? 'camera_off' : 'camera_alt'
          }}</mat-icon>
          {{ isCameraActive() ? 'Stop Camera' : 'Start Camera' }}
        </button>

        @if (isCameraActive()) {
          <button
            mat-raised-button
            color="accent"
            (click)="captureFromCamera()"
          >
            <mat-icon>photo_camera</mat-icon>
            Capture Photo
          </button>
        }
      </div>

      <div class="controls">
        <mat-form-field appearance="outline">
          <mat-label>Confidence Threshold</mat-label>
          <input
            matInput
            type="number"
            [(ngModel)]="confThreshold"
            min="0"
            max="1"
            step="0.1"
            (ngModelChange)="onThresholdChange()"
          />
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>IoU Threshold</mat-label>
          <input
            matInput
            type="number"
            [(ngModel)]="iouThreshold"
            min="0"
            max="1"
            step="0.1"
            (ngModelChange)="onThresholdChange()"
          />
        </mat-form-field>
      </div>

      @if (isCameraActive()) {
        <mat-card class="camera-preview">
          <video
            #videoElement
            autoplay
            playsinline
            muted
            [style.display]="isCameraActive() ? 'block' : 'none'"
          ></video>
          <canvas #captureCanvas style="display: none;"></canvas>
        </mat-card>
      }

      @if (downloadProgress().key) {
        <div class="progress-container">
          <mat-progress-bar
            mode="determinate"
            [value]="
              (downloadProgress().current / downloadProgress().total) * 100
            "
            color="primary"
          ></mat-progress-bar>
          <div class="progress-container__status">
            <div class="progress-container__status--text">
              {{ downloadProgress().key }}
            </div>
            <div>
              {{
                (downloadProgress().current / downloadProgress().total) * 100
                  | number: '1.0'
              }}%
            </div>
          </div>
        </div>
      }

      <div class="images-grid">
        @for (img of imageItems(); track img.id) {
          <mat-card class="image-card">
            <div
              class="skeleton"
              [style.display]="img.loading ? '' : 'none'"
            ></div>

            <div
              class="image-container"
              [style.display]="img.loading ? 'none' : ''"
            >
              <canvas
                #canvas
                [id]="'canvas-' + img.id"
                [style.display]="
                  img.detections && img.detections.length > 0 ? 'block' : 'none'
                "
              ></canvas>

              @if (img.detections && img.detections.length > 0) {
                <div class="detection-info">
                  Found {{ img.detections.length }} signature(s)
                </div>
                <div class="download-controls">
                  <button
                    mat-stroked-button
                    color="primary"
                    (click)="downloadCanvas(img.id)"
                    [disabled]="!img.detections || img.detections.length === 0"
                  >
                    <mat-icon>download</mat-icon>
                    Download Image
                  </button>
                </div>
              } @else if (!img.loading) {
                <div class="detection-info">No signatures detected</div>
              }
            </div>
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      [signature-detection-container] {
        align-items: center;
        display: flex;
        flex-direction: column;
        max-width: 60rem;
        padding: 0 1rem;
        position: relative;
        text-align: center;

        a {
          text-decoration: underline;
        }

        .controls {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin: 1rem 0;

          mat-form-field {
            width: 200px;
          }
        }

        .camera-controls {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
          margin-bottom: 1rem;

          button {
            align-items: center;
            display: flex;
            gap: 0.5rem;
          }
        }

        .camera-preview {
          margin-bottom: 1rem;
          padding: 1rem;

          video {
            border-radius: 0.5rem;
            max-height: 400px;
            max-width: 100%;
          }
        }

        mat-icon {
          font-size: 4rem;
          height: 4rem;
          width: 4rem;
        }

        .camera-controls mat-icon {
          font-size: 1.5rem;
          height: 1.5rem;
          width: 1.5rem;
        }

        .download-controls mat-icon {
          font-size: 1.2rem;
          height: 1.2rem;
          width: 1.2rem;
          margin-right: 0.5rem;
        }

        .drop-zone,
        .drop-zone-hover {
          align-items: center;
          border: 0.125rem dashed var(--md-sys-color-on-surface);
          cursor: pointer;
          display: flex;
          justify-content: center;
          margin: 1rem 0 2rem 0;
          min-height: 11.25rem;
          outline: none;
          padding: 2rem;
          text-align: center;
          transition: background 0.2s;
        }

        .drop-zone {
          background: var(--md-sys-color-surface);
          color: var(--md-sys-color-on-surface);
        }

        .drop-zone-hover {
          background: var(--md-sys-color-primary);
          color: var(--md-sys-color-on-primary);
          transition:
            border 0.2s,
            background 0.2s;
        }

        .drop-zone-content {
          align-items: center;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .progress-container {
          align-items: center;
          display: flex;
          flex-direction: column;
          inset: 0;
          justify-content: center;
          margin: 1rem 0 1rem 0;
          width: 20rem;

          mat-progress-bar {
            outline: 0.0625rem solid var(--md-sys-color-tertiary);
          }

          &__status {
            margin-top: 0.5rem;
            text-align: center;

            &--text {
              font-weight: bold;
            }
          }
        }

        .images-grid {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-evenly;
          margin-bottom: 1rem;
        }

        .image-card {
          align-items: center;
          background: #ffffff11;
          border-radius: 0.5rem;
          box-shadow: 0 0.125rem 0.5rem var(--md-sys-color-on-surface);
          display: flex;
          flex-direction: column;
          justify-content: center;
          margin-bottom: 0.5rem;
          min-height: 12rem;
          overflow: hidden;
          padding: 1rem;
          position: relative;
          width: 18rem;

          .image-container {
            align-items: center;
            display: flex;
            flex-direction: column;
            width: 100%;
          }

          canvas,
          img {
            border-radius: 0.25rem;
            max-height: 200px;
            max-width: 100%;
            object-fit: contain;
          }

          .detection-info {
            color: var(--md-sys-color-on-surface);
            font-size: 0.875rem;
            margin-top: 0.5rem;
            text-align: center;
          }

          .download-controls {
            margin-top: 0.5rem;
            display: flex;
            gap: 0.5rem;
            justify-content: center;

            button {
              display: flex;
              align-items: center;
              font-size: 0.875rem;
            }
          }
        }

        .skeleton {
          animation: skeleton-loading 1.2s infinite;
          background: linear-gradient(
            90deg,
            #e0e0e088 25%,
            #f5f5f588 50%,
            #e0e0e088 75%
          );
          background-size: 200% 100%;
          border-radius: 0.5rem;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 100%;
          z-index: 1;
        }

        @keyframes skeleton-loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XSignatureDetection
  implements OnDestroy, OnInit, AfterViewChecked
{
  imageItems = signal<ImageItem[]>([]);
  downloadProgress = signal<DownloadProgress>(emptyProgress);
  dropZoneStyles = 'drop-zone';
  confThreshold = 0.5;
  iouThreshold = 0.5;
  isCameraActive = signal<boolean>(false);
  isBrowser = false;

  #cdr = inject(ChangeDetectorRef);
  #platformId: Object = inject(PLATFORM_ID);
  #xDialogService: XDialogService = inject(XDialogService);

  #worker: Worker | null = null;
  #isProcessing = false;
  #processingQueue: Array<{ file: File; id: string }> = [];
  #pendingDrawings: Map<
    string,
    { imageData: ImageData; detections: Detection[] }
  > = new Map();
  #mediaStream: MediaStream | null = null;

  @ViewChildren('canvas') canvasElements!: QueryList<
    ElementRef<HTMLCanvasElement>
  >;
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('captureCanvas') captureCanvas!: ElementRef<HTMLCanvasElement>;

  ngAfterViewChecked(): void {
    if (this.#pendingDrawings.size > 0) {
      this.#processPendingDrawings();
    }
  }

  #processPendingDrawings(): void {
    this.#pendingDrawings.forEach((data, id) => {
      const canvasRef = this.canvasElements?.find(
        (canvasEl) => canvasEl.nativeElement.id === `canvas-${id}`,
      );

      if (canvasRef) {
        const canvas = canvasRef.nativeElement;
        canvas.style.display = 'block';

        setTimeout(() => {
          this.#drawDetectionsOnCanvas(
            id,
            data.imageData,
            data.detections,
            canvas,
          );
          this.#pendingDrawings.delete(id);
        }, 10);
      }
    });
  }

  onThresholdChange(): void {
    // when thresholds change, we need to update the worker
    if (this.#worker) {
      this.#worker.postMessage({
        type: 'updateThresholds',
        confThreshold: this.confThreshold,
        iouThreshold: this.iouThreshold,
      });
    }
  }

  async toggleCamera(): Promise<void> {
    if (!this.isBrowser) {
      this.#xDialogService.openDialog(
        'Camera is not available in this environment.',
        {
          title: 'Camera Unavailable',
          modal: true,
        },
      );
      return;
    }

    if (this.isCameraActive()) {
      await this.#stopCamera();
    } else {
      await this.#startCamera();
    }
  }

  async #startCamera(): Promise<void> {
    try {
      this.#mediaStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'environment', // prefer back camera
          width: { ideal: 1280 },
          height: { ideal: 720 },
        },
      });

      this.isCameraActive.set(true);
      this.#cdr.markForCheck();

      // wait for the view to update
      setTimeout(() => {
        if (this.videoElement) {
          this.videoElement.nativeElement.srcObject = this.#mediaStream;
        }
      }, 100);
    } catch (error) {
      console.error('Error accessing camera:', error);

      this.#xDialogService.openDialog(
        'Failed to access camera. Please ensure you have granted camera permissions.',
        {
          title: 'Camera Error',
          modal: true,
        },
      );
    }
  }

  async #stopCamera(): Promise<void> {
    if (this.#mediaStream) {
      this.#mediaStream.getTracks().forEach((track) => track.stop());
      this.#mediaStream = null;
    }

    this.isCameraActive.set(false);
    this.#cdr.markForCheck();
  }

  captureFromCamera(): void {
    if (!this.videoElement || !this.captureCanvas) {
      return;
    }

    const video = this.videoElement.nativeElement;
    const canvas = this.captureCanvas.nativeElement;
    const ctx = canvas.getContext('2d');

    if (!ctx || video.videoWidth === 0 || video.videoHeight === 0) {
      return;
    }

    // Set canvas size to match video
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    // Draw video frame to canvas
    ctx.drawImage(video, 0, 0);

    // Convert canvas to blob and create file
    canvas.toBlob(
      (blob) => {
        if (blob) {
          const file = new File([blob], `camera-capture-${Date.now()}.jpg`, {
            type: 'image/jpeg',
          });

          // Process the captured image
          this.#processFiles([file] as any);
        }
      },
      'image/jpeg',
      0.8,
    );
  }

  downloadCanvas(imageId: string): void {
    const canvasRef = this.canvasElements?.find(
      (canvasEl) => canvasEl.nativeElement.id === `canvas-${imageId}`,
    );

    if (!canvasRef) {
      console.error('Canvas not found for image ID:', imageId);
      return;
    }

    const canvas = canvasRef.nativeElement;

    // Create download link
    canvas.toBlob((blob) => {
      if (blob) {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `signature-detection-${imageId}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
      }
    }, 'image/png');
  }

  handleFileSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (files) {
      this.#processFiles(files);
    }

    (event.target as HTMLInputElement).value = '';
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();

    this.dropZoneStyles = 'drop-zone';
    this.#cdr?.markForCheck();

    if (event.dataTransfer?.files) {
      this.#processFiles(event.dataTransfer.files);
    }
  }

  handleDragLeave() {
    this.dropZoneStyles = 'drop-zone';
    this.#cdr?.markForCheck();
  }

  handleDragOver(event: DragEvent) {
    event.preventDefault();

    this.dropZoneStyles = 'drop-zone-hover';

    this.#cdr?.markForCheck();
  }

  #processFiles(files: FileList) {
    for (let i = 0; i < files.length; i++) {
      let id = undefined;

      try {
        id = globalThis.crypto.randomUUID();
      } catch (e) {
        id = uuidv4();
      }

      const originalUrl = URL.createObjectURL(files[i]);

      this.imageItems.update((items) => [
        ...items,
        {
          id,
          originalUrl,
          loading: true,
          file: files[i],
        },
      ]);

      this.#processingQueue.push({
        file: files[i],
        id,
      });
    }

    this.#processNextInQueue();
  }

  #processNextInQueue() {
    if (this.#isProcessing || this.#processingQueue.length === 0) return;

    const { file, id } = this.#processingQueue.shift()!;

    this.#isProcessing = true;

    this.#processImageFile(file, id);
  }

  async #processImageFile(file: File, id: string) {
    if (!this.#worker) {
      console.error('Worker not initialized');
      this.#markItemAsError(id);
      return;
    }

    try {
      // load the image to get original dimensions and for canvas drawing
      const img = await this.#loadImage(file);

      // update image item with the loaded image
      this.imageItems.update((items) =>
        items.map((item) => {
          if (item.id === id) {
            return { ...item, originalImage: img };
          }
          return item;
        }),
      );

      // send file to worker for processing
      this.#worker.postMessage({
        type: 'detect',
        wasmPath: `${globalThis.location.origin}/${
          isDevMode() ? 'assets' : 'apps/assets'
        }/onnxruntime-web/`,
        id,
        file,
        confThreshold: this.confThreshold,
        iouThreshold: this.iouThreshold,
      });
    } catch (error) {
      console.error('Error processing image:', error);

      this.#markItemAsError(id);
    }
  }

  #markItemAsError(id: string) {
    this.imageItems.update((items) =>
      items.map((item) => {
        if (item.id === id) {
          return { ...item, loading: false, detections: [] };
        }
        return item;
      }),
    );

    this.#isProcessing = false;

    this.#processNextInQueue();
  }

  #loadImage(file: File): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const img = new Image();

        img.onload = () => resolve(img);
        img.onerror = reject;

        img.src = e.target?.result as string;
      };

      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

  #drawDetectionsOnCanvas(
    id: string,
    imageData: ImageData,
    detections: Detection[],
    canvas: HTMLCanvasElement,
  ) {
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    // find the original image
    const originalImg = this.imageItems().find(
      (item) => item.id === id,
    )?.originalImage;

    if (!originalImg) {
      return;
    }

    // set canvas size and draw image
    const maxWidth = 500;
    const maxHeight = 400;

    let { width, height } = originalImg;

    if (width > maxWidth || height > maxHeight) {
      const scale = Math.min(maxWidth / width, maxHeight / height);

      width *= scale;
      height *= scale;
    }

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(originalImg, 0, 0, width, height);

    // calculate scaling factors
    const scaleX = width / originalImg.width;
    const scaleY = height / originalImg.height;

    // draw detections
    detections.forEach((detection, index) => {
      const { x, y, width: w, height: h, confidence } = detection;

      // scale coordinates for canvas
      const scaledX = x * scaleX;
      const scaledY = y * scaleY;
      const scaledW = w * scaleX;
      const scaledH = h * scaleY;

      // draw bounding box
      ctx.strokeStyle = 'red';
      ctx.lineWidth = 3;
      ctx.strokeRect(scaledX, scaledY, scaledW, scaledH);

      // draw label
      const label = `${detection.class}: ${confidence.toFixed(2)}`;

      ctx.fillStyle = 'red';
      ctx.font = '16px Arial';

      // label background
      const textMetrics = ctx.measureText(label);
      ctx.fillRect(scaledX, scaledY - 25, textMetrics.width + 10, 25);

      // label text
      ctx.fillStyle = 'white';
      ctx.fillText(label, scaledX + 5, scaledY - 5);
    });
  }

  #initializeWorker(): void {
    if (!isPlatformBrowser(this.#platformId)) return;

    this.#worker = new Worker(
      new URL('./x-signature-detection.worker', import.meta.url),
      { type: 'module' },
    );

    this.#worker.onmessage = (event) => {
      const { type, id, result, error } = event.data;

      switch (type) {
        case 'progress':
          this.downloadProgress.set({
            key: event.data.key,
            current: event.data.current,
            total: event.data.total,
          });

          this.#cdr.markForCheck();
          break;

        case 'result':
          this.#handleWorkerResult(id, result);
          break;

        case 'error':
          console.error('Worker error:', error);
          this.#markItemAsError(id);

          break;

        case 'modelLoaded':
          // model is loaded, hide progress
          setTimeout(() => {
            this.downloadProgress.set(emptyProgress);
            this.#cdr.markForCheck();
          }, 1000);
          break;
      }
    };

    this.#worker.onerror = (error) => {
      console.error('Worker error:', error);

      this.#xDialogService.openDialog(`Worker error: ${error.message}`, {
        title: 'Worker Error',
        modal: true,
      });
    };
  }

  #handleWorkerResult(
    id: string,
    result: { detections: Detection[]; imageData: ImageData },
  ) {
    const { detections, imageData } = result;

    // update item with detections
    this.imageItems.update((items) =>
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            detections,
            loading: false,
            needsDrawing: true,
          };
        }

        return item;
      }),
    );

    this.#cdr.markForCheck();

    this.#pendingDrawings.set(id, { imageData, detections });
    this.#isProcessing = false;

    this.#processNextInQueue();
  }

  async ngOnInit(): Promise<void> {
    this.isBrowser = isPlatformBrowser(this.#platformId);

    if (this.isBrowser) {
      this.#initializeWorker();
    }
  }

  ngOnDestroy(): void {
    // stop camera stream
    this.#stopCamera();

    // clean up object URLs
    this.imageItems().forEach((item) => {
      if (item.originalUrl) {
        URL.revokeObjectURL(item.originalUrl);
      }
    });

    // clear pending drawings
    this.#pendingDrawings.clear();

    // terminate worker
    if (this.#worker) {
      this.#worker.terminate();
      this.#worker = null;
    }
  }
}
