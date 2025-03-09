import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-021',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>What is an "app shell?"</h1>
      <h2 sub-header>MDN</h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              The App shell concept is concerned with loading a minimal user
              interface as soon as possible and then caching it so it is
              available offline for subsequent visits before then loading all
              the contents of the app. That way, the next time someone visits
              the app from the device, the UI loads from the cache immediately
              and any new content is requested from the server (if it isn't
              available in the cache already).
              <a
                href="https://web.archive.org/web/20230316213011/https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure#app_shell"
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
export class Slide021Component {}
