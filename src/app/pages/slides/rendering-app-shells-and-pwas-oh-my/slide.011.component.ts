import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-011',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Distinctions between static rendering and prerendering</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              If you're unsure whether a given solution is static rendering or
              prerendering, try disabling JavaScript and load the page you want
              to test. For statically rendered pages, most interactive features
              still exist without JavaScript. Prerendered pages might still have
              some basic features like links with JavaScript disabled, but most
              of the page is inert.
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
export class Slide011Component {}
