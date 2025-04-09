import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-002',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        Foundations -
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement"
          >Progressive Enhancement</a
        >
      </h2>

      <ul list>
        <li quote>
          <blockquote>
            <span
              >Progressive enhancement is a design philosophy that provides a
              baseline of essential content and functionality to as many users
              as possible, while delivering the best possible experience only to
              users of the most modern browsers that can run all the required
              code.</span
            >
          </blockquote>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide002Component {}
