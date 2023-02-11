import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-010',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>
        Distinctions between static rendering and prerendering
      </h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              ...static rendered pages are interactive without the need to
              execute much client-side JS, whereas prerendering improves the
              First Paint or First Contentful Paint of a Single Page Application
              that must be booted on the client in order for pages to be truly
              interactive.
              <a href="https://web.dev/rendering-on-the-web/#static-rendering">*</a>
            </span>
          </blockquote>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide010Component {}
