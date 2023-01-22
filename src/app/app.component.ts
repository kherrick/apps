import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  Inject,
  isDevMode,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import { SwUpdate, UnrecoverableStateEvent } from '@angular/service-worker';
import { interval, Subscription } from 'rxjs';

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
export class AppComponent implements OnInit, OnDestroy {
  private isBrowser: boolean;
  private unrecoverable!: Subscription;
  private versionUpdates!: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private swUpdate: SwUpdate
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser && !isDevMode()) {
      console.log('Update Service: this.swUpdate.isEnabled?', this.swUpdate.isEnabled);

      const TEN_SECONDS = 10000;
      const TEN_MINUTES = TEN_SECONDS * 60;
      interval(TEN_SECONDS).subscribe(() => {
        console.log('UpdateService: Checking for Updates');

        this.swUpdate.checkForUpdate();
      });

      this.swUpdate.unrecoverable.subscribe((evt: UnrecoverableStateEvent) => {
        console.log('UnrecoverableStateEvent', evt);
      });

      this.versionUpdates = this.swUpdate.versionUpdates.subscribe(
        async (evt) => {
          console.log('UpdateService: versionUpdates', evt);

          switch (evt.type) {
            case 'VERSION_DETECTED':
              console.log(`Downloading new app version: ${evt.version.hash}`);
              break;
            case 'VERSION_READY':
              console.log(`Current app version: ${evt.currentVersion.hash}`);
              console.log(
                `New app version ready for use: ${evt.latestVersion.hash}`
              );

              await this.swUpdate.activateUpdate();
              location.reload();
              break;
            case 'VERSION_INSTALLATION_FAILED':
              console.log(
                `Failed to install app version '${evt.version.hash}': ${evt.error}`
              );

              break;
          }
        }
      );
    }
  }

  ngOnInit(): void {
    const progress: HTMLProgressElement | null =
      this.document.querySelector('.progress');

    if (progress && this.isBrowser) {
      progress.style.display = 'none';
    }
  }

  ngOnDestroy(): void {
    this.unrecoverable?.unsubscribe();
    this.versionUpdates?.unsubscribe();
  }
}
