import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-003',
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>Server side rendering</h2>

      <ul list>
        <li>
          Cons
          <ul>
            <li>
              <a
                href="https://medium.com/airbnb-engineering/operationalizing-node-js-for-server-side-rendering-c5ba718acfc9"
              >
                Compute overhead
              </a>
            </li>
            <li>
              Potentially slower
              <a href="https://en.wikipedia.org/wiki/Time_to_first_byte"
                >Time to First Byte</a
              >
            </li>
            <li>
              Potential optimization challenges [<a
                href="https://medium.com/@reactcomponentcaching/speedier-server-side-rendering-in-react-16-with-component-caching-e8aa677929b1"
                >1</a
              >,
              <a
                href="https://speakerdeck.com/maxnajim/hastening-react-ssr-with-component-memoization-and-templatization"
                >2</a
              >]
            </li>
            <li>
              Potential additional backend architecture planning
              <ul>
                <li>Servers!</li>
                <li>
                  <a
                    href="https://www.netlify.com/blog/the-acronyms-of-rendering/#server-side-rendering-ssr"
                    >Edge functions?</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide003Component {}
