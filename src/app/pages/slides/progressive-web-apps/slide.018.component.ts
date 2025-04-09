import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-018',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a href="https://web.dev/learn/pwa/architecture/"
            >PWA Architecture Patterns</a
          ></strong
        >
      </h2>

      <ul list>
        <li>
          Client-side rendering full page (full page caching, potential for JSON
          payload bootstrapping via server)
        </li>
        <li>Server-side rendering full page (full page caching)</li>
        <li>Streams for body content / UI</li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide018Component {}
