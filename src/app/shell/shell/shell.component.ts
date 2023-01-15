import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section>
      <header>app shell works!</header>
      <ng-content></ng-content>
    </section>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShellComponent {

}
