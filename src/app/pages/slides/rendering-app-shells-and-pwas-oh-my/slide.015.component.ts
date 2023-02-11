import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-015',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header><a href="https://web.dev/user-centric-performance-metrics/#important-metrics-to-measure">Combinations - service workers + streams</a></h2>

      <ul list>
        <li> Trimorphic Rendering
          <blockquote>
            <span>
              ...a technique where you can use streaming server rendering for initial/non-JS navigations, and then have your service worker take on rendering of HTML for navigations after it has been installed
              <a href="https://web.dev/rendering-on-the-web/#trisomorphic-rendering">*</a>
            </span>
          </blockquote>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide015Component {}
