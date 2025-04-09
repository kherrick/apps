import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-009',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>What is it?</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              A progressive web app (PWA) is an app that's built using web
              platform technologies, but that provides a user experience like
              that of a platform-specific app. Like a website, a PWA can run on
              multiple platforms and devices from a single codebase. Like a
              platform-specific app, it can be installed on the device, can
              operate while offline and in the background, and can integrate
              with the device and with other installed apps.
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps"
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
export class Slide009Component {}
