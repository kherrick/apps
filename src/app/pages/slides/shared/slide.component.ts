import { CommonModule, isPlatformBrowser } from '@angular/common';

import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
  inject,
  DOCUMENT,
} from '@angular/core';

import {
  ActivatedRoute,
  Router,
  RouterModule,
  UrlSegment,
} from '@angular/router';

import { Subscription } from 'rxjs';

@Component({
  selector: 'x-slide',
  imports: [CommonModule, RouterModule],
  template: `
    <div (keydown)="handleKeydown($event)" slide-container>
      <div toggles [ngClass]="{ fullscreen: isFullscreen }">
        <i (click)="handleTune()" class="material-icons">tune</i>
        <i (click)="handleFullScreen($event)" class="material-icons">{{
          isFullscreen ? 'fullscreen_exit' : 'fullscreen'
        }}</i>
      </div>
      <div stage-container>
        @if (tune === 'on') {
          @if (isFirst) {
            <div class="previous"></div>
          } @else {
            <div class="previous" (click)="handleBackward()">
              <button class="previous pointer">
                <i class="material-icons control-icon" style="slide-icon">
                  arrow_back
                </i>
              </button>
            </div>
          }
        }
        <section
          id="stage"
          tabindex="0"
          [ngClass]="{ dark: !isLightMode, light: isLightMode }"
        >
          <section
            [ngClass]="{ 'with-padding': isFullscreen || this.tune === 'off' }"
          >
            <header>
              <ng-content select="[header]"></ng-content>
            </header>
            <section class="content">
              <ng-content select="[sub-header]"></ng-content>
              <ng-content select="[list]"></ng-content>
            </section>
            <footer><ng-content select="[footer]"></ng-content></footer>
          </section>
        </section>
        @if (tune === 'on') {
          @if (isEnd) {
            <div class="next"></div>
          } @else {
            <div class="next" (click)="handleForward()">
              <button class="next pointer">
                <i class="material-icons control-icon" style="slide-icon">
                  arrow_forward
                </i>
              </button>
            </div>
          }
        }
      </div>
    </div>
  `,
  styles: [
    `
      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      [slide-container] {
        display: flex;
        height: 100%;
        flex-direction: column;

        .control-icon {
          font-size: 2.5rem;
        }

        [toggles] {
          display: flex;
          justify-content: right;
          margin-right: 1rem;

          i.material-icons {
            cursor: pointer;
          }

          &.fullscreen {
            padding-top: 1rem;
          }
        }

        [stage-container] {
          display: flex;
          flex: auto;

          .next,
          .previous {
            align-items: center;
            color: var(--md-sys-color-tertiary);
            display: flex;
            justify-content: center;
            user-select: none;
            width: 4rem;
          }

          button.previous,
          button.next {
            height: 95%;
            margin: 0 1rem;
            padding: 0;
          }

          .pointer:hover,
          .pointer:hover {
            color: var(--md-sys-color-primary);
            cursor: pointer;
          }

          #stage {
            display: block;
            flex: 1;
            min-height: 100%;
            outline: none;

            a,
            a:link,
            a:focus,
            a:hover,
            a:active,
            a:visited {
              color: var(--md-sys-color-on-surface);
              text-decoration: 1px underline #999;
            }

            /* &.dark {
              background-color: black;
              color: white;

              a {
                color: #ddd;
              }
            } */

            section {
              overflow: hidden;

              header {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                text-align: center;

                h1 {
                  font-size: 2rem;
                  width: 100%;
                }
              }

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

                  &[video] {
                    list-style: none;
                    padding: 0;
                  }
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

                li:is([quote]) {
                  list-style: none;
                }

                li {
                  animation: 1s alternate slidein;
                  margin-top: 0.25rem;

                  blockquote {
                    font-style: italic;
                    margin: 0.25rem 0 0 0;
                  }

                  blockquote {
                    quotes: '"' '"';
                  }

                  blockquote:before {
                    content: open-quote;
                  }

                  blockquote:after {
                    content: close-quote;
                  }

                  img {
                    max-width: 700px;
                    width: 100%;
                  }

                  video {
                    max-height: 90vh;
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
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SlideComponent implements AfterViewInit, OnInit, OnDestroy {
  public autoAdvance: string | null = '';
  public endFlag: boolean = false;
  public isEnd: boolean = false;
  public isFirst: boolean = false;
  public isFullscreen: boolean = false;
  public isLast: boolean = false;
  public isLightMode: boolean = true;
  public seg!: any;
  public tune: string = 'on';

  private document: Document = inject(DOCUMENT);
  private isBrowser: boolean;
  private list!: HTMLUListElement;
  private maxSteps: number = 100;
  private platformId: Object = inject(PLATFORM_ID);
  private routeSubscription: Subscription;
  private shouldHide: boolean =
    globalThis?.history?.state['next'] !== false ||
    globalThis?.history?.state['next'] === true;
  private slide: number = 0;
  private scrollHandlerTimeout: any;

  constructor(
    private el: ElementRef,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    this.routeSubscription = this.route.url.subscribe(
      (urlseg: UrlSegment[]) => {
        const path = urlseg[0]?.path;
        this.slide = path ? Number(path) : 0;
      },
    );

    this.document.addEventListener('fullscreenchange', () =>
      this.fullscreenChangeListener(),
    );
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      return;
    }

    const currentVal = localStorage.getItem('apps-slides-tune');
    const nextVal = currentVal === null || currentVal === 'on' ? 'on' : 'off';

    localStorage.setItem('apps-slides-tune', nextVal);
    this.tune = nextVal;

    // get persisted state for fullscreen and mode
    const isFullscreen =
      sessionStorage.getItem('apps-slides-fullscreen') === 'enabled';

    this.isFullscreen =
      isFullscreen === null || isFullscreen === false ? false : true;

    const shadowRoot = this.el.nativeElement.shadowRoot;

    // check for last/end slide
    this.isFirst = shadowRoot.host.getAttribute('first') !== null;
    this.isEnd = shadowRoot.host.getAttribute('end') !== null;
    this.isLast = shadowRoot.host.getAttribute('last') !== null;

    this.list = shadowRoot.querySelector('ul');
    this.list?.removeAttribute('hidden');

    // initialize the list to hidden
    if (this.shouldHide) {
      shadowRoot
        .querySelectorAll('ul')
        .forEach((el: HTMLUListElement) => el.setAttribute('hidden', 'hidden'));
      shadowRoot
        .querySelectorAll('li')
        .forEach((el: HTMLLIElement) => el.setAttribute('hidden', 'hidden'));

      history.replaceState({}, this.document.title);

      const nextQueryParam = new URLSearchParams(location.search);
      this.autoAdvance = nextQueryParam.get('n');

      if (this.autoAdvance) {
        const steps =
          Number(this.autoAdvance) < this.maxSteps
            ? Number(this.autoAdvance)
            : this.maxSteps;

        for (let index = 0; index < steps; index++) {
          this.handleForward(true);
          this.autoAdvance = `${Number(this.autoAdvance) - 1}`;
        }
      }
    } else {
      // we navigated back to a previous slide
      const searchParams = new URLSearchParams(location.search);

      searchParams.set('n', `${shadowRoot.querySelectorAll('li').length}`);

      history.replaceState(
        {},
        this.document.title,
        `${location.pathname}?${searchParams}`,
      );
    }

    // @todo // (globalThis as any).
    this.scrollHandlerTimeout = setTimeout(() => {
      (globalThis as any).scrollTo(0, this.document.body.scrollHeight);
    }, 0);
  }

  ngAfterViewInit(): void {
    if (!this.isBrowser) {
      return;
    }

    const shadowRoot = this.el.nativeElement.shadowRoot;

    // focus the stage
    const stage = shadowRoot.querySelector('#stage');
    stage.focus();

    // setup gesture detection
    const slideContainer = shadowRoot.querySelector('[slide-container]');
    import('hammerjs').then((HammerStatic) => {
      new (HammerStatic as any).default(slideContainer).on(
        'swipeleft swiperight',
        (event: HammerInput) => this.handleGestures(event),
      );
    });
  }

  ngOnDestroy(): void {
    this.document.removeEventListener(
      'fullscreenchange',
      this.fullscreenChangeListener,
    );

    clearTimeout(this.scrollHandlerTimeout);

    this.routeSubscription.unsubscribe();
  }

  fullscreenChangeListener() {
    this.isFullscreen = !!this.document.fullscreenElement;
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

    const visibleItems =
      this.el.nativeElement.shadowRoot.querySelectorAll('li:not([hidden])')
        .length - 1;

    if (visibleItems >= 0) {
      const searchParams = new URLSearchParams(location.search);

      searchParams.set('n', `${visibleItems}`);

      history.replaceState(
        {},
        this.document.title,
        `${location.pathname}?${searchParams}`,
      );
    }

    if (this.isEnd && !this.endFlag) {
      this.endFlag = true;
      this.handlePreviousSlide();
    }
  }

  handleForward(isAutoAdvance: boolean = false) {
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

    if (isAutoAdvance) {
      if (this.autoAdvance === '1') {
        this.autoAdvance = null;
      }

      return;
    }

    const searchParams = new URLSearchParams(location.search);
    const visibleItems =
      this.el.nativeElement.shadowRoot.querySelectorAll('li:not([hidden])');

    if (visibleItems.length <= this.maxSteps) {
      searchParams.set('n', `${visibleItems.length}`);

      history.replaceState(
        {},
        this.document.title,
        `${location.pathname}?${searchParams}`,
      );

      if (this.document.body.scrollHeight > (globalThis as any).innerHeight) {
        requestAnimationFrame(() => {
          (globalThis as any).scrollTo(0, this.document.body.scrollHeight);
        });
      }
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
    const presentationPath = location.pathname
      .split('/')
      .reduce(
        (acc: string[], cur: any, ind, arr) =>
          cur !== 'apps' && isNaN(cur) ? [...acc, cur] : acc,
        [],
      )
      .join('/');

    if (this.isLast) {
      sessionStorage.setItem('apps-slides-last', `${this.slide}`);

      this.router.navigate([`/${presentationPath}/end`], {
        state: { next: true },
        queryParams: { n: '1' },
      });

      return;
    }

    if (!this.isEnd) {
      this.router.navigate([`/${presentationPath}/${this.slide + 1}`], {
        state: { next: true },
      });
    }
  }

  handlePreviousSlide() {
    const presentationPath = location.pathname
      .split('/')
      .reduce(
        (acc: string[], cur: any, ind, arr) =>
          cur !== 'apps' && cur !== 'end' && isNaN(cur) ? [...acc, cur] : acc,
        [],
      )
      .join('/');

    const hasLastSlide = sessionStorage.getItem('apps-slides-last');

    if (hasLastSlide) {
      sessionStorage.removeItem('apps-slides-last');

      this.router.navigate([`/${presentationPath}/${hasLastSlide}`], {
        state: { next: false },
      });

      return;
    }
    this.router.navigate([`/${presentationPath}/${this.slide - 1}`], {
      state: { next: false },
    });
  }

  handleTune() {
    const currentVal = localStorage.getItem('apps-slides-tune');
    const nextVal = currentVal === 'on' ? 'off' : 'on';

    localStorage.setItem('apps-slides-tune', nextVal);
    this.tune = nextVal;
  }

  handleFullScreen(event: Event) {
    const currentIcon = event.target as HTMLElement;
    const isFullscreen = currentIcon.textContent === 'fullscreen';

    currentIcon.textContent = isFullscreen ? 'fullscreen_exit' : 'fullscreen';

    this.el.nativeElement.dispatchEvent(
      new CustomEvent('fullscreen', {
        detail: { isFullscreen },
        composed: true,
      }),
    );
  }
}
