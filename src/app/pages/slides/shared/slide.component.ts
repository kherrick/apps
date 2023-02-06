import { CommonModule, DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
  ViewEncapsulation
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-slide',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div
      (keydown)="handleKeydown($event)"
      id="stage"
      tabindex="0"
      [ngClass]="{ dark: !isLightMode, light: isLightMode }"
    >
      <section [ngClass]="{ 'with-padding': isFullscreen }">
        <header>
          <ng-content select="[header]"></ng-content>
          <div class="toggles">
            <i
              *ngIf="isFullscreen"
              (click)="handleModeToggle()"
              class="material-icons mode-toggle"
              >{{ isLightMode ? 'dark_mode' : 'light_mode' }}</i
            >
            <i (click)="handleFullScreen($event)" class="material-icons">{{
              isFullscreen ? 'fullscreen_exit' : 'fullscreen'
            }}</i>
          </div>
        </header>
        <section class="content">
          <ng-content select="[sub-header]"></ng-content>
          <ng-content select="[list]"></ng-content>
        </section>
        <footer><ng-content select="[footer]"></ng-content></footer>
      </section>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap');

      #stage {
        display: block;
        min-height: 100%;
        outline: none;

        a {
          color: #222;
        }

        &.dark {
          background-color: black;
          color: white;

          a {
            color: #ddd;
          }
        }

        header {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          text-align: center;

          .toggles {
            display: flex;

            i.material-icons {
              cursor: pointer;
            }

            .mode-toggle {
              margin-right: 0.5rem;
            }
          }

          h1 {
            font-size: 2rem;
            width: 100%;
          }
        }

        section {
          overflow: hidden;

          &.with-padding {
            padding: 1rem 1rem 0 1rem;
          }

          .content {
            align-items: center;
            display: flex;
            flex-direction: column;

            h2 {
              text-align: center;
            }

            ul {
              padding-left: 1.5rem;
            }

            @media only screen and (min-width: 599px) {
              li {
                width: 240px;
              }
            }


            @media only screen and (min-width: 600px) {
              ul {
                font-size: 1.75rem;
              }

              li {
                width: 400px;
              }
            }

            @media only screen and (min-width: 700px) {
              li {
                width: 450px;
              }
            }

            @media only screen and (min-width: 1000px) {
              li {
                width: 700px;
              }
            }

            li:is([media]) {
              width: 100%;
            }

            li {
              animation: 1s alternate slidein;
              margin-top: 0.25rem;


              blockquote {
                font-style: italic;
                margin: 0.25rem 0 0 0;
              }

              blockquote { quotes: '"' '"'; }
              blockquote:before { content: open-quote; }
              blockquote:after  { content: close-quote; }

              img {
                max-width: 700px;
                width: 100%;
              }

              @keyframes slidein {
                from {
                  margin-left: 100%;
                  opacity: 0.5;
                }

                to {
                  margin-left: 0%;
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SlideComponent implements OnInit, OnDestroy {
  public isFullscreen: boolean = false;
  public isLightMode: boolean = true;
  public isEnd: boolean = false;
  public isLast: boolean = false;
  public lastSlide: string = '';

  private slide: number;
  private list!: HTMLUListElement;
  private shouldHide: boolean =
    history.state['next'] !== false || history.state['next'] === true;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private el: ElementRef,
    private router: Router
  ) {
    const path =
      this.router.getCurrentNavigation()?.finalUrl?.root.children['primary']
        .segments[1]?.path;

    this.slide = path ? Number(path) : 0;

    this.document.addEventListener('fullscreenchange', () =>
      this.fullscreenChangeListener()
    );
  }

  ngOnInit(): void {
    // get persisted state for fullscreen and mode
    const slidesMode = sessionStorage.getItem('apps-slides-mode');
    const isFullscreen =
      sessionStorage.getItem('apps-slides-fullscreen') === 'enabled';

    this.isFullscreen =
      isFullscreen === null || isFullscreen === false ? false : true;
    this.isLightMode =
      slidesMode === null || slidesMode === 'light' ? true : false;

    if (slidesMode === 'dark') {
      this.toggleMode(false);
    }

    const shadowRoot = this.el.nativeElement.shadowRoot;

    // check for last/end slide
    this.isEnd = shadowRoot.host.getAttribute('end') !== null;
    this.isLast = shadowRoot.host.getAttribute('last') !== null;

    // focus the stage
    const stage = shadowRoot.getElementById('stage');
    stage.focus();

    // setup gesture detection
    const hammer = new Hammer(stage);
    hammer.on('swipeleft swiperight', (event) => this.handleGestures(event));

    // initialize the list to hidden
    if (this.shouldHide) {
      shadowRoot
        .querySelectorAll('ul')
        .forEach((el: HTMLUListElement) => el.setAttribute('hidden', 'hidden'));
      shadowRoot
        .querySelectorAll('li')
        .forEach((el: HTMLLIElement) => el.setAttribute('hidden', 'hidden'));
    }

    this.list = shadowRoot.querySelector('ul');
    this.list?.removeAttribute('hidden');

    history.replaceState({}, document.title);

    setTimeout(() => {
      (window as unknown as Window).scrollTo(
        0,
        this.document.body.scrollHeight
      );
    }, 1000);
  }

  ngOnDestroy(): void {
    this.document.removeEventListener(
      'fullscreenchange',
      this.fullscreenChangeListener
    );
  }

  fullscreenChangeListener() {
    this.isFullscreen = !!this.document.fullscreenElement;

    this.toggleMode();
  }

  handleBackward() {
    const listItem = this.list.querySelectorAll('li:not([hidden])');
    const lastListItem = listItem[listItem.length - 1];

    if (lastListItem) {
      lastListItem.animate([{ opacity: '1' }, { opacity: '0' }], {
        duration: 200,
      });

      setTimeout(() => {
        lastListItem.setAttribute('hidden', 'hidden');
      }, 150);
    }

    if (lastListItem?.previousSibling === null) {
      lastListItem?.parentElement?.setAttribute('hidden', 'hidden');
    }

    if (!lastListItem) {
      this.handlePreviousSlide();
    }
  }

  handleForward() {
    const hiddenListItem = this.list.querySelector('li[hidden]');

    if (hiddenListItem) {
      hiddenListItem.removeAttribute('hidden');
    }

    if (hiddenListItem?.parentElement?.hasAttribute('hidden')) {
      hiddenListItem.parentElement.removeAttribute('hidden');
    }

    if (!hiddenListItem) {
      this.handleNextSlide();
    }

    if (
      this.document.body.scrollHeight >
      (window as unknown as Window).innerHeight
    ) {
      requestAnimationFrame(() => {
        (window as unknown as Window).scrollTo(
          0,
          this.document.body.scrollHeight
        );
      });
    }
  }

  handleGestures(event: HammerInput) {
    if (event.type === 'swipeleft') {
      this.handleForward();
    }

    if (event.type === 'swiperight') {
      this.handleBackward();
    }
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      this.handleBackward();
    }

    if (event.key === 'ArrowRight') {
      this.handleForward();
    }
  }

  handleNextSlide() {
    if (this.isLast) {
      sessionStorage.setItem('apps-slides-last', `${this.slide}`);

      this.router.navigate([`slides/end`], {
        state: { next: true },
      });

      return;
    }

    if (!this.isEnd) {
      this.router.navigate([`slides/${this.slide + 1}`], {
        state: { next: true },
      });
    }
  }

  handlePreviousSlide() {
    const hasLastSlide = sessionStorage.getItem('apps-slides-last');

    if (hasLastSlide) {
      sessionStorage.removeItem('apps-slides-last');

      this.router.navigate([`slides/${hasLastSlide}`], {
        state: { next: false },
      });

      return;
    }

    this.router.navigate([`slides/${this.slide - 1}`], {
      state: { next: false },
    });
  }

  handleFullScreen(event: Event) {
    const currentIcon = event.target as HTMLElement;
    const isFullscreen = currentIcon.textContent === 'fullscreen';

    currentIcon.textContent = isFullscreen ? 'fullscreen_exit' : 'fullscreen';

    this.el.nativeElement.dispatchEvent(
      new CustomEvent('fullscreen', {
        detail: { isFullscreen },
        composed: true,
      })
    );
  }

  handleModeToggle() {
    const currentIcon = this.el.nativeElement.shadowRoot.querySelector(
      '.mode-toggle'
    ) as HTMLElement;
    const isLightMode = currentIcon?.textContent === 'light_mode';

    this.toggleMode(isLightMode);
  }

  // @todo - revisit this, as it is really basic, and uses predefined colors
  // consider using https://github.com/rodydavis/material-theme-control
  toggleMode(isLightMode: boolean = true) {
    const stage = this.el.nativeElement.shadowRoot.getElementById('stage');
    const svgText = stage.querySelector('tspan');

    this.isLightMode = isLightMode;

    if (isLightMode) {
      sessionStorage.setItem('apps-slides-mode', 'light');

      if (svgText) {
        svgText.style.stroke = 'black';
      }
    } else {
      sessionStorage.setItem('apps-slides-mode', 'dark');

      if (svgText) {
        svgText.style.stroke = 'white';
      }
    }
  }
}
