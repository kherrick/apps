import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      calculator works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class CalculatorComponent {

}
