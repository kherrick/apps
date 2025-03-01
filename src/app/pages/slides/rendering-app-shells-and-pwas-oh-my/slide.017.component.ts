import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-017',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>What is an "app shell?"</h1>
      <h2 sub-header>Michael Geers author of "Microfrontends in Action"</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              The app shell acts as a parent application for micro frontends.
              All incoming requests arrive there. It selects the micro frontend
              the user wants to see and renders it...
              <a
                href="https://livebook.manning.com/book/micro-frontends-in-action/chapter-7/20"
                >*</a
              >
            </span>
          </blockquote>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide017Component {}
