import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pwgen',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      pwgen works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PwgenComponent {

}
