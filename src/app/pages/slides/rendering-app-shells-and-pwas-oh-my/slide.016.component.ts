import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-016',
  imports: [SlideComponent],
  template: `
    <x-slide>
      <h1 header>App Shell</h1>
      <h2 sub-header>What is an "app shell?"</h2>

      <ul list></ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide016Component {}
