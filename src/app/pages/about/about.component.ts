import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FaceDetectorComponent } from '../../../app/shared/face-detector.component';

@Component({
  selector: 'x-about',
  imports: [RouterModule, FaceDetectorComponent],
  template: `
    <section x-section-generic>
      <article>
        <p>
          <a [routerLink]="'/'">Apps</a> is a
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
          >
            progressive web app
          </a>
          that aims to adhere to the
          <a href="https://angular.dev/ecosystem/service-workers/app-shell"
            >App Shell model</a
          >. The primary routes are
          <a href="https://angular.dev/guide/prerendering">prerendered</a> as
          static HTML during the build process and are
          <a
            href="https://angular.dev/guide/routing/common-router-tasks#lazy-loading"
          >
            loaded lazily</a
          >
          at runtime to ensure a smaller client-side JavaScript bundle. The
          <a href="https://github.com/kherrick/apps">source code</a> is hosted
          on <a href="https://github.com/">GitHub</a> and comprises several
          components that operate within the
          <a href="https://angular.dev/">Angular</a> framework.
        </p>
        <p>
          As an example, try the face-detector component below. It is built with
          TensorFlow.js using
          <a
            href="https://github.com/tensorflow/tfjs/tree/master/tfjs-backend-wasm"
            >a WebAssembly backend</a
          >. The
          <a
            href="https://github.com/tensorflow/tfjs-models/tree/master/blazeface"
            >blazeface model</a
          >
          is used for face identification with a webcam or by dragging and
          dropping images into the drop zone (where the QR code is). All facial
          detection is completed client-side.
        </p>
      </article>
      <section>
        <x-face-detector></x-face-detector>
      </section>
    </section>
  `,
  styles: [
    `
      [x-section-generic] {
        margin: 0 1rem;

        section,
        article {
          font-size: 1rem;
        }

        a,
        a:link,
        a:focus,
        a:hover,
        a:active,
        a:visited {
          color: var(--md-sys-color-on-surface);
        }

        :where(.button, button):not(.icon-button, .fab, .chip) {
          background-color: var(--md-ref-palette-neutral50);
          color: var(--md-ref-palette-neutral90);
        }

        @media screen and (min-width: 859px) {
          section,
          article {
            padding: 0 1rem 1rem 1rem;
          }
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AboutComponent {}
