import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from './shared/slide.component';

@Component({
  selector: 'app-slide-000',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide>
      <h1 header>Slides</h1>
      <h2 sub-header><em>Swipe</em>, or press <em>arrow keys</em> to navigate.</h2>

      <ul list></ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide000Component {}
