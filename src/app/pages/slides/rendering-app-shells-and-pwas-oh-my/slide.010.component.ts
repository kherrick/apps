import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-010',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Distinctions between static rendering and prerendering</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              ...static rendering and prerendering behave differently:
              statically rendered pages are interactive without needing to
              execute much client-side JavaScript, whereas prerendering improves
              the FCP [First Paint or First Contentful Paint] of a Single Page
              Application that must be booted on the client to make pages truly
              interactive.
              <a href="https://web.dev/articles/rendering-on-the-web#static"
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
export class Slide010Component {}
