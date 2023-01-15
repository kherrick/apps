import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { TopAppBarComponent } from '../top-app-bar/top-app-bar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, TopAppBarComponent],
  template: `
    <top-app-bar></top-app-bar>
    <section>
      <ng-content></ng-content>
    </section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShellComponent {}
