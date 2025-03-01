import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-005',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Client side rendering</h2>

      <ul list>
        <li>
          Pros
          <ul>
            <li>Lower server load</li>
            <li>Views can be produced dynamically on the client</li>
            <li>Once loaded, page navigations feel fast</li>
          </ul>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide005Component {}
