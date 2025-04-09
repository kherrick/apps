import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'x-slide-000',
  imports: [SlideComponent],
  template: `
    <x-slide first>
      <h1 header>Progressive Web Apps</h1>
      <h2 sub-header>Use the right arrow key or swipe left to continue.</h2>

      <ul list></ul>
    </x-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide000Component {}
