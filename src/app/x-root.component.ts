import { Component, ViewEncapsulation } from '@angular/core';

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
export class XRootComponent {}
