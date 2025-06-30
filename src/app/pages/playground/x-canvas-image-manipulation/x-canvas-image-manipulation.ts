import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  computed,
  CUSTOM_ELEMENTS_SCHEMA,
  effect,
  ElementRef,
  inject,
  OnDestroy,
  PLATFORM_ID,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FilterControl, Rect } from './utils';

import '@material/web/button/outlined-button.js';
import '@material/web/slider/slider.js';

@Component({
  selector: 'x-canvas-image-manipulation',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [FormsModule],
  encapsulation: ViewEncapsulation.ShadowDom,
  styles: [
    `
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      :host {
        --md-outlined-text-field-container-shape: 1rem;
        --md-outlined-button-container-shape: 1rem;
        --md-outlined-button-disabled-label-text-color: var(
          --md-sys-color-on-surface
        );

        .canvas-image {
          font-family: sans-serif;
          margin-bottom: 0 auto 2rem;
          max-width: 56.25rem;
          text-align: center;

          &__title {
            margin-bottom: 2rem;
          }

          &__wrapper {
            align-items: center;
            aspect-ratio: 16/9;
            background-color: #111;
            display: flex;
            justify-content: center;
            position: relative;
            width: 100%;
          }

          &__canvas {
            background: transparent;
            display: block;
            max-height: 100%;
            max-width: 100%;
            touch-action: none;
          }

          &__controls {
            display: grid;
            gap: 1rem;
            grid-template-columns: repeat(auto-fit, minmax(23.125rem, 1fr));
            margin-top: 1rem;
            text-align: left;
          }

          &__buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            grid-column: 1 / -1;
            justify-content: center;
            margin-top: 1rem;
          }
        }

        .filter-control {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;

          &__label {
            font-size: 0.9rem;
            font-weight: bold;
          }

          &__row {
            align-items: center;
            display: flex;
            gap: 0.5rem;
          }

          &__sub {
            font-weight: normal;
            min-width: 3.75rem;
          }

          &__range {
            flex: 1;
            min-width: 7.5rem;
          }

          &__value {
            font-family: monospace;
            font-size: 0.8rem;
            min-width: 3.125rem;
            text-align: right;
          }

          &__color {
            width: 2.5rem;
            height: 1.5625rem;
          }

          &__shadow {
            display: flex;
            flex-direction: column;
            gap: 0.3rem;
          }
        }
      }
    `,
  ],
  template: `
    <div class="canvas-image">
      <section>
        <header>
          <h1 class="canvas-image__title">
            &lt;x-canvas-image-manipulation&gt;
          </h1>
          <p>
            An image manipulation component that provides real-time filtering
            capabilities using the Canvas API. Supports multiple image
            transformations including blur, brightness, contrast, and color
            adjustments, with additional features for cropping, rotation, and
            flip operations. All processing occurs client-side with immediate
            visual feedback.
          </p>
        </header>
      </section>
      <div class="canvas-image__wrapper" #wrapper>
        <canvas
          #canvas
          class="canvas-image__canvas"
          (mousedown)="onStart($event)"
          (mousemove)="onMove($event)"
          (mouseup)="onEnd($event)"
          (mouseleave)="onEnd($event)"
          (touchstart)="onStart($event)"
          (touchmove)="onMove($event)"
          (touchend)="onEnd($event)"
        >
        </canvas>
      </div>

      <div class="canvas-image__controls">
        @for (key of filterKeys(); track key) {
          <div class="filter-control">
            <label class="filter-control__label">{{ getLabel(key) }}</label>
            @if (key === 'shadow') {
              <div class="filter-control__shadow">
                <div class="filter-control__row">
                  <label class="filter-control__sub">X:</label>
                  <md-slider
                    type="range"
                    class="filter-control__range"
                    [min]="filters()['shadowX'].min"
                    [max]="filters()['shadowX'].max"
                    [step]="filters()['shadowX'].step"
                    [value]="filters()['shadowX'].val"
                    (input)="updateFilter('shadowX', $event)"
                  ></md-slider>
                  <span class="filter-control__value"
                    >{{ filters()['shadowX'].val
                    }}{{ filters()['shadowX'].unit }}</span
                  >
                </div>
                <div class="filter-control__row">
                  <label class="filter-control__sub">Y:</label>
                  <md-slider
                    type="range"
                    class="filter-control__range"
                    [min]="filters()['shadowY'].min"
                    [max]="filters()['shadowY'].max"
                    [step]="filters()['shadowY'].step"
                    [value]="filters()['shadowY'].val"
                    (input)="updateFilter('shadowY', $event)"
                  ></md-slider>
                  <span class="filter-control__value"
                    >{{ filters()['shadowY'].val
                    }}{{ filters()['shadowY'].unit }}</span
                  >
                </div>
                <div class="filter-control__row">
                  <label class="filter-control__sub">Blur:</label>
                  <md-slider
                    type="range"
                    class="filter-control__range"
                    [min]="filters()['shadowBlur'].min"
                    [max]="filters()['shadowBlur'].max"
                    [step]="filters()['shadowBlur'].step"
                    [value]="filters()['shadowBlur'].val"
                    (input)="updateFilter('shadowBlur', $event)"
                  ></md-slider>
                  <span class="filter-control__value"
                    >{{ filters()['shadowBlur'].val
                    }}{{ filters()['shadowBlur'].unit }}</span
                  >
                </div>
                <div class="filter-control__row">
                  <label class="filter-control__sub">Color:</label>
                  <input
                    type="color"
                    class="filter-control__color"
                    [(ngModel)]="shadowColor"
                    (input)="onFilterChange()"
                  />
                </div>
              </div>
            } @else {
              <div class="filter-control__row">
                <md-slider
                  type="range"
                  class="filter-control__range"
                  [min]="filters()[key].min"
                  [max]="filters()[key].max"
                  [step]="filters()[key].step"
                  [value]="filters()[key].val"
                  (input)="updateFilter(key, $event)"
                ></md-slider>
                <span class="filter-control__value">{{
                  formatValue(key)
                }}</span>
              </div>
            }
          </div>
        }

        <div class="canvas-image__buttons">
          <md-outlined-button class="canvas-image__btn" (click)="crop()">
            Crop Selection
          </md-outlined-button>
          <md-outlined-button
            class="canvas-image__btn"
            (click)="flipHorizontal()"
          >
            Flip Horizontal
          </md-outlined-button>
          <md-outlined-button
            class="canvas-image__btn"
            (click)="flipVertical()"
          >
            Flip Vertical
          </md-outlined-button>
          <md-outlined-button class="canvas-image__btn" (click)="rotate()">
            Rotate 90°
          </md-outlined-button>
          <md-outlined-button class="canvas-image__btn" (click)="reset()"
            >Reset All</md-outlined-button
          >
        </div>
      </div>
    </div>
  `,
})
export class XCanvasImageManipulation implements OnDestroy {
  private canvas = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private wrapper = viewChild<ElementRef<HTMLDivElement>>('wrapper');
  private ctx = signal<CanvasRenderingContext2D | null>(null);

