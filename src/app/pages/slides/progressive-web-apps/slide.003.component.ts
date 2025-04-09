import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-003',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        Foundations -
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Responsive_web_design"
          >Responsive Web Design</a
        >
      </h2>

      <ul list>
        <li quote>
          <blockquote>
            <span
              >Responsive Web Design (RWD) is a Web development concept focusing
              on making sites look and behave optimally on all personal
              computing devices, from desktop to mobile.</span
            >
          </blockquote>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide003Component {}
