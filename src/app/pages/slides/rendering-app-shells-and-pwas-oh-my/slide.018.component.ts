import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-018',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>What is an "app shell?"</h1>
      <h2 sub-header>Tal Ater author of "Building Progressive Web Apps"</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              App shell is not a revolutionary idea. ... The app shell
              architecture encourages you to further disconnect the basic logic
              and resources needed to render your app's most basic interface
              from the rest of your app.
              <a
                href="https://learning.oreilly.com/library/view/building-progressive-web/9781491961643/ch05.html"
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
export class Slide018Component {}
