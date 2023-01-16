import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navigation-rail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside id="nav-rail" class="navigation-rail">
      <button id="drawer-btn" class="icon-button">
        <i class="material-icons">menu</i>
      </button>

      <button id="download" class="fab">
        <i class="material-icons">file_download</i>
      </button>

      <nav>
        <input
          type="radio"
          name="side-navigation"
          value="Overview"
          id="Overview"
          data-link="/overview"
        />
        <label class="navigation-icon" for="Overview">
          <i class="material-icons">palette</i>
          <span>Overview</span>
        </label>
        <input
          type="radio"
          name="side-navigation"
          value="Demos"
          id="Demos"
          data-link="/demos"
        />
        <label class="navigation-icon" for="Demos">
          <i class="material-icons">play_circle_outline</i>
          <span>Demos</span>
        </label>
        <input
          type="radio"
          name="side-navigation"
          value="Components"
          id="Components"
          checked="true"
          data-link="/components"
        />
        <label class="navigation-icon" for="Components">
          <i class="material-icons">widgets</i>
          <span>Components</span>
        </label>
      </nav>
    </aside>
  `,
  styles: [
    `
      @use 'node_modules/material-design-lite/docsite/public/css/components/navigation-icon/style.css'
        as navigation-icon-style;
      @use 'node_modules/material-design-lite/docsite/public/css/components/navigation-rail/style.css'
        as navigation-rail-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavigationRailComponent {}
