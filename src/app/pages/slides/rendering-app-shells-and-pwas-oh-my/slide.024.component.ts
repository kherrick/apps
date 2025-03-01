import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-024',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <a
          href="https://infrequently.org/2016/09/what-exactly-makes-something-a-progressive-web-app/"
          >Baseline</a
        >
      </h2>

      <ul list>
        <li>
          A
          <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest"
            >Web App Manifest</a
          >
          with the following properties referenced: name, short_name, start_url,
          display, and icon
        </li>
        <li>
          Can run without extra browser chrome (e.g., the URL bar, potentially
          dangerous perm)
        </li>
        <li>
          Apps must be served over TLS (<a
            href="https://web.dev/fixing-mixed-content/"
            >green padlock / no active mixed content</a
          >) to prevent hijacking by captive portals (and worse)
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide024Component {}
