import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-028',
  imports: [SlideComponent],
  template: `
    <x-slide last>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>
        <strong>Further info</strong>
      </h2>

      <ul list>
        <li>
          Frameworks
          <ul>
            <li>
              <a href="https://angular.dev/ecosystem/service-workers"
                >&#64;angular/service-worker</a
              >
            </li>
            <li>
              <a href="https://github.com/GoogleChrome/workbox">workbox</a>
            </li>
          </ul>
        </li>
        <li>
          Resources
          <ul>
            <li>
              <a
                href="https://infrequently.org/2015/06/progressive-apps-escaping-tabs-without-losing-our-soul/"
                >Progressive Web Apps: Escaping Tabs Without Losing Our Soul</a
              >
            </li>
            <li>
              <a href="https://abookapart.com/products/going-offline"
                >Going Offline - Jeremy Keith</a
              >
            </li>
            <li>
              <a
                href="https://www.amazon.ca/Building-Progressive-Web-Apps-Bringing/dp/1491961651"
                >Building Progressive Web Apps: Bringing the Power of Native to
                the Browser - Tal Ater</a
              >
            </li>
            <li>
              <a href="https://googlechrome.github.io/samples/service-worker/"
                >Service Worker Recipes</a
              >
            </li>
            <li>
              <a href="https://web.dev/articles/offline-cookbook"
                >The Offline Cookbook</a
              >
            </li>
          </ul>
        </li>
        <li>
          Stores
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installation_from_an_app_store"
                >Installation from an app store</a
              >
            </li>
            <li>
              <a
                href="https://web.dev/learn/pwa/installation#app_catalogs_and_stores"
                >App catalogs and stores</a
              >
            </li>
            <li><a href="https://store.app/">store.app</a></li>
          </ul>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide028Component {}