  private elementRef = inject(ElementRef);
  private platformId = inject(PLATFORM_ID);

  private imgLoaded = signal(false);
  private img = signal<HTMLImageElement | null>(
    isPlatformBrowser(this.platformId) ? new Image() : null,
  );

  private isCropped = signal(false);
  private croppedData = signal<ImageData | null>(null);

  private lastDraw = signal<any>(null);
  private rotation = signal(0);
  private isFlippedH = signal(false);
  private isFlippedV = signal(false);
  private isSelecting = signal(false);
  private selStart = signal<{ x: number; y: number } | null>(null);
  private selEnd = signal<{ x: number; y: number } | null>(null);
  private selRect = signal<Rect | null>(null);

  shadowColor = signal('#000000');

  filters = signal<Record<string, FilterControl>>({
    blur: { val: 0, min: 0, max: 10, step: 0.1, def: 0, unit: 'px' },
    brightness: { val: 1, min: 0, max: 3, step: 0.01, def: 1, unit: '' },
    contrast: { val: 1, min: 0, max: 3, step: 0.01, def: 1, unit: '' },
    saturation: { val: 1, min: 0, max: 3, step: 0.01, def: 1, unit: '' },
    grayscale: { val: 0, min: 0, max: 1, step: 0.01, def: 0, unit: '' },
    hueRotate: { val: 0, min: 0, max: 360, step: 1, def: 0, unit: '°' },
    invert: { val: 0, min: 0, max: 1, step: 0.01, def: 0, unit: '' },
    opacity: { val: 1, min: 0, max: 1, step: 0.01, def: 1, unit: '' },
    sepia: { val: 0, min: 0, max: 1, step: 0.01, def: 0, unit: '' },
    shadowX: { val: 0, min: -20, max: 20, step: 1, def: 0, unit: 'px' },
    shadowY: { val: 0, min: -20, max: 20, step: 1, def: 0, unit: 'px' },
    shadowBlur: { val: 0, min: 0, max: 20, step: 0.5, def: 0, unit: 'px' },
  });

