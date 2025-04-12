import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-027',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong>Additional example service worker strategies</strong>
      </h2>

      <ul list>
        <li>
          <a
            href="https://web.archive.org/web/20250125192437/https://web.dev/learn/performance/prefetching-prerendering-precaching#service_worker_precaching"
            >Pre-caching content</a
          >
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20230329153704/https://github.com/mdn/serviceworker-cookbook/tree/master/cache-from-zip"
            >Cache from zip</a
          >
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20241214005346/https://developer.chrome.com/docs/workbox/caching-strategies-overview#cache_first_falling_back_to_network"
            >Cache then network</a
          >
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20250329210713/https://github.com/mswjs/msw"
            >Mock Testing</a
          >
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20250405010251/https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#:~:text=Service%20workers%20essentially%20act%20as%20proxy%20servers%20that%20sit%20between%20web%20applications%2C%20the%20browser%2C%20and%20the%20network%20(when%20available)"
            >Proxying</a
          >
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20230329153704/https://github.com/mdn/serviceworker-cookbook/tree/master/load-balancer"
            >Load balancing</a
          >
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20250124102927/https://web.dev/articles/measuring-offline-usage#a_better_approach_the_service_worker"
            >Offline Analytics</a
          >
        </li>
        <li>
          <a
            href="https://web.archive.org/web/20250329232205/https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API#other_use_case_ideas"
            >etc.</a
          >
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide027Component {}
