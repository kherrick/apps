import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-005',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        Foundations -
        <a href="https://offlinefirst.org/">Offline First</a>
      </h2>

      <ul list>
        <li quote>
          <blockquote>
            <span
              >We live in a disconnected & battery powered world, but our
              technology and best practices are a leftover from the always
              connected & steadily powered past.</span
            >
          </blockquote>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide005Component {}
