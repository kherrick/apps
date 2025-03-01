import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-029',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a href="https://web.dev/learn/pwa/progressive-web-apps/"
            >Why Build One?</a
          ></strong
        >
      </h2>

      <ul list>
        <li>Works on multiple platforms like traditional websites</li>
        <li>
          Reaches a wide audience using URL's as a "destination to get the
          application" and can be found in a Google search
        </li>
        <li>
          Connections are forced over SSL encryption for secure transport of
          data
        </li>
        <li>
          See relevant
          <a href="https://web.dev/tags/progressive-web-apps/">case studies</a>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide029Component {}
