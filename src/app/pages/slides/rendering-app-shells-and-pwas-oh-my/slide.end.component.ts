import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-end',
  imports: [SlideComponent],
  template: `
    <x-slide end>
      <h1 header></h1>
      <!-- <h2 sub-header></h2> -->

      <ul list style="list-style: none; padding: 0; width: 100%">
        <li media>
          <svg viewBox="0 0 675 140">
            <text>
              <tspan
                style="
                  fill-opacity: 1;
                  fill: none;
                  font-size: 10rem;
                  stroke-opacity: 1;
                  stroke-width: 3;
                  stroke: var(--md-sys-color-on-surface);
                "
                x="45"
                y="130"
              >
                The End
              </tspan>
            </text>
          </svg>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SlideEndComponent {}
