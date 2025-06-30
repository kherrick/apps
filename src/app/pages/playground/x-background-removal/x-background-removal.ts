import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  inject,
  isDevMode,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  signal,
  ViewEncapsulation,
} from '@angular/core';

import { Config } from '@imgly/background-removal';
import { XDialogService } from '../../../../app/shell/x-dialog/x-dialog.service';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { uuidv4 } from './utils';

const emptyProgress = { key: '', current: 0, total: 0 };

type ImageItem = { id: string; url?: string; loading: boolean };
type DownloadProgress = {
  key: string;
  current: number;
  total: number;
};

@Component({
  selector: 'x-background-removal',
  imports: [CommonModule, MatCardModule, MatIconModule, MatProgressBarModule],
  template: `
    <div background-removal-container>
      <section>
        <header>
          <h1>&lt;x-background-removal&gt;</h1>
          <p>
            Remove backgrounds from images without sending anything to a remote
            server with
            <a href="https://www.npmjs.com/package/@imgly/background-removal"
              >&commat;imgly/background-removal</a
            >. It utilizes the powerful
            <a href="https://www.npmjs.com/package/onnxruntime-web"
              >ONNX Runtime Web</a
            >
            allowing for client-side processing and maximum compatibility
            across hardware.
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

            <img
              [src]="img.url || ''"
              alt="Processed image"
              [style.display]="img.loading ? 'none' : ''"
            />
          </mat-card>
        }
      </div>
    </div>
  `,
  styles: [
    `
      [background-removal-container] {
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 0 1rem;
        position: relative;
        max-width: 60rem;
        text-align: center;

        a {
          text-decoration: underline;
        }

        mat-icon {
          font-size: 4rem;
          height: 4rem;
          width: 4rem;
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
          margin: 1rem 0 2rem 0;
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
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: space-evenly;
        }

        .image-card {
          align-items: center;
          background: #ffffff11;
          border-radius: 0.5rem;
          box-shadow: 0 0.125rem 0.5rem var(--md-sys-color-on-surface);
          display: flex;
          height: 9.375rem;
          justify-content: center;
          margin-bottom: 0.5rem;
          overflow: hidden;
          position: relative;
          width: 9.375rem;

          img {
            max-height: 100%;
            max-width: 100%;
            object-fit: cover;
            position: relative;
            z-index: 2;
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
export class XBackgroundRemoval implements OnDestroy, OnInit {
  imageItems = signal<ImageItem[]>([]);
  downloadProgress = signal<DownloadProgress>(emptyProgress);
  dropZoneStyles = 'drop-zone';

  #cdr = inject(ChangeDetectorRef);
  #platformId: Object = inject(PLATFORM_ID);
  #xDialogService: XDialogService = inject(XDialogService);
  #worker?: Worker = isPlatformBrowser(this.#platformId)
    ? new Worker(new URL('./x-background-removal.worker', import.meta.url), {
        type: 'module',
      })
    : undefined;

  #isProcessing = false;
  #processingQueue: Array<{ file: File; id: string; config: Config }> = [];

  handleFileSelect(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (files) this.#processFiles(files);

    (event.target as HTMLInputElement).value = '';
  }

  handleDrop(event: DragEvent) {
    event.preventDefault();

    this.dropZoneStyles = 'drop-zone';

    this.#cdr?.markForCheck();

    if (event.dataTransfer?.files) this.#processFiles(event.dataTransfer.files);
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
    const backgroundRemovalConfig: Config = {
      debug: isDevMode(),
      device: 'cpu',
      model: 'isnet_quint8',
      proxyToWorker: true,
      // // use assets - see npm run build-background-removal-data
      // publicPath: `${globalThis.document.querySelector('base')?.href ?? 'http://localhost:4200/'}assets/background-removal-data/`,
    };

    // use a loading skeleton
    for (let i = 0; i < files.length; i++) {
      let id = undefined;

      try {
        id = globalThis.crypto.randomUUID();
      } catch (e) {
        id = uuidv4();
      }

      this.imageItems.update((items) => [...items, { id, loading: true }]);

      this.#processingQueue.push({
        config: backgroundRemovalConfig,
        file: files[i],
        id, // id to match later
      });
    }

    this.#processNextInQueue();
  }

  #processNextInQueue() {
    if (this.#isProcessing || this.#processingQueue.length === 0) return;

    const { file, id, config } = this.#processingQueue.shift()!;

    this.#isProcessing = true;
    this.#worker?.postMessage({ imgSrc: file, config, id });
  }

  #workerErrorListener(event: MessageEvent) {
    let error = JSON.stringify(event);

    if (event.data.error !== null) {
      error = event.data.error;
    }

    this.#xDialogService.openDialog(
      `Background removal has errored: ${error}`,
      { title: 'Background Removal Error', modal: true },
    );

    this.#isProcessing = false;
    this.#processNextInQueue();

    return;
  }

  #workerEventListener(event: MessageEvent) {
    const { type, key, current, total, result, error, id } = event.data;

    if (error) {
      this.#workerErrorListener(event);
      return;
    }

    if (type === 'error') {
      console.error('Background removal failed:', error);

      this.#isProcessing = false;
      this.#processNextInQueue();

      return;
    }

    if (type === 'progress' && key && total) {
      console.log(`Progress ${key}: ${current} of ${total}`);
      this.downloadProgress.update((progress) => {
        return {
          ...progress,
          key,
          current,
          total,
        };
      });

      this.#cdr.markForCheck();

      return;
    }

    if (type === 'result' && result && id) {
      const url = URL.createObjectURL(result);

      this.imageItems.update((items) =>
        items.map((item) =>
          item.id === id ? { ...item, url, loading: false } : item,
        ),
      );

      this.#isProcessing = false;
      this.downloadProgress.set(emptyProgress);

      this.#processNextInQueue();
    }
  }

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.#platformId)) {
      this.#worker?.addEventListener('error', (e) =>
        this.#workerErrorListener(e as any),
      );

      this.#worker?.addEventListener('messageerror', (e) =>
        this.#workerErrorListener(e),
      );

      this.#worker?.addEventListener('message', (e) =>
        this.#workerEventListener(e),
      );
    }
  }

  ngOnDestroy(): void {
    this.#worker?.removeEventListener('error', (e) =>
      this.#workerErrorListener(e as any),
    );

    this.#worker?.removeEventListener('messageerror', (e) =>
      this.#workerErrorListener(e),
    );

    this.#worker?.removeEventListener('message', (e) =>
      this.#workerEventListener(e),
    );

    this.#worker?.terminate();
  }
}
