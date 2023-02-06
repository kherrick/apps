import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slides',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      slides works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SlidesComponent {

}
