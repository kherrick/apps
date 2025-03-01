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
            href="https://nextjs.org/learn/foundations/how-nextjs-works/rendering"
            >*</a
          >
        </li>
        <li>
          Server rendering and client side rendering with rehydration
          <a
            href="https://web.dev/rendering-on-the-web/#combining-server-rendering-and-csr-via-rehydration"
            >*</a
          >
        </li>
        <li>
          Streaming server rendering and Progressive Rehydration (progressively
          rendered as it's received)
          <a
            href="https://web.dev/rendering-on-the-web/#streaming-server-rendering-and-progressive-rehydration"
            >*</a
          >
        </li>
        <li>
          There are many
          <a href="https://mburakerman.github.io/blog/web-rendering-patterns">
            web rendering patterns </a
          >&nbsp;<a href="https://web.dev/rendering-on-the-web/#wrapping-up"
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
