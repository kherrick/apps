import {
  Component,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'x-navigation-rail',
  imports: [RouterModule],
  template: `
    <aside id="nav-rail" class="navigation-rail">
      <button
        (click)="handleDrawerButton($event)"
        class="icon-button icon-button--menu"
        id="drawer-btn"
      >
        <i class="material-icons">menu</i>
      </button>
      <nav>
        <a [routerLink]="'/'">
          <label
            (keydown)="handleEnterKey('/')($event)"
            class="navigation-icon"
          >
            <i class="material-icons">home</i>
            <span>Home</span>
          </label>
        </a>
        <a [routerLink]="'/news'">
          <label
            (keydown)="handleEnterKey('/news')($event)"
            class="navigation-icon"
          >
            <i class="material-icons">newspaper</i>
            <span>News</span>
          </label>
        </a>
        <a [routerLink]="'/feeds'">
          <label
            (keydown)="handleEnterKey('/feeds')($event)"
            class="navigation-icon"
          >
            <i class="material-icons">feed</i>
            <span>Feeds</span>
          </label>
        </a>
        <a [routerLink]="'/playground'">
          <label
            (keydown)="handleEnterKey('/playground')($event)"
            class="navigation-icon"
          >
            <i class="material-icons">developer_board</i>
            <span>Playground</span>
          </label>
        </a>
        <a [routerLink]="'/links'">
          <label
            (keydown)="handleEnterKey('/links')($event)"
            class="navigation-icon"
          >
            <i class="material-icons">share</i>
            <span>Links</span>
          </label>
        </a>
        <a [routerLink]="'/slides/slides'">
          <label
            (keydown)="handleEnterKey('/slides/slides')($event)"
            class="navigation-icon"
          >
            <i class="material-icons">slideshow</i>
            <span>Slides</span>
          </label>
        </a>
        <a [routerLink]="'/about'">
          <label
            (keydown)="handleEnterKey('/about')($event)"
            class="navigation-icon"
          >
            <i class="material-icons">help</i>
            <span>About</span>
          </label>
        </a>
      </nav>
    </aside>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/navigation-icon/style.css' as navigation-icon-style;
      @use 'material-design-lite/css/components/navigation-rail/style.css' as navigation-rail-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      :is(.navigation-rail) {
        position: fixed;
        padding-bottom: 2rem;
        padding-top: 0;

        --md-sys-comp-navigation-rail-background-color: var(
          --x-shell-background-color
        );
        --md-sys-comp-navigation-rail-color: var(--md-sys-color-primary);
      }

      :is(.navigation-rail) :is(nav, .navigation-rail-destinations) {
        margin-bottom: unset;
        margin-top: unset;
      }

      :is(.navigation-rail)::before {
        content: unset;
      }

      a {
        text-decoration: none;
      }

      a,
      a:link,
      a:focus,
      a:hover,
      a:active,
      a:visited {
        color: var(--md-sys-comp-navigation-rail-color);
      }

      aside {
        overflow-y: scroll;
        scrollbar-width: none;
      }

      aside::-webkit-scrollbar {
        display: none;
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

      .icon-button--menu {
        align-items: center;
        display: flex;
        flex-direction: row;
        min-height: var(--mat-toolbar-standard-height);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XNavigationRailComponent {
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
