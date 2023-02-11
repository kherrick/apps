import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-016',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>App Shell</h1>
      <h2 sub-header>What is an "app shell?"</h2>

      <ul list></ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide016Component {}
