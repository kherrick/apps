import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
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
      <div class="drawer-title">Apps</div>
      <div class="drawer-scrollable">
        <section>
          <label class="section-header">Sections</label>
          <div
            (click)="closeDrawer()"
            (keydown)="handleEnterKey('/')($event)"
            [routerLink]="'/'"
            class="list-tile draft"
          >
            <span class="title">Home</span>
          </div>
          <div
            (click)="closeDrawer()"
            (keydown)="handleEnterKey('/about')($event)"
            [routerLink]="'/about'"
            class="list-tile draft"
          >
            <span class="title">About</span>
          </div>
          <div
            (click)="closeDrawer()"
            (keydown)="handleEnterKey('/herrick-design')($event)"
            [routerLink]="'/herrick-design'"
            class="list-tile draft"
          >
            <span class="title">Herrick Design</span>
          </div>
          <div
            (click)="closeDrawer()"
            (keydown)="handleEnterKey('/infinitym')($event)"
            [routerLink]="'/infinitym'"
            class="list-tile draft"
          >
            <span class="title">InfinityM</span>
          </div>
          <div class="divider"></div>
          <div
            (click)="closeDrawer()"
            (keydown)="handleEnterKey('/karl-herrick')($event)"
            [routerLink]="'/karl-herrick'"
            class="list-tile draft"
          >
            <span class="title">Karl Herrick</span>
          </div>
          <div
            (click)="closeDrawer()"
            (keydown)="handleEnterKey('/calculator')($event)"
            [routerLink]="'/calculator'"
            class="list-tile draft"
          >
            <span class="title">Calculator</span>
          </div>
          <div
            (click)="closeDrawer()"
            (keydown)="handleEnterKey('/pwgen')($event)"
            [routerLink]="'/pwgen'"
            class="list-tile draft"
          >
            <span class="title">pwgen</span>
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

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=swap');

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
export class NavigationDrawerComponent implements AfterViewInit, OnChanges {
  @Input() open: boolean = false;
  @Output() drawerButton = new EventEmitter<string>();
  @ViewChild('dialog') dialog!: ElementRef;

  constructor(public router: Router) {}

  ngAfterViewInit() {
    // polyfill dialog as needed
    if (typeof HTMLDialogElement !== 'function') {
      import('dialog-polyfill').then((dialogPolyfill) => {
        dialogPolyfill.default.registerDialog(this.dialog.nativeElement);
      });
    }
  }

  handleDrawerClose(event: any) {
    this.drawerButton.emit(event);
  }

  handleEnterKey(path: string) {
    return (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        this.router.navigate([path]);
        this.closeDrawer();
      }
    };
  }

  closeDrawer() {
    requestAnimationFrame(() => {
      this.dialog?.nativeElement.close();
    });
  }

  openDrawer() {
    requestAnimationFrame(() => {
      this.dialog?.nativeElement.showModal();
    });
  }

  ngOnChanges({ open }: SimpleChanges) {
    if (open.currentValue === true) {
      this.openDrawer();

      return;
    }

    this.closeDrawer();
  }
}
