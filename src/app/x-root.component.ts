import { Component, ViewEncapsulation, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Location, ViewportScroller } from '@angular/common';

import { XShellComponent } from './shell/x-shell/x-shell.component';

import validPaths from './validPaths.json';

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [XShellComponent],
  selector: 'x-root',
  template: ` <x-shell></x-shell> `,
  styles: [
    `
      x-shell {
        background-color: var(--x-shell-background-color);
        display: flex;
      }
    `,
  ],
})
export class XRootComponent {
  private loc: Location = inject(Location);
  private router: Router = inject(Router);
  private viewportScroller = inject(ViewportScroller);

  constructor() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]);
      }
    });

    const path = this.loc.path();

    // allow custom routes to be fully rendered server side - note the absence
    // of "/shell" in validPaths
    if (validPaths.includes(path)) {
      this.router.navigate([path]);
    }
  }
}
