import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  DOCUMENT,
  effect,
  ElementRef,
  inject,
  Injector,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  runInInjectionContext,
  signal,
  viewChild,
  ViewEncapsulation,
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

import { getModuleId } from './utils';

import { ThemeService } from '../../../shell/theme/theme.service';

@Component({
  selector: 'x-block-garden',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    @if (renderBlockGarden()) {
      <block-garden
        (block-garden-load)="handleBlockGardenEvents($event)"
        #blockGarden
      ></block-garden>
    } @else {
      <div #blockGardenInfo block-garden-container>
        <div block-garden>
          <section>
            <header>
              <h1><a href="https://kherrick.github.io/block-garden/">Block Garden</a></h1>
            </header>
            <section>
              <img
                (click)="handleLoad($event)"
                (keydown)="handleLoad($event)"
                src="assets/images/block-garden-launcher.png"
                class="launcher"
                tabindex="0"
              />
              <h2>
                <a href="https://kherrick.github.io/block-garden/">Block Garden</a> is a 3D sandbox
                exploration and farming game. Learn more at the
                <a href="https://github.com/kherrick/block-garden">project page</a>.
              </h2>

              <h3>🧩 Features:</h3>

              <ul class="features">
                <li>Procedural World Generation - Explore uniquely generated maps</li>
                <li>Farming System - Plant different types of seed with various growth cycles</li>
                <li>Resources - Featuring items like coal, iron, and gold</li>
                <li>Building - Use collected materials to place blocks and shape the world</li>
                <li>Clouds - Continue building in the sky</li>
                <li>
                  Discover - Open source, extendable by nature, map editor, color customization,
                  etc.
                </li>
              </ul>

              <h3>🎮 Quick Start:</h3>

              <ul class="quick-start">
                <li>Movement: w / a / s / d</li>
                <li>Camera: Arrow Keys</li>
                <li>Descend: Shift</li>
                <li>Jump / Ascend: Space</li>
                <li>Place / Remove Block: Enter</li>
                <li>Change Block: ~ / &#96;</li>
                <li>Open Inventory: e / i</li>
                <li>Toggle Hotbar: m</li>
                <li>Toggle Flight: k</li>
                <li>Click game canvas to lock mouse</li>
                <li>Use crosshair to center block placement</li>
                <li>Left Click (Hold): Break Block</li>
                <li>Right Click: Place Block</li>
              </ul>
            </section>
          </section>
        </div>
      </div>
    }
  `,
  styles: `
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

    :host {
      --md-outlined-text-field-container-shape: 1rem;
      --md-outlined-button-container-shape: 1rem;
      --md-outlined-button-disabled-label-text-color: var(--md-sys-color-on-surface);
    }

    block-garden {
      pointer-events: auto;
    }

    .launcher {
      cursor: pointer;
    }

    .features > li {
      padding-bottom: 0.5rem;
    }

    [block-garden-container] {
      align-items: center;
      color: var(--md-sys-color-on-surface);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      grid-column-gap: 1rem;
      grid-row-gap: 1rem;
      justify-content: center;
      text-align: center;

      a {
        color: var(--md-sys-color-on-surface);
        text-decoration: underline;
      }

      [block-garden] {
        max-width: 35rem;
        text-align: center;
        display: flex;
        justify-content: center;

        iframe {
          height: auto;
          min-height: 17.5625rem;
          width: 100%;
        }

        img {
          width: calc(100% - 2rem);
        }

        p {
          padding: 0 1rem;
        }

        ul {
          padding: 0 3rem;
          text-align: left;
        }

        h2,
        h3 {
          text-align: left;
        }
      }
    }

    block-garden {
      --bg-color-black: #121212;
      --bg-tile-fog-color: var(--x-shell-background-color);

      display: none;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XBlockGardenComponent implements OnInit, OnDestroy {
  doc = inject(DOCUMENT);
  isLoading = signal(false);
  injector = inject(Injector);
  resizeObserver!: ResizeObserver;
  renderBlockGarden = signal(false);
  themeService = inject(ThemeService);
  platformId: Object = inject(PLATFORM_ID);
  canvasEl = signal<HTMLCanvasElement | null>(null);
  blockGarden = viewChild<ElementRef<HTMLElement>>('blockGarden');
  blockGardenInfo = viewChild<ElementRef<HTMLElement>>('blockGardenInfo');

  xblockGardenCommit = '1.11.6';
  xblockGardenCommitPath = 'block-garden-bundle-min.mjs';

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const moduleSrc = `https://raw.githubusercontent.com/kherrick/block-garden/${this.xblockGardenCommit}/${this.xblockGardenCommitPath}`;
      const moduleId = getModuleId(moduleSrc);

      if (globalThis.document.getElementById(moduleId)) {
        return;
      }

      const scriptContent = await (await fetch(moduleSrc)).text();
      const script = globalThis.document.createElement('script');

      script.setAttribute('type', 'module');
      script.setAttribute('id', moduleId);
      script.textContent = scriptContent;

      globalThis.document.body.append(script);
    }
  }

  constructor() {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        const cnvs = this.canvasEl();

        if (cnvs) {
          cnvs.focus();
        }
      });
    });
  }

  handleLoad(event: any) {
    if (event.key && event.key !== ' ' && event.key !== 'Enter') {
      return;
    }

    this.renderBlockGarden.set(true);
    const debounce = (func: (...args: any[]) => void, delay: number) => {
      let timeout: any;

      return (...args: any[]) => {
        clearTimeout(timeout);

        timeout = setTimeout(() => func(...args), delay);
      };
    };

    const detectWidthAndApplyStyleProperties = () => {
      const applyStyleProperties = (root: any, colorProps: any) => {
        for (const [property, value] of Object.entries(colorProps)) {
          root.style.setProperty(property, value);
        }
      };

      const smallProps = {
        '--bg-ui-grid-corner-max-height': 'calc(100dvh - 5rem)',
        '--bg-ui-grid-height': 'calc(100dvh - 6rem)',
        '--bg-ui-grid-width': 'calc(100vw - 2rem)',
        '--bg-ui-host-height': 'calc(100dvh - 5rem)',
        '--bg-ui-host-overflow': 'hidden',
        '--bg-ui-host-width': 'calc(100vw - 2rem)',
        '--bg-ui-touch-controls-bottom': '2rem',
        '--bg-ui-touch-controls-position': 'absolute',
        '--bg-ui-touch-controls-width': '100%',
      };

      const largeProps = {
        '--bg-ui-grid-corner-max-height': 'calc(100dvh - 5rem)',
        '--bg-ui-grid-height': 'calc(100dvh - 6rem)',
        '--bg-ui-grid-width': 'calc(100vw - 7rem)',
        '--bg-ui-host-height': 'calc(100dvh - 5rem)',
        '--bg-ui-host-overflow': 'hidden',
        '--bg-ui-host-width': 'calc(100vw - 7rem)',
        '--bg-ui-touch-controls-bottom': '6rem',
        '--bg-ui-touch-controls-position': 'absolute',
        '--bg-ui-touch-controls-width': '100%',
      };

      const bg = this.blockGarden()?.nativeElement;
      const computedWidth = globalThis.getComputedStyle(globalThis.document.body).width;
      const width = Number(computedWidth.slice(0, -2));

      if (width < 859) {
        applyStyleProperties(bg, smallProps);
      }

      if (width >= 859) {
        applyStyleProperties(bg, largeProps);
      }
    };

    const debouncedResize = debounce(() => {
      detectWidthAndApplyStyleProperties();
    }, 0);

    if (typeof ResizeObserver === 'function') {
      this.resizeObserver = new ResizeObserver(() => {
        debouncedResize();
      });

      this.resizeObserver.observe(this.doc.body);
    }

    const maxDuration = 10000; // 10 seconds max
    const interval = 20; // 20 ms check interval
    let elapsedTime = 0;

    const isCanvasBlank = (canvas: HTMLCanvasElement) => {
      const blank = this.doc.createElement('canvas');
      blank.width = canvas.width;
      blank.height = canvas.height;

      return canvas.toDataURL() === blank.toDataURL();
    };

    const checkForCanvasAndFocus = () => {
      const bg = this.blockGarden() as any;
      const cnvs = bg?.nativeElement?.shadowRoot?.querySelector('canvas');

      if (cnvs && !isCanvasBlank(cnvs)) {
        this.canvasEl.set(cnvs);

        return;
      }

      if (elapsedTime < maxDuration) {
        elapsedTime += interval;

        setTimeout(checkForCanvasAndFocus, interval);
      }
    };

    checkForCanvasAndFocus();
  }

  handleBlockGardenEvents(event: any) {
    const bg = this.blockGarden()?.nativeElement;
    const isLoading = !!event?.detail?.isLoading;

    this.isLoading.set(isLoading);

    const progress: HTMLProgressElement | null = this.doc.querySelector('.progress');
    if (!progress) {
      return;
    }

    progress.style.display = isLoading ? 'none' : 'unset';

    if (bg) {
      setTimeout(() => {
        progress.style.display = 'none';
        bg.style.display = 'flex';
      }, 0);
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.unobserve(this.doc.body);

    const progress: HTMLProgressElement | null = this.doc.querySelector('.progress');
    if (!progress) {
      return;
    }

    progress.style.display = 'none';
  }
}
