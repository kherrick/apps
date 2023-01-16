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
      :host {
        display: flex;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShellComponent {}
