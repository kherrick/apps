import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-rail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      navigation-rail works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationRailComponent {

}
