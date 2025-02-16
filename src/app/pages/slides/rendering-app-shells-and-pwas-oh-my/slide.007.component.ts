import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-007',
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>There are many different ways to render</h2>

      <ul list>
        <li>
          Static site generation (and prerendering)

          <ul>
            <li>
              Some languages used
              <ul>
                <li>C#</li>
                <li>Python</li>
                <li>Elixir</li>
                <li>Rust</li>
                <li>
                  <a
                    href="https://github.com/kherrick/hacker-news/blob/main/bin/build-html.js"
                    >JavaScript</a
                  >
                </li>
                <li>
                  <a
                    href="https://github.com/kherrick/hacker-news/blob/main/bin/build-md.sh"
                    >bash</a
                  >
                  <a
                    href="https://google.github.io/styleguide/shellguide.html#when-to-use-shell"
                    >*</a
                  >
                </li>
                <li>etc.</li>
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
export class Slide007Component {}
