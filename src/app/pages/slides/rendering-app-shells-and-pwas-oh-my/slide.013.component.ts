import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-013',
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>
        <a
          href="https://web.dev/user-centric-performance-metrics/#important-metrics-to-measure"
          >Combinations - service workers + streams</a
        >
      </h2>

      <ul list>
        <li>
          2016 - the year of web streams
          <blockquote>
            <span>
              Instead of serving an empty shell and letting JS populate it, I
              let the service worker construct a stream where the header comes
              from a cache, but the body comes from the network. It's like
              server-rendering, but in the service worker...
              <a href="https://jakearchibald.com/2016/streams-ftw/">*</a>
            </span>
          </blockquote>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide013Component {}
