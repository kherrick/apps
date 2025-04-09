import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-026',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push"
            >Push Notifications</a
          ></strong
        >
        on Windows using Chrome
      </h2>

      <ul list video>
        <li>
          <video
            [muted]="'muted'"
            controls
            loop
            playsinline
            src="https://herrickdesign.com/assets/apps/videos/karlherrick-notification-on-windows-chrome.mp4"
          ></video>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide026Component {}
