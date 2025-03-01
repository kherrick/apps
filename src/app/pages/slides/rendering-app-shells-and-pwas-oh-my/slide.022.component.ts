import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-022',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>What are they?</h2>

      <ul list>
        <li>
          Much like the term <b>HTML5</b>, the
          <a
            href="https://fberriman.com/2017/06/26/naming-progressive-web-apps/"
            >marketing term</a
          >
          &nbsp;<b>PWA</b> is one that brings together a suite of technologies,
          ideals and best practices.
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide022Component {}
