import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-021',
  imports: [SlideComponent],
  template: `
    <app-slide>
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
                href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/App_structure#app_shell"
                >*</a
              >
            </span>
          </blockquote>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide021Component {}
