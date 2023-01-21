import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-infinitym',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      infinitym works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class InfinitymComponent {

}
