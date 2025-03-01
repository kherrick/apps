import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-030',
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
          They can be
          <a
            href="https://medium.com/dev-channel/building-a-hybrid-rendered-pwa-c9d645baf158"
          >
            built with any architectural style
          </a>
          (<a
            href="https://medium.com/@adamzerner/client-side-rendering-vs-server-side-rendering-a32d2cf3bfcc"
          >
            server-side rendered, client-side rendered </a
          >, prerendered, or a
          <a
            href="https://medium.freecodecamp.org/what-exactly-is-client-side-rendering-and-hows-it-different-from-server-side-rendering-bd5c786b340d"
          >
            combination </a
          >) but service workers imply some subtle changes in how you build your
          application architecture.
        </li>
        <li>
          Application shell (SSR) + use JavaScript to fetch content once the app
          shell is loaded
        </li>
        <li>
          Application shell (SSR both shell + content for entry page) + use
          JavaScript to fetch content for any further routes and do a "take
          over"
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide030Component {}
