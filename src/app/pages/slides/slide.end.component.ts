import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from './shared/slide.component';

@Component({
  selector: 'app-slide-end',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide end>
      <h1 header></h1>

      <ul list style="list-style: none; padding: 0; width: 100%">
        <li media>
          <svg viewBox="0 0 550 125">
            <g>
              <text>
                <tspan
                  style="
                    fill-opacity: 1;
                    fill: none;
                    font-family: serif;
                    font-size: 160px;
                    font-stretch: normal;
                    font-style: normal;
                    font-variant: normal;
                    font-weight: normal;
                    stroke-dasharray: none;
                    stroke-linecap: round;
                    stroke-linejoin: round;
                    stroke-miterlimit: 4;
                    stroke-opacity: 1;
                    stroke-width: 3;
                    stroke: #000000;
                  "
                  x="0"
                  y="120"
                >
                  The End
                </tspan>
              </text>
            </g>
          </svg>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class SlideEndComponent {}
