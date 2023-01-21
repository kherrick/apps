import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import { SwUpdate, VersionEvent } from '@angular/service-worker';
import { Subscription } from 'rxjs';

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
  styles: [`
    app-shell {
      display: flex;
    }
  `],
})
export class AppComponent implements OnInit, OnDestroy {
  private isBrowser: boolean;
  private versionUpdates: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private swUpdate: SwUpdate
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    this.versionUpdates = this.swUpdate.versionUpdates.subscribe(
      (event: VersionEvent) => {
        if (event.type === 'VERSION_READY' && this.isBrowser) {
          location.reload();
        }
      }
    );
  }

  ngOnInit(): void {
    const progress: HTMLProgressElement | null =
      this.document.querySelector('.progress');

    if (progress && this.isBrowser) {
      progress.style.display = 'none';
    }
  }

  ngOnDestroy(): void {
    this.versionUpdates.unsubscribe();
  }
}
