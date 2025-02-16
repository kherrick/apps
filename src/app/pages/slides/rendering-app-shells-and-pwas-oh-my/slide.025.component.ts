import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-025',
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a
            href="https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/"
            >Good-to-haves</a
          ></strong
        >
      </h2>

      <ul list>
        <li>
          Visual transitions and animations should be fluid and not stutter
        </li>
        <li>
          Having mobile friendly design, they should work well across form
          factors and screen sizes.
          <a href="http://alistapart.com/article/responsive-web-design"
            >Responsive design</a
          >
          can reduce the required time and effort to build
        </li>
        <li>
          Loaded and free of long-running scripts in less than 5s, on a
          representative connection and device
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide025Component {}
