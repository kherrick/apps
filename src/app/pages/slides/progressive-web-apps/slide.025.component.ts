import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-025',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a href="https://web.dev/articles/push-notifications-overview"
            >Push Notifications</a
          ></strong
        >
        on Android using Chrome
      </h2>

      <ul list video>
        <li>
          <video
            [muted]="'muted'"
            controls
            loop
            playsinline
            src="https://herrickdesign.com/assets/apps/videos/karlherrick-notification-on-android-chrome.mp4"
          ></video>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide025Component {}
