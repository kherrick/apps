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

import 'sprite-garden';

import { isPlatformBrowser } from '@angular/common';

import { getDeepGlobalValue, getModuleId, getModuleTextContent } from './utils';

import { ThemeService } from '../../../shell/theme/theme.service';

@Component({
  selector: 'x-sprite-garden',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    @if (renderSpriteGarden()) {
      <sprite-garden
        (sprite-garden-load)="handleSpriteGardenEvents($event)"
        #spriteGarden
      ></sprite-garden>
    } @else {
      <div #spriteGardenInfo sprite-garden-container>
        <div sprite-garden>
          <section>
            <header>
              <h1><a href="https://kherrick.github.io/sprite-garden/">Sprite Garden</a></h1>
            </header>
            <section>
              <img
                (click)="handleLoad($event)"
                (keydown)="handleLoad($event)"
                src="assets/images/sprite-garden-launcher.png"
                class="launcher"
                tabindex="0"
              />
              <h2>
                <a href="https://kherrick.github.io/sprite-garden/">Sprite Garden</a> is a 2D
                sandbox exploration and farming game. Learn more at the
                <a href="https://github.com/kherrick/sprite-garden">project page</a>.
              </h2>

              <ul class="features">
                <li>Procedural World Generation - Explore uniquely generated maps</li>
                <li>
                  Multiple Biomes - Forests, deserts, tundras, and swamps, with their own
                  characteristics
                </li>
                <li>
                  Farming System - Plant and harvest different crop types with various growth cycles
                </li>
                <li>Resource gathering - Dig for items like coal, iron, and gold</li>
                <li>
                  Cave Systems - Discover underground caves filled with resources and challenges
                </li>
                <li>Building - Use collected materials to place blocks and shape the world</li>
                <li>
                  Clouds - Continue building and farming while in the sky<br /><br />
                  <iframe
                    allowfullscreen=""
                    frameborder="0"
                    src="//www.youtube.com/embed/Es60fVIyOjY"
                  ></iframe>
                </li>

                <li>
                  Discover - Open source, extendable by nature, map editor, color customization,
                  etc.<br /><br />
                  <iframe
                    allowfullscreen=""
                    frameborder="0"
                    src="//www.youtube.com/embed/VQbZTvWGXM4"
                  ></iframe>
                </li>
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

    .launcher {
      cursor: pointer;
    }

    .features > li {
      padding-bottom: 0.5rem;
    }

    [sprite-garden-container] {
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

      [sprite-garden] {
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
      }
    }

    sprite-garden {
      --sg-color-black: #121212;
      --sg-tile-fog-color: var(--x-shell-background-color);

      display: none;
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XSpriteGardenComponent implements OnInit, OnDestroy {
  doc = inject(DOCUMENT);
  isLoading = signal(false);
  injector = inject(Injector);
  resizeObserver!: ResizeObserver;
  renderSpriteGarden = signal(false);
  themeService = inject(ThemeService);
  platformId: Object = inject(PLATFORM_ID);
  canvasEl = signal<HTMLCanvasElement | null>(null);
  spriteGarden = viewChild<ElementRef<HTMLElement>>('spriteGarden');
  spriteGardenInfo = viewChild<ElementRef<HTMLElement>>('spriteGardenInfo');

  fogMapModuleCommit = '2314d3616959bb8877b9591adf600a9d3b573b09';
  fogMapModuleCommitPath = 'src/map/fog.mjs';
  fogMapModuleClassName = 'FogMap';

  async ngOnInit(): Promise<void> {
    if (isPlatformBrowser(this.platformId)) {
      const moduleSrc = `https://raw.githubusercontent.com/kherrick/sprite-garden/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`;
      const moduleId = getModuleId(moduleSrc);

      if (globalThis.document.getElementById(moduleId)) {
        return;
      }

      const scriptContent = await (await fetch(moduleSrc)).text();
      const script = globalThis.document.createElement('script');
      script.setAttribute('type', 'module');
      script.setAttribute('id', moduleId);
      script.textContent = getModuleTextContent(
        this.fogMapModuleClassName,
        this.fogMapModuleCommit,
        this.fogMapModuleCommitPath,
        scriptContent,
      );

      globalThis.document.body.append(script);
    }
  }

  constructor() {
    runInInjectionContext(this.injector, () => {
      effect(async () => {
        const spriteGarden = (globalThis as any)?.spriteGarden;
        const theme = this.themeService.theme();

        const gameState = spriteGarden?.state;
        const gameConfig = spriteGarden?.config;

        const worldWidth = gameConfig?.WORLD_WIDTH?.get();
        const worldHeight = gameConfig?.WORLD_HEIGHT?.get();

        let colors;
        if (theme === 'dark') {
          colors = {
            ...gameState?.exploredMap.get().colors,
            '--sg-tile-fog-color': '#121212',
          };
        }

        if (theme === 'light') {
          colors = {
            ...gameState?.exploredMap.get().colors,
            '--sg-tile-fog-color': '#ffffff',
          };
        }

        const moduleSrc = `spriteGarden/refs/${this.fogMapModuleCommit}/${this.fogMapModuleCommitPath}`;
        const moduleId = getModuleId(moduleSrc);

        const FogMap = getDeepGlobalValue(globalThis, moduleId.split(':'));
        const fogMap = FogMap?.fromObject(
          {
            ...gameState?.exploredMap.get(),
            colors,
          },
          worldWidth,
          worldHeight,
          colors,
        );

        gameState?.exploredMap.set(fogMap);
      });

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

    this.renderSpriteGarden.set(true);
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
        '--sg-ui-grid-corner-max-height': 'calc(100dvh - 5rem)',
        '--sg-ui-grid-height': 'calc(100dvh - 6rem)',
        '--sg-ui-grid-width': 'calc(100vw - 2rem)',
        '--sg-ui-host-height': 'calc(100dvh - 5rem)',
        '--sg-ui-host-overflow': 'hidden',
        '--sg-ui-host-width': 'calc(100vw - 2rem)',
        '--sg-ui-touch-controls-bottom': '2rem',
        '--sg-ui-touch-controls-position': 'absolute',
        '--sg-ui-touch-controls-width': '100%',
      };

      const largeProps = {
        '--sg-ui-grid-corner-max-height': 'calc(100dvh - 5rem)',
        '--sg-ui-grid-height': 'calc(100dvh - 6rem)',
        '--sg-ui-grid-width': 'calc(100vw - 7rem)',
        '--sg-ui-host-height': 'calc(100dvh - 5rem)',
        '--sg-ui-host-overflow': 'hidden',
        '--sg-ui-host-width': 'calc(100vw - 7rem)',
        '--sg-ui-touch-controls-bottom': '6rem',
        '--sg-ui-touch-controls-position': 'absolute',
        '--sg-ui-touch-controls-width': '100%',
      };

      const sg = this.spriteGarden()?.nativeElement;
      const computedWidth = globalThis.getComputedStyle(globalThis.document.body).width;
      const width = Number(computedWidth.slice(0, -2));

      if (width < 859) {
        applyStyleProperties(sg, smallProps);
      }

      if (width >= 859) {
        applyStyleProperties(sg, largeProps);
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
      const sg = this.spriteGarden() as any;
      const cnvs = sg?.nativeElement?.shadowRoot?.querySelector('canvas');

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

  handleSpriteGardenEvents(event: any) {
    const sg = this.spriteGarden()?.nativeElement;
    const isLoading = !!event?.detail?.isLoading;

    this.isLoading.set(isLoading);

    const progress: HTMLProgressElement | null = this.doc.querySelector('.progress');
    if (!progress) {
      return;
    }

    progress.style.display = isLoading ? 'none' : 'unset';

    if (sg) {
      setTimeout(() => {
        progress.style.display = 'none';
        sg.style.display = 'flex';
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
