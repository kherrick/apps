import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herrick-design',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      herrick-design works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HerrickDesignComponent {

}
