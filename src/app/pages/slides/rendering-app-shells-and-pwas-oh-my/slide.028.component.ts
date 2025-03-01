import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-028',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a href="https://web.dev/learn/pwa/progressive-web-apps/"
            >Why Build One?</a
          ></strong
        >
      </h2>

      <ul list>
        <li>
          <a
            href="https://medium.com/dev-channel/why-progressive-web-apps-vs-native-is-the-wrong-question-to-ask-fb8555addcbb"
            >Are native</a
          >
          to the
          <a href="https://www.w3.org/wiki/Open_Web_Platform"
            >Open Web Platform</a
          >
        </li>
        <li>
          <a
            href="https://www.oreilly.com/content/why-are-service-workers-so-great-for-web-performance/"
            >Offer increased performance</a
          >
        </li>
        <li>
          Will load fast and work offline due to cached functions and content
        </li>
        <li>
          The state of the application can be re-synch'ed with the server when
          connection resumes, and are updateable as soon as they receive a
          network connection
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide028Component {}
