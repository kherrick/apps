import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation-drawer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      navigation-drawer works!
    </p>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class NavigationDrawerComponent {

}
