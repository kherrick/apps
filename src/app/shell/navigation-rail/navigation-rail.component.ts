import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-rail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside id="nav-rail" class="navigation-rail">
      <button
        (click)="handleDrawerButton($event)"
        class="icon-button"
        id="drawer-btn"
      >
        <i class="material-icons">menu</i>
      </button>
      <nav>
        <label class="navigation-icon">
          <input
            [routerLink]="'/'"
            id="Home"
            name="side-navigation"
            type="radio"
            value="Home"
          />
          <i class="material-icons">home</i>
          <span>Home</span>
        </label>
        <label class="navigation-icon">
          <input
            [routerLink]="'/about'"
            id="Help"
            name="side-navigation"
            type="radio"
            value="Help"
          />
          <i class="material-icons">help</i>
          <span>Help</span>
        </label>
      </nav>
    </aside>
  `,
  styles: [
    `
      @use 'node_modules/material-design-lite/docsite/public/css/core.css';
      @use 'node_modules/material-design-lite/docsite/public/css/components/navigation-icon/style.css'
        as navigation-icon-style;
      @use 'node_modules/material-design-lite/docsite/public/css/components/navigation-rail/style.css'
        as navigation-rail-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

      :host {
        min-height: 100vh;

        --md-comp-navigation-rail-container-height: 100%;
      }

      :is(.navigation-rail)::before {
        content: unset;
      }

      label:focus-within {
        outline: -webkit-focus-ring-color auto 1px;
      }

      button {
        cursor: pointer;
        border: 0;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavigationRailComponent {
  @Output() drawerButton = new EventEmitter<string>();

  handleDrawerButton(event: any) {
    this.drawerButton.emit(event);
  }
}
