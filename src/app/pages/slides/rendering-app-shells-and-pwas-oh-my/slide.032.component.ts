import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-032',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong>Example service worker strategies</strong>
      </h2>

      <ul list>
        <li>Pre-caching content</li>
        <li>Cache from zip</li>
        <li>Cache then network</li>
        <li>Push Notifications</li>
        <li>Mock Testing</li>
        <li>Proxying</li>
        <li>Load balancing</li>
        <li>Offline Analytics</li>
        <li>etc.</li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide032Component {}
