import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from './shared/slide.component';

@Component({
  selector: 'app-slide-001',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide last>
      <h1 header>An Example Header</h1>
      <h2 sub-header>An example subheader</h2>

      <ul list>
        <li>A list item</li>
        <li>Another list item
          <ul>
            <li>Still another list item</li>
            <li>The final list item</li>
          </ul>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide001Component {}
