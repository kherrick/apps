import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-019',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>What is an "app shell?"</h1>
      <h2 sub-header>Angular</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              Application shell is a way to render a portion of your application
              using a route at build time. It can improve the user experience by
              quickly launching a static rendered page (a skeleton common to all
              pages) while the browser downloads the full client version and
              switches to it automatically after the code loads.
              <a href="https://angular.dev/ecosystem/service-workers/app-shell"
                >*</a
              >
            </span>
          </blockquote>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide019Component {}
