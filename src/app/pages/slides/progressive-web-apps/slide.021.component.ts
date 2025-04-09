import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-021',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong>Installation on Windows using Microsoft Edge</strong>
      </h2>

      <ul list video>
        <li>
          <video
            [muted]="'muted'"
            controls
            loop
            playsinline
            src="https://herrickdesign.com/assets/apps/videos/gifworks-installation-on-windows-edge.mp4"
          ></video>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide021Component {}
