import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      about works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AboutComponent {

}
