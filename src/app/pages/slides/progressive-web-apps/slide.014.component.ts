import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-014',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a
            href="https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/"
            >A+ Progressive Web Apps</a
          ></strong
        >
      </h2>

      <ul list>
        <li>Be mobile-friendly, not mobile-only</li>
        <li>
          <a
            href="https://medium.com/@owencm/designing-great-uis-for-progressive-web-apps-dd38c1d20f7"
            >Implement high quality UI/UX</a
          >
          that makes the experience feel highly interactive
        </li>
        <li>Communicate offline state appropriately</li>
        <li>
          Use Contextual introduction of permission requests. Be thoughtful
          about Location API, Push Notifications, Background Sync, etc
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide014Component {}
