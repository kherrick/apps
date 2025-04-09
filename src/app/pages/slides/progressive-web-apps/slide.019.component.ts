import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-019',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong
          ><a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing"
            >Installation</a
          ></strong
        >
      </h2>

      <ul list>
        <li>
          <a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt"
            >Process can be customized</a
          >
          [<a
            href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#customizing_the_installation_prompt"
            >1</a
          >,
          <a
            href="https://web.dev/learn/pwa/installation#ios_and_ipados_installation"
            >2</a
          >]
        </li>
        <li>
          Once installed, are removable
          <ul>
            <li quote>
              <blockquote>
                <span>
                  ...saving to home screen installs the PWA on the user's
                  device, fully integrating it into the operating systems like
                  native applications on most devices. Just like PWAs can be
                  installed, they can also be uninstalled.
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Installing#history_of_web_app_installation"
                    >*</a
                  >
                </span>
              </blockquote>
            </li>
          </ul>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide019Component {}
