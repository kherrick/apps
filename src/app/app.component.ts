import {
  Component, ViewEncapsulation
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-root',
  template: `
    <app-shell></app-shell>
  `,
  styles: [
    `
      app-shell {
        display: flex;
      }
    `,
  ],
})
export class AppComponent {}
