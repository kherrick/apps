import { Component, ViewEncapsulation } from '@angular/core';

import { SlideComponent } from '../shared/slide.component';

@Component({
  selector: 'app-slide-000',
  standalone: true,
  imports: [SlideComponent],
  template: `
    <app-slide first>
      <h1 header>Rendering, App Shells, and PWAs, oh my!</h1>
      <h2 sub-header>Use the right arrow key or swipe left to continue.</h2>

      <ul list></ul>
    </app-slide>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Slide000Component {}
