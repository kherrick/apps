import { ViewportScroller } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';

import { tap } from 'rxjs';

import { XShellComponent } from './shell/x-shell/x-shell.component';

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [XShellComponent],
  selector: 'x-root',
  template: `<x-shell></x-shell>`,
  styles: [
    `
      x-shell {
        background-color: var(--x-shell-background-color);
        display: flex;
        min-height: 100vh;
      }
    `,
  ],
})
export class XRootComponent {
  private router: Router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    this.router.events
      .pipe(
        takeUntilDestroyed(),
        tap((event) => {
          if (event instanceof NavigationEnd) {
            this.viewportScroller.scrollToPosition([0, 0]);
          }
        }),
      )
      .subscribe();
  }
}
