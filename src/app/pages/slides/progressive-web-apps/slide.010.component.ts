import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-010',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a
            href="https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/"
            >Baseline</a
          ></strong
        >
      </h2>

      <ul list>
        <li>
          UI painted on screen without a network round trip (e.g. Service
          Workers required)
        </li>
        <li>
          "Fully offline" functionality not required, but should load regardless
          of network state
        </li>
        <li>
          The brand or site behind the app should be tied in the user's mind to
          where they came from
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide010Component {}
