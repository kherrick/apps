import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-012',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>Rendering on the Web</h1>
      <h2 sub-header>
        <a
          href="https://www.netlify.com/blog/the-acronyms-of-rendering/#rendering-techniques"
          >Combinations</a
        >
      </h2>

      <ul list>
        <li>
          At the framework level
          <a
            href="https://web.archive.org/web/20250117104520/https://nextjs.org/docs/app/building-your-application/rendering"
            >*</a
          >
        </li>
        <li>
          Server rendering and client side rendering with rehydration
          <a href="https://web.dev/articles/rendering-on-the-web#rehydration"
            >*</a
          >
        </li>
        <li>
          Streaming server rendering and Progressive Rehydration (progressively
          rendered as it's received)
          <a href="https://web.dev/articles/rendering-on-the-web#stream">*</a>
        </li>
        <li>
          There are many
          <a href="https://mburakerman.github.io/blog/web-rendering-patterns">
            web rendering patterns </a
          >&nbsp;<a
            href="https://web.dev/articles/rendering-on-the-web#conclusion"
            >*</a
          >
        </li>
      </ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide012Component {}
