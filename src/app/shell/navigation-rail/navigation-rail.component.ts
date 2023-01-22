import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

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
        <label
          (keydown)="handleEnterKey('/')($event)"
          [routerLink]="'/'"
          class="navigation-icon"
        >
          <input
            tabindex="-1"
            id="Home"
            name="side-navigation"
            type="radio"
            value="Home"
          />
          <i class="material-icons">home</i>
          <span>Home</span>
        </label>
        <label
          (keydown)="handleEnterKey('/about')($event)"
          [routerLink]="'/about'"
          class="navigation-icon"
        >
          <input
            tabindex="-1"
            id="Help"
            name="side-navigation"
            type="radio"
            value="Help"
          />
          <i class="material-icons">help</i>
          <span>Help</span>
        </label>
        <label
          (keydown)="handleEnterKey('/herrick-design')($event)"
          [routerLink]="'/herrick-design'"
          class="navigation-icon"
        >
          <input
            tabindex="-1"
            id="HerrickDesign"
            name="side-navigation"
            type="radio"
            value="HerrickDesign"
          />
          <i class="material-icons">palette</i>
          <span>Herrick Design</span>
        </label>
        <label
          (keydown)="handleEnterKey('/infinitym')($event)"
          [routerLink]="'/infinitym'"
          class="navigation-icon"
        >
          <input
            tabindex="-1"
            id="InfinityM"
            name="side-navigation"
            type="radio"
            value="InfinityM"
          />
          <i class="material-icons">memory</i>
          <span>InfinityM</span>
        </label>
        <label
          (keydown)="handleEnterKey('/karl-herrick')($event)"
          [routerLink]="'/karl-herrick'"
          class="navigation-icon"
        >
          <input
            tabindex="-1"
            id="KarlHerrick"
            name="side-navigation"
            type="radio"
            value="KarlHerrick"
          />
          <i class="material-icons">bolt</i>
          <span>Karl Herrick</span>
        </label>
        <label
          (keydown)="handleEnterKey('/calculator')($event)"
          [routerLink]="'/calculator'"
          class="navigation-icon"
        >
          <input
            tabindex="-1"
            id="Calculator"
            name="side-navigation"
            type="radio"
            value="Calculator"
          />
          <i class="material-icons">calculate</i>
          <span>Calculator</span>
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

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap');

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

      label {
        text-align: center;
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

  constructor(private router: Router) {}

  handleEnterKey(path: string) {
    return (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.router.navigate([path]);
      }
    };
  }

  handleDrawerButton(event: any) {
    this.drawerButton.emit(event);
  }
}
