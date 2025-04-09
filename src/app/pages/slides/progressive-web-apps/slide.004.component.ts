import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-004',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        Foundations -
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/Mobile_First"
          >Mobile First</a
        >
      </h2>

      <ul list>
        <li quote>
          <blockquote>
            <span
              >Mobile first, a form of progressive enhancement, is a
              web-development and web-design approach that focuses on
              prioritizing design and development for mobile screen sizes over
              design and development for desktop screen sizes. The rationale
              behind the mobile-first approach is to provide users with good
              user experiences at all screen sizes—by starting with creating a
              user experience that works well on small screens, and then
              building on top of that to further enrich the user experience as
              the screen size increases. The mobile-first approach contrasts
              with the older approach of designing for desktop screen sizes
              first, and then only later adding some support for small screen
              sizes.</span
            >
          </blockquote>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide004Component {}
