import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-007',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <a
          href="https://web.dev/learn/pwa/progressive-web-apps?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fpwa%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fpwa%2Fprogressive-web-apps#bringing_the_best_of_both_worlds"
          >Bringing the best of both worlds</a
        >
      </h2>

      <ul list>
        <li>
          <a
            href="https://web.dev/learn/pwa/progressive-web-apps?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fpwa%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fpwa%2Fprogressive-web-apps#platform-apps"
            >Platform Apps</a
          >
          <ul>
            <li>Offline-capable</li>
            <li>High performance</li>
            <li>Device Integration</li>
            <li>Standalone experience</li>
            <li>Installed Icon</li>
            <li>Rich and reliable</li>
          </ul>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide007Component {}
