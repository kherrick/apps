import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-026',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header><strong><a href="https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/">Good-to-haves</a></strong></h2>

      <ul list>
        <li>Once the Service Worker is active, should load (be interactive) in less than 2s. This should not vary with network state</li>
        <li>Work across devices & browsers - must work for 90+% of all users in its market</li>
        <li>While progressive enhancement is ideal, it's possible to meet this requirement with multiple versions (avoid multiple domains, e.g. "m.*")</li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide026Component {}