  filterKeys = signal([
    'blur',
    'brightness',
    'contrast',
    'saturation',
    'grayscale',
    'hueRotate',
    'invert',
    'opacity',
    'sepia',
    'shadow',
  ]);

  filterString = computed(() => {
    const f = [];
    const filters = this.filters();

    if (filters['blur'].val > 0) f.push(`blur(${filters['blur'].val}px)`);

    if (filters['brightness'].val !== 1)
      f.push(`brightness(${filters['brightness'].val})`);

    if (filters['contrast'].val !== 1)
      f.push(`contrast(${filters['contrast'].val})`);

    if (filters['saturation'].val !== 1)
      f.push(`saturate(${filters['saturation'].val})`);

    if (filters['grayscale'].val > 0)
      f.push(`grayscale(${filters['grayscale'].val})`);

    if (filters['hueRotate'].val !== 0)
      f.push(`hue-rotate(${filters['hueRotate'].val}deg)`);

    if (filters['invert'].val > 0) f.push(`invert(${filters['invert'].val})`);

    if (filters['opacity'].val !== 1)
      f.push(`opacity(${filters['opacity'].val})`);

    if (filters['sepia'].val > 0) f.push(`sepia(${filters['sepia'].val})`);

    const sx = filters['shadowX'].val;
    const sy = filters['shadowY'].val;
    const sb = filters['shadowBlur'].val;

    if (sx !== 0 || sy !== 0 || sb > 0) {
      f.push(`drop-shadow(${sx}px ${sy}px ${sb}px ${this.shadowColor()})`);
    }

    return f.join(' ') || 'none';
  });

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.onEnd = this.onEnd.bind(this);
      this.onMove = this.onMove.bind(this);
      this.onResize = this.onResize.bind(this);
      this.onStart = this.onStart.bind(this);

      effect(() => {
        const canvasEl = this.canvas();

        if (canvasEl) {
          this.ctx.set(canvasEl.nativeElement.getContext('2d'));

          return;
        }

        this.ctx.set(null);
      });

      effect(() => {
        const img = this.img();

        if (img) {
          img.crossOrigin = 'anonymous';
          img.addEventListener('load', () => {
            this.imgLoaded.set(true);
            this.resizeAndDraw();
          });

          img.src =
            'https://kherrick.github.io/x-ml-data/2025/01/aurora-borealis/2025-01-01-aurora-borealis.jpg';
        }
      });

      effect(() => {
        this.filterString();

        if (this.imgLoaded()) {
          this.redraw();
        }
      });

      const shadowRoot = this.elementRef.nativeElement.shadowRoot;

      if (shadowRoot) {
        shadowRoot.addEventListener('resize', this.onResize);
      }
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      const shadowRoot = this.elementRef.nativeElement.shadowRoot;

