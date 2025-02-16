import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  ElementRef,
  Inject,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'x-pwgen-container',
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <section app-section>
      <section id="grid-container">
        <section id="top">
          <section id="branding">
            <section id="title">
              <h1>
                <a href="https://kherrick.github.io/pwgen/">pwgen</a>
              </h1>
            </section>
          </section>
          <section>
            <p>
              A
              <a href="https://kherrick.github.io/pwgen/">password generator</a>
              compiled as Wasm for use on the CLI, in a custom element, or as a
              module. Learn more at the
              <a href="https://github.com/kherrick/pwgen/" target="_top"
                >project page</a
              >.
            </p>
          </section>
        </section>
        <section id="middle">
          <x-pwgen #xpwgen flags="-sy"></x-pwgen>
        </section>
        <section id="bottom">
          <mwc-tab-bar #mwcTabBar>
            <mwc-tab (click)="handleMainClick()" label="Main"></mwc-tab>
            <mwc-tab (click)="handleOptionsClick()" label="Options"></mwc-tab>
          </mwc-tab-bar>
          <section
            [ngClass]="tabContentIndex === 0 ? 'show' : 'hide'"
            data-tab-content-0
          >
            <mwc-formfield label="Number of Passwords">
              <mwc-slider
                id="number-of-passwords"
                markers=""
                max="5"
                min="1"
                (change)="handleNumberSetting($event)"
                pin=""
                step="1"
                value="1"
              ></mwc-slider>
            </mwc-formfield>
            <mwc-formfield label="Length">
              <mwc-slider
                id="password-length"
                markers=""
                max="30"
                min="1"
                (change)="handleLengthSetting($event)"
                pin=""
                step="1"
                value="20"
              ></mwc-slider>
            </mwc-formfield>
          </section>
          <section
            [ngClass]="tabContentIndex === 1 ? 'show' : 'hide'"
            data-tab-content-1
          >
            <section>
              <mwc-formfield label="Secure">
                <mwc-checkbox
                  checked
                  id="password-secure"
                  (change)="handleCheckboxChange('password-secure')($event)"
                  value="s"
                ></mwc-checkbox>
              </mwc-formfield>
              <mwc-formfield label="Symbols">
                <mwc-checkbox
                  checked
                  id="password-symbols"
                  (change)="handleCheckboxChange('password-symbols')($event)"
                  value="y"
                ></mwc-checkbox>
              </mwc-formfield>
            </section>
            <section>
              <mwc-formfield label="No Numbers">
                <mwc-checkbox
                  id="password-no-numbers"
                  (change)="handleCheckboxChange('password-no-numbers')($event)"
                  value="0"
                ></mwc-checkbox>
              </mwc-formfield>
              <mwc-formfield label="No Capitals">
                <mwc-checkbox
                  id="password-no-capitals"
                  (change)="
                    handleCheckboxChange('password-no-capitals')($event)
                  "
                  value="A"
                ></mwc-checkbox>
              </mwc-formfield>
            </section>
            <section>
              <mwc-formfield label="No Ambiguous characters">
                <mwc-checkbox
                  id="password-no-ambigious"
                  (change)="
                    handleCheckboxChange('password-no-ambigious')($event)
                  "
                  value="B"
                ></mwc-checkbox>
              </mwc-formfield>
            </section>
          </section>
          <section id="buttons">
            <mwc-formfield label="">
              <mwc-button (click)="handleGenerate()"> Generate </mwc-button>
            </mwc-formfield>
            <mwc-formfield label="">
              <mwc-button (click)="copyButtonClickHandler()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  focusable="false"
                  width="1em"
                  height="1em"
                  style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"
                    fill="#626262"
                  /></svg
                >&nbsp;Copy
              </mwc-button>
            </mwc-formfield>
          </section>
        </section>
      </section>
      <div id="password-background">
        <ng-container *ngFor="let password of passwords">
          <span>{{ password }}</span
          >&nbsp;
        </ng-container>
      </div>
    </section>
  `,
  styles: [
    `
      [app-section] {
        color: var(--md-sys-color-on-surface);
        display: flex;
        height: 100%;
        overflow: hidden;
        position: relative;
      }

      h1 {
        font-size: 1.5rem;
      }

      a,
      a:link,
      a:focus,
      a:hover,
      a:active,
      a:visited {
        color: var(--md-sys-color-on-surface);
      }

      section > p {
        margin: 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
      }

      mwc-formfield {
        display: block;
      }

      x-pwgen {
        background-color: var(--md-sys-color-on-surface);
        border-radius: 1rem;
        color: var(--md-sys-color-surface);
        display: block;
        margin-top: 2rem;
        overflow-wrap: break-word;
        padding: 0rem 1rem 1rem 1rem;
      }

      mwc-slider {
        padding: 0 1rem 0 1rem;
      }

      [data-tab-content-0] > section,
      [data-tab-content-1] > section {
        display: flex;
        flex-direction: row;
      }

      [data-tab-content-1] > section > mwc-formfield {
        flex: auto;
        text-align: center;
      }

      #grid-container {
        --x-pwgen-font-family: 'Roboto Mono', monospace;
        --x-pwgen-font-size: 1rem;
        --x-pwgen-li-padding: 0.75rem 0 0 0;

        align-items: center;
        display: grid;
        grid-template-areas: 'top' 'middle' 'bottom';
        grid-template-columns: 1fr;
        grid-template-rows: auto 1fr auto;
        height: 100%;
        justify-items: center;
        width: 100%;
      }

      #top {
        grid-area: top;
        text-align: center;
        width: 100%;
      }

      #branding {
        display: flex;
        max-height: 5rem;
      }

      #branding > section {
        display: flex;
        justify-content: center;
        width: 100%;
      }

      #middle {
        align-self: center;
        font-weight: bold;
        grid-area: middle;
        padding-bottom: 1.5rem;
      }

      #bottom {
        background-color: var(--pwgen-password-controls-background);
        grid-area: bottom;
        margin-top: 1rem;
        width: 20rem;
        min-height: 6rem;
      }

      #buttons {
        display: flex;
      }

      #buttons > mwc-formfield {
        flex: 1;
        text-align: center;
      }

      #password-background {
        color: var(--pwgen-password-background, rgba(0, 0, 0, 0.1));
        position: absolute;
        text-align: center;
        top: 15%;
        user-select: none;
        z-index: -1;
      }

      .hide {
        display: none;
      }

      .show {
        display: initial;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XPwgenContainerComponent {
  module: any;

  articles: { content: string }[] = [];
  defaultArgs: string[] = ['-sy', '20', '1'];
  randomOptions: string[] = [
    // '-0A1',
    // '-B0A1',
    // '-s0A1',
    // '-sB0A1',
    '-sy1',
  ];

  password: string = '';
  passwords: string[] = [];

  clipboardPolyfill!: any;
  tabContentIndex: number = 0;
  tabListener: any;

  private isBrowser: boolean;

  @ViewChild('xpwgen') xpwgen!: ElementRef;
  @ViewChild('mwcTabBar') mwcTabBar!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser) {
      import('x-pwgen-components').then(({ components, utilities }) => {
        this.clipboardPolyfill = utilities.clipboardPolyfill;

        import('pwgen').then((module) => {
          this.module = module;

          this.ready();
        });
      });
    }
  }

  handleMainClick() {
    console.log('main clicked');
    this.tabContentIndex = 0;
  }

  handleOptionsClick() {
    console.log('options clicked');
    this.tabContentIndex = 1;
  }

  copyButtonClickHandler() {
    this.clipboardPolyfill.writeText(
      this.xpwgen.nativeElement.shadowRoot.querySelector('ul').innerText,
    );
  }

  handleGenerate() {
    this.xpwgen.nativeElement.generate();
  }

  handleCheckboxChange = (change: string) => {
    return (event: Event) => {
      const xpwgen = document.querySelector('x-pwgen');
      const removeDash = (string: string) => string.replace(/-/, '');

      let currentFlags =
        '-' +
        removeDash(this.xpwgen.nativeElement.flags).replace(
          new RegExp((event.currentTarget as any).value, 'g'),
          '',
        );

      if ((event.currentTarget as any).checked) {
        currentFlags = currentFlags + (event.currentTarget as any).value;
      }

      this.xpwgen.nativeElement.flags =
        currentFlags !== '-' ? currentFlags : '';
    };
  };

  handleLengthSetting(event: Event) {
    this.xpwgen.nativeElement.length = (event.target as any).value;
  }

  handleNumberSetting(event: Event) {
    this.xpwgen.nativeElement.number = (event.target as any).value;
  }

  private getRandomInt(max = 10, min = 1) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  private getPassword(args: string[]): Promise<string[]> {
    return new Promise((res) => {
      const results: string[] = [];

      this.module
        .pwgen({
          arguments: args,
          print: (passwords: string) => {
            passwords.split(' ').forEach((password) => {
              results.push(password);
            });
          },
        })
        .then(() => {
          res(results);
        });
    });
  }

  private async ready() {
    const maxNumberOfPasswords = 250; //this.getRandomInt(250);

    for (let index = 1; index < maxNumberOfPasswords; index++) {
      const [password] = await this.getPassword([
        this.randomOptions[this.getRandomInt(this.randomOptions.length, 0)],
        String(this.getRandomInt(30, 15)),
        '1',
      ]);

      this.passwords.push(password);
    }
  }
}
