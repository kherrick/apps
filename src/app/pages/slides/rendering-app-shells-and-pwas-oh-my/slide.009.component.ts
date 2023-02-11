import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-009',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Static site generation (and prerendering)</h2>

      <ul list>
        <li>
          Cons
          <ul>
            <li>HTML must be generated for every route (time, planning)</li>
          </ul>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide009Component {}