      if (shadowRoot) {
        shadowRoot.removeEventListener('resize', this.onResize);
      }
    }
  }

  updateFilter(key: string, event: Event) {
    const target = event.target as HTMLInputElement;
    const value = parseFloat(target.value);

    this.filters.update((filters) => ({
      ...filters,
      [key]: { ...filters[key], val: value },
    }));
  }

  updateShadowColor(event: Event) {
    const target = event.target as HTMLInputElement;
    this.shadowColor.set(target.value);
  }

  getLabel(key: string): string {
    const labels: Record<string, string> = {
      blur: 'Blur',
      brightness: 'Brightness',
      contrast: 'Contrast',
      saturation: 'Saturation',
      grayscale: 'Grayscale',
      hueRotate: 'Hue Rotate',
      invert: 'Invert',
      opacity: 'Opacity',
      sepia: 'Sepia',
      shadow: 'Drop Shadow',
    };
    return labels[key] || key;
  }

  formatValue(key: string): string {
    const f = this.filters()[key];
    if (key === 'hueRotate') return f.val + f.unit;
    if (key === 'blur') return f.val.toFixed(1) + f.unit;
    if (key.startsWith('shadow'))
      return f.val.toFixed(key === 'shadowBlur' ? 1 : 0) + f.unit;
    return f.val.toFixed(2) + f.unit;
  }

  applyTransforms() {
    const ctx = this.ctx();
    const canvas = this.canvas()?.nativeElement;
    if (!ctx || !canvas) return;

    if (this.rotation() !== 0) {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate((this.rotation() * Math.PI) / 180);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
    }

    if (this.isFlippedH() || this.isFlippedV()) {
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.scale(this.isFlippedH() ? -1 : 1, this.isFlippedV() ? -1 : 1);
      ctx.translate(-canvas.width / 2, -canvas.height / 2);
    }
  }

  drawFitted() {
    const ctx = this.ctx();
    const canvas = this.canvas()?.nativeElement;
    const img = this.img();
    if (!ctx || !canvas || !img) return;

    const cAsp = canvas.width / canvas.height;
    const iAsp = img.width / img.height;

    const filters = this.filters();
    const sx = Math.abs(filters['shadowX'].val);
    const sy = Math.abs(filters['shadowY'].val);
    const sb = filters['shadowBlur'].val;
    const pad = Math.max(sx + sb, sy + sb) || 0;
    const padding = pad > 0 ? pad + 5 : 0;

    const availW = canvas.width - padding * 2;
    const availH = canvas.height - padding * 2;
    const availAsp = availW / availH;

    let w, h, x, y;
    if (iAsp > availAsp) {
      w = availW;
      h = availW / iAsp;
      x = padding;
      y = padding + (availH - h) / 2;
    } else {
      h = availH;
      w = availH * iAsp;
      x = padding + (availW - w) / 2;
      y = padding;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (this.rotation() !== 0 || this.isFlippedH() || this.isFlippedV()) {
      ctx.save();
      this.applyTransforms();
    }

    ctx.drawImage(img, x, y, w, h);

    if (this.rotation() !== 0 || this.isFlippedH() || this.isFlippedV()) {
      ctx.restore();
    }

    this.lastDraw.set({ offsetX: x, offsetY: y, drawWidth: w, drawHeight: h });
  }

  drawWithFilters() {
    if (this.isCropped()) return;
    const ctx = this.ctx();
    if (!ctx) return;

    ctx.save();
    ctx.filter = this.filterString();
    this.drawFitted();
    ctx.restore();
  }

  drawSelRect() {
    const selRect = this.selRect();
    const ctx = this.ctx();
    if (!selRect || this.isCropped() || !ctx) return;

    ctx.save();
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 2;
    ctx.setLineDash([6]);
    ctx.strokeRect(selRect.x, selRect.y, selRect.w, selRect.h);
    ctx.restore();
  }

  redraw() {
    if (this.isCropped()) {
      this.updateCroppedFilters();
    } else {
      this.drawWithFilters();
      this.drawSelRect();
    }
  }

  resizeAndDraw() {
    if (this.isCropped()) return;
    const wrapper = this.wrapper()?.nativeElement;
    const canvas = this.canvas()?.nativeElement;
    if (!wrapper || !canvas) return;

    const rect = wrapper.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    if (this.imgLoaded()) {
      this.drawWithFilters();
      this.drawSelRect();
    }
  }

  updateCroppedFilters() {
    const croppedData = this.croppedData();
    const ctx = this.ctx();
    const canvas = this.canvas()?.nativeElement;
    if (!this.isCropped() || !croppedData || !ctx || !canvas) return;

    const filters = this.filters();
    const sx = Math.abs(filters['shadowX'].val);
    const sy = Math.abs(filters['shadowY'].val);
    const sb = filters['shadowBlur'].val;
    const pad = Math.max(sx + sb, sy + sb) || 0;
    const padding = pad > 0 ? pad + 5 : 0;

    const w = croppedData.width;
    const h = croppedData.height;

    canvas.width = w + padding * 2;
    canvas.height = h + padding * 2;

    const temp = document.createElement('canvas');
    const tempCtx = temp.getContext('2d')!;
    temp.width = w;
    temp.height = h;
    tempCtx.putImageData(croppedData, 0, 0);

    ctx.save();
    ctx.filter = this.filterString();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(temp, padding, padding);
    ctx.restore();
  }

  flipCropped(horizontal: boolean, vertical: boolean) {
    const croppedData = this.croppedData();
    if (!croppedData) return;

    const w = croppedData.width;
    const h = croppedData.height;

    const temp = document.createElement('canvas');
    const tempCtx = temp.getContext('2d')!;
    temp.width = w;
    temp.height = h;
    tempCtx.putImageData(croppedData, 0, 0);

    const flip = document.createElement('canvas');
    const flipCtx = flip.getContext('2d')!;
    flip.width = w;
    flip.height = h;

    flipCtx.save();
    flipCtx.translate(w / 2, h / 2);
    flipCtx.scale(horizontal ? -1 : 1, vertical ? -1 : 1);
    flipCtx.translate(-w / 2, -h / 2);
    flipCtx.drawImage(temp, 0, 0);
    flipCtx.restore();

    this.croppedData.set(flipCtx.getImageData(0, 0, w, h));
  }

  rotateCropped() {
    const croppedData = this.croppedData();
    const canvas = this.canvas()?.nativeElement;
    if (!croppedData || !canvas) return;

    const w = croppedData.width;
    const h = croppedData.height;

    const temp = document.createElement('canvas');
    const tempCtx = temp.getContext('2d')!;
    temp.width = w;
    temp.height = h;
    tempCtx.putImageData(croppedData, 0, 0);

    const rot = document.createElement('canvas');
    const rotCtx = rot.getContext('2d')!;
    rot.width = h;
    rot.height = w;

    rotCtx.save();
    rotCtx.translate(rot.width / 2, rot.height / 2);
    rotCtx.rotate(Math.PI / 2);
    rotCtx.translate(-w / 2, -h / 2);
    rotCtx.drawImage(temp, 0, 0);
    rotCtx.restore();

    this.croppedData.set(rotCtx.getImageData(0, 0, rot.width, rot.height));
    canvas.width = rot.width;
    canvas.height = rot.height;
  }

  getPos(e: MouseEvent | TouchEvent): { x: number; y: number } {
    const canvas = this.canvas()?.nativeElement;
    if (!canvas) return { x: 0, y: 0 };

    const rect = canvas.getBoundingClientRect();
    let x: number, y: number;

    if ('touches' in e) {
      x = e.touches[0].clientX - rect.left;
      y = e.touches[0].clientY - rect.top;
    } else {
      x = e.clientX - rect.left;
      y = e.clientY - rect.top;
    }

    x *= canvas.width / rect.width;
    y *= canvas.height / rect.height;

    return { x, y };
  }

  onStart(e: MouseEvent | TouchEvent) {
    e.preventDefault();

    if (this.isCropped()) return;
    this.isSelecting.set(true);
    const pos = this.getPos(e);
    this.selStart.set(pos);
    this.selEnd.set(pos);
    this.selRect.set(null);
    this.redraw();
  }

  onMove(e: MouseEvent | TouchEvent) {
    e.preventDefault();

    if (!this.isSelecting() || this.isCropped()) return;
    const pos = this.getPos(e);
    const selStart = this.selStart();
    if (!selStart) return;

    this.selEnd.set(pos);

    const x = Math.min(selStart.x, pos.x);
    const y = Math.min(selStart.y, pos.y);
    const w = Math.abs(selStart.x - pos.x);
    const h = Math.abs(selStart.y - pos.y);
    this.selRect.set({ x, y, w, h });
    this.redraw();
  }

  onEnd(e: MouseEvent | TouchEvent) {
    e.preventDefault();

    if (!this.isSelecting() || this.isCropped()) return;

    this.isSelecting.set(false);

    this.onMove(e);
  }

  onResize() {
    const ctx = this.ctx();

    if (ctx) {
      if (!this.isCropped()) {
        this.selRect.set(null);
      }

      ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

      if (this.imgLoaded()) {
        this.redraw();
      }
    }
  }

  onFilterChange() {
    if (this.imgLoaded()) {
      this.redraw();
    }
  }

  crop() {
    if (this.isCropped()) {
      alert('Already cropped. Use Reset All to return to original image.');
      return;
    }

    const selRect = this.selRect();
    if (!selRect || selRect.w < 5 || selRect.h < 5) {
      alert('Please select a region to crop.');
      return;
    }

    const lastDraw = this.lastDraw();
    const img = this.img();
    const canvas = this.canvas()?.nativeElement;
    const ctx = this.ctx();
    if (!lastDraw || !img || !canvas || !ctx) return;

    const { offsetX, offsetY, drawWidth, drawHeight } = lastDraw;
    const scaleX = img.width / drawWidth;
    const scaleY = img.height / drawHeight;

    let sx = (selRect.x - offsetX) * scaleX;
    let sy = (selRect.y - offsetY) * scaleY;
    let sw = selRect.w * scaleX;
    let sh = selRect.h * scaleY;

    sx = Math.max(0, sx);
    sy = Math.max(0, sy);
    sw = Math.max(1, Math.min(img.width - sx, sw));
    sh = Math.max(1, Math.min(img.height - sy, sh));

    canvas.width = selRect.w;
    canvas.height = selRect.h;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, sx, sy, sw, sh, 0, 0, selRect.w, selRect.h);

    this.croppedData.set(ctx.getImageData(0, 0, canvas.width, canvas.height));
    this.isCropped.set(true);
    this.updateCroppedFilters();
    this.selRect.set(null);
  }

  flipHorizontal() {
    if (this.isCropped()) {
      this.flipCropped(true, false);
      this.updateCroppedFilters();
    } else {
      this.isFlippedH.update((val) => !val);
      if (this.imgLoaded()) this.redraw();
    }
  }

  flipVertical() {
    if (this.isCropped()) {
      this.flipCropped(false, true);
      this.updateCroppedFilters();
    } else {
      this.isFlippedV.update((val) => !val);
      if (this.imgLoaded()) this.redraw();
    }
  }

  rotate() {
    if (this.isCropped()) {
      this.rotateCropped();
      this.updateCroppedFilters();
    } else {
      this.rotation.update((val) => (val + 90) % 360);
      if (this.imgLoaded()) this.redraw();
    }
  }

  reset() {
    this.filters.update((filters) => {
      const newFilters = { ...filters };
      Object.keys(newFilters).forEach((key) => {
        newFilters[key].val = newFilters[key].def;
      });
      return newFilters;
    });

    this.shadowColor.set('#000000');
    this.rotation.set(0);
    this.isFlippedH.set(false);
    this.isFlippedV.set(false);
    this.isCropped.set(false);
    this.croppedData.set(null);
    this.selRect.set(null);

    const wrapper = this.wrapper()?.nativeElement;
    const canvas = this.canvas()?.nativeElement;
    if (wrapper && canvas) {
      const rect = wrapper.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      if (this.imgLoaded()) {
        this.drawWithFilters();
      }
    }
  }
}
