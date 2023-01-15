import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.ShadowDom,
  selector: 'app-root',
  template: `
    <app-shell>
      <main>
        <router-outlet></router-outlet>
      </main>
    </app-shell>
  `,
  styles: []
})
export class AppComponent { }
