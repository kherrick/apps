import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-001',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        Foundations -
        <a
          href="https://developer.mozilla.org/en-US/docs/Glossary/Graceful_degradation"
          >Graceful degradation</a
        >
      </h2>

      <ul list>
        <li quote>
          <blockquote>
            <span
              >Graceful degradation is a design philosophy that centers around
              trying to build a modern website/application that will work in the
              newest browsers, but falls back to an experience that while not as
              good still delivers essential content and functionality in older
              browsers.</span
            >
          </blockquote>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide001Component {}
