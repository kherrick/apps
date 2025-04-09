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
  ViewEncapsulation,
} from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'x-navigation-drawer',
  imports: [CommonModule, RouterModule],
  template: `
    <div drawer-container>
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
              class="list-tile"
            >
              <span class="title">Home</span>
              <i class="material-icons">chevron_right</i>
            </div>
            <div
              (click)="closeDrawer()"
              (keydown)="handleEnterKey('/news')($event)"
              [routerLink]="'/news'"
              class="list-tile"
            >
              <span class="title">News</span>
              <i class="material-icons">chevron_right</i>
            </div>
            <div
              (click)="closeDrawer()"
              (keydown)="handleEnterKey('/feeds')($event)"
              [routerLink]="'/feeds'"
              class="list-tile"
            >
              <span class="title">Feeds</span>
              <i class="material-icons">chevron_right</i>
            </div>
            <div class="divider"></div>
            <div
              (click)="closeDrawer()"
              (keydown)="handleEnterKey('/playground')($event)"
              [routerLink]="'/playground'"
              class="list-tile"
            >
              <span class="title">Playground</span>
              <i class="material-icons">chevron_right</i>
            </div>
            <div
              (click)="closeDrawer()"
              (keydown)="handleEnterKey('/links')($event)"
              [routerLink]="'/links'"
              class="list-tile"
            >
              <span class="title">Links</span>
              <i class="material-icons">chevron_right</i>
            </div>
            <div
              (click)="closeDrawer()"
              (keydown)="
                handleEnterKey('/slides/slides')(
                  $event
                )
              "
              [routerLink]="'/slides/slides'"
              class="list-tile"
            >
              <span class="title">Slides</span>
            </div>
            <div
              (click)="closeDrawer()"
              (keydown)="handleEnterKey('/about')($event)"
              [routerLink]="'/about'"
              class="list-tile"
            >
              <span class="title">About</span>
            </div>
          </section>
        </div>
        <form method="dialog">
          <button class="button">
            <i class="material-icons">close</i>
            <label>Close Drawer</label>
          </button>
        </form>
      </dialog>
    </div>
  `,
  styles: [
    `
      @use 'material-design-lite/css/components/navigation-drawer/style.css' as
        navigation-drawer-style;
      @use 'material-design-lite/css/components/list-tile/style.css' as
        list-tile-style;
      @use 'material-design-lite/css/components/button/style.css' as button-style;

      @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

      [drawer-container] {
        --md-sys-comp-navigation-drawer-background-color: var(
          --md-sys-color-surface
        );
        --md-sys-comp-navigation-drawer-color: var(--md-sys-color-on-surface);

        --md-comp-navigation-drawer-container-height: 100%;
        --md-comp-navigation-drawer-container-width: 360px;

        .drawer-title {
          font-size: 1rem;
        }

        .section-header {
          text-align: left;
        }

        .list-tile {
          .title {
            font-size: 1rem;
          }
        }

        .button,
        .list-tile:hover {
          cursor: pointer;
        }

        .button *,
        .list-tile:hover * {
          cursor: inherit;
          pointer-events: none;
        }

        .list-tile:hover {
          background-color: var(--md-sys-state-hover-color);
        }

        :is(.navigation-drawer).modal[open]::backdrop {
          background-color: rgb(var(--md-sys-color-scrim), 0.4);
          background-color: rgb(0, 0, 0, 0.4);
          pointer-events: none !important;
        }

        :is(.navigation-drawer).modal[open] {
          overflow-x: hidden;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XNavigationDrawerComponent implements AfterViewInit, OnChanges {
  @Input() isBrowser: boolean = false;
  @Input() open: boolean = false;
  @Output() drawerButton = new EventEmitter<string>();
  @ViewChild('dialog') dialog!: ElementRef;

  constructor(public router: Router) {}

  ngAfterViewInit() {
    // polyfill dialog as needed
    // if (typeof HTMLDialogElement !== 'function') {
    //   import('dialog-polyfill').then((dialogPolyfill) => {
    //     dialogPolyfill.default.registerDialog(this.dialog.nativeElement);
    //   });
    // }
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
    if (this.isBrowser) {
      requestAnimationFrame(() => {
        this.dialog?.nativeElement.close();
      });
    }
  }

  openDrawer() {
    if (this.isBrowser) {
      requestAnimationFrame(() => {
        this.dialog?.nativeElement.showModal();
      });
    }
  }

  ngOnChanges({ open }: SimpleChanges) {
    if (open.currentValue === true) {
      this.openDrawer();

      return;
    }

    this.closeDrawer();
  }
}
