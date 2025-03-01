import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-004',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>There are many different ways to render</h2>

      <ul list>
        <li>
          Client side rendering
          <ul>
            <li>
              <a
                href="https://eager.io/blog/a-brief-history-of-weird-scripting-languages/"
                >Some languages traditionally not used</a
              >
              <ul>
                <li>Python</li>
                <li>tcl</li>
                <li>VBScript</li>
                <li>Rexx</li>
              </ul>
            </li>
          </ul>
          <ul>
            <li>
              Current browser supported languages
              <ul>
                <li>JavaScript</li>
                <li>Wasm</li>
                <li>
                  <a
                    href="https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS"
                    >Languages that compile to JavaScript</a
                  >
                </li>
                <li>
                  <a href="https://github.com/appcypher/awesome-wasm-langs"
                    >Languages that compile to Wasm</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide004Component {}
