import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-020',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        Post
        <strong
          ><a href="https://web.dev/learn/pwa/installation"
            >installation</a
          ></strong
        >
        expectations
      </h2>

      <ul list>
        <li>
          Operating system specific windows and chrome are used ("chrome" refers
          to the visual elements that surround and manage the content of a
          window)
        </li>
        <li>
          Launcher, home screen, start menu, or launchpad equivalent receive an
          icon
        </li>
        <li>Devices return search results for the app</li>
        <li>
          Additional capabilities supported
          <a
            href="https://web.dev/learn/pwa/installation#:~:text=Installation%20may%20unlock%20other%20capabilities"
            >*</a
          >
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide020Component {}
