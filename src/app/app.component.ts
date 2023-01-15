import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, ViewEncapsulation } from '@angular/core';

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
export class AppComponent implements OnInit {
  private isBrowser: boolean;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    const progress: HTMLProgressElement | null =
      this.document.querySelector('.progress');

    if (progress && this.isBrowser) {
      progress.style.display = 'none';
    }
  }
}
