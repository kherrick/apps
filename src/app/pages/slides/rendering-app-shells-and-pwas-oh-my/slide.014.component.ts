import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-014',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Combinations - service workers + streams</h2>

      <ul list>
        <li>
          Streaming Responses
          <blockquote>
            <span>
              With the introduction and wide availability of the Streams API,
              both app shell and content can be combined in the service worker
              and streamed to the browser, giving you the caching flexibility of
              app shell with the speed of MPAs.
              <a
                href="https://web.dev/learn/pwa/architecture/#streaming-responses"
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
export class Slide014Component {}
