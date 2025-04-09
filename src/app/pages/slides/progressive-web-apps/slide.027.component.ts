import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-027',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong>Additional example service worker strategies</strong>
      </h2>

      <ul list>
        <li>Pre-caching content</li>
        <li>Cache from zip</li>
        <li>Cache then network</li>
        <li>Mock Testing</li>
        <li>Proxying</li>
        <li>Load balancing</li>
        <li>Offline Analytics</li>
        <li>etc.</li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide027Component {}
