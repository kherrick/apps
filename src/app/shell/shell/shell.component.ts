import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationDrawerComponent } from '../navigation-drawer/navigation-drawer.component';
import { NavigationRailComponent } from '../navigation-rail/navigation-rail.component';
import { TopAppBarComponent } from '../top-app-bar/top-app-bar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    TopAppBarComponent,
    NavigationRailComponent,
    NavigationDrawerComponent,
    RouterModule
  ],
  template: `
    <app-navigation-drawer
      [open]="open"
      (drawerButton)="handleDrawerButton($event)"
    ></app-navigation-drawer>
    <app-navigation-rail
      (drawerButton)="handleDrawerButton($event)"
    ></app-navigation-rail>
    <section>
      <top-app-bar (drawerButton)="handleDrawerButton($event)"></top-app-bar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </section>
  `,
  styles: [
    `
      :host {
        height: 100%;
      }

      section {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      section > main {
        height: 100%;
        padding: 1rem 1rem 0 1rem;
      }

      app-navigation-rail {
        display: none;
      }

      @media screen and (min-width: 859px) {
        app-navigation-rail {
          display: block;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShellComponent {
  open: boolean = false;

  handleDrawerButton(event: any) {
    this.open = !this.open;
  }
}
