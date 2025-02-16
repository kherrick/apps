import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-001',
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>There are many different ways to render</h2>

      <ul list>
        <li>
          Server side rendering
          <ul>
            <li>
              Some languages used
              <ul>
                <li>C#</li>
                <li>Rust</li>
                <li>Python</li>
                <li>Ruby</li>
                <li>Java</li>
                <li>Perl</li>
                <li>Elixir</li>
                <li>JavaScript</li>
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
export class Slide001Component {}
