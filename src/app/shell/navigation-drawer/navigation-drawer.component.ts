import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navigation-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <dialog
      #dialog
      (close)="handleDrawerClose($event)"
      id="nav-drawer"
      class="navigation-drawer modal"
    >
      <div class="drawer-title">News</div>
      <div class="drawer-scrollable">
        <section>
          <label class="section-header">Sections</label>
          <div
            (click)="closeDrawer()"
            [routerLink]="'/'"
            class="list-tile draft"
            (keydown)="handleKeydown($event)"
          >
            <span class="title">Home</span>
          </div>
          <div
            (click)="closeDrawer()"
            [routerLink]="'/about'"
            class="list-tile draft"
          >
            <span class="title">About</span>
          </div>
          <div class="divider"></div>
        </section>
      </div>
      <form method="dialog">
        <button class="text">
          <i class="material-icons">close</i>
          <label>Close Drawer</label>
        </button>
      </form>
    </dialog>
  `,
  styles: [
    `
      @use 'node_modules/material-design-lite/docsite/public/css/core.css';
      @use 'node_modules/material-design-lite/docsite/public/css/components/navigation-drawer/style.css'
        as navigation-drawer-style;
      @use 'node_modules/material-design-lite/docsite/public/css/components/list-tile/style.css'
        as list-tile-style;
      @use 'node_modules/material-design-lite/docsite/public/css/components/button/style.css'
        as button-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons');

      :host {
        --md-sys-comp-navigation-drawer-background-color: var(
          --md-sys-color-surface
        );
        --md-sys-comp-navigation-drawer-color: var(
          --md-sys-color-on-surface-variant
        );
        --md-comp-navigation-drawer-container-height: 100%;
        --md-comp-navigation-drawer-container-width: 360px;
      }

      :is(.navigation-drawer).modal[open]::backdrop {
        background-color: rgb(var(--md-sys-color-scrim), 0.4);
        background-color: rgb(0, 0, 0, 0.4);
        pointer-events: none !important;
      }

      :is(.navigation-drawer).modal[open] {
        overflow-x: hidden;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class NavigationDrawerComponent implements OnChanges {
  @Input() open: boolean = false;
  @Output() drawerButton = new EventEmitter<string>();
  @ViewChild('dialog') dialog!: ElementRef;

  constructor(public router: Router) { }

  handleDrawerClose(event: any) {
    this.drawerButton.emit(event);
  }

  handleKeydown(event: any) {
    if (event.key === ' ' || event.key === 'Enter') {
      this.router.navigate([event.target.getAttribute('ng-reflect-router-link')])
    }
  }

  closeDrawer() {
    this.dialog?.nativeElement.close();
  }

  openDrawer() {
    this.dialog?.nativeElement.showModal();
  }

  ngOnChanges({ open }: SimpleChanges) {
    if (open.currentValue === true) {
      this.openDrawer();

      return;
    }

    this.closeDrawer();
  }
}
