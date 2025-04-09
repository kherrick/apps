import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-024',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a href="https://web.dev/explore/notifications"
            >Push Notifications</a
          ></strong
        >
      </h2>

      <ul list>
        <li quote>
          <blockquote>
            <span>
              The
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Push_API"
                >Push API</a
              >
              and
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API"
                >Notifications API</a
              >
              are two separate APIs, but they work well together when you want
              to provide engaging functionality in your app. Push is used to
              deliver new content from the server to the app without any
              client-side intervention, and its operation is handled by the
              app's service worker. Notifications can be used by the service
              worker to show new information to the user, or at least alert them
              when something has been updated.
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Tutorials/js13kGames/Re-engageable_Notifications_Push#two_apis_one_goal"
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
export class Slide024Component {}
