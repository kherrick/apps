import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-002',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header><a href="https://web.dev/user-centric-performance-metrics/">Server side rendering</a></h2>

      <ul list>
        <li>
          Pros
          <ul>
            <li>
              <a href="https://web.dev/rendering-on-the-web/#server-rendering"
                >Generally produces</a
              >
              a fast
              <a href="https://web.dev/fcp/">First Contentful Paint</a> and
              <a
                href="https://developer.chrome.com/docs/lighthouse/performance/interactive/"
                >Time to Interactive</a
              >.
            </li>
            <li>
              Potential for less reliance on client side scripting (and
              CPU-bound JavaScript)
            </li>
            <li>Views are wholly rendered on the server</li>
          </ul>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide002Component {}
