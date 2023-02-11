import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-011',
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
              If you're unsure whether a given solution is static rendering or
              prerendering, try this test: disable JavaScript and load the
              created web pages. For statically rendered pages, most of the
              functionality will still exist without JavaScript enabled. For
              prerendered pages, there may still be some basic functionality
              like links, but most of the page will be inert.
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
export class Slide011Component {}
