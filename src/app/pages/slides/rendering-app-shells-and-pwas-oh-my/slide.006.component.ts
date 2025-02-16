import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-006',
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Client side rendering</h2>

      <ul list>
        <li>
          Cons
          <ul>
            <li>
              As the application size grows, the amount of JavaScript required
              often increases
            </li>
            <li>Render blocking scripts can be problematic</li>
            <li>Can require aggressive code splitting and lazy loading</li>
          </ul>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide006Component {}
