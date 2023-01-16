import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationRailComponent } from '../navigation-rail/navigation-rail.component';
import { TopAppBarComponent } from '../top-app-bar/top-app-bar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [CommonModule, TopAppBarComponent, NavigationRailComponent],
  template: `
    <app-navigation-rail></app-navigation-rail>
    <section>
      <top-app-bar></top-app-bar>
      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      section {
        width: 100%;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShellComponent {}
