import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-app-bar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      top-app-bar works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TopAppBarComponent {

}
