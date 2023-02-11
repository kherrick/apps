import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-020',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>What is an "app shell?"</h1>
      <h2 sub-header>Google</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              An application shell is the minimal HTML, CSS, and JavaScript powering a user interface.
              <a href="https://developer.chrome.com/blog/app-shell/">*</a>
            </span>
          </blockquote>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide020Component {}
