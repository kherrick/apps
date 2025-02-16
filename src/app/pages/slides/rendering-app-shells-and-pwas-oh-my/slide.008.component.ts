import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-008',
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Static site generation (and prerendering)</h2>

      <ul list>
        <li>
          Pros
          <ul>
            <li>
              Consistently fast
              <a href="https://en.wikipedia.org/wiki/Time_to_first_byte"
                >Time To First Byte</a
              >
            </li>
            <li>
              Can take advantage of CDN "<a
                href="https://techterms.com/definition/edge_caching"
                >edge caching</a
              >"
            </li>
          </ul>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide008Component {}
