import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import {
  Component,
  ElementRef,
  Inject,
  isDevMode,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SwUpdate, UnrecoverableStateEvent } from '@angular/service-worker';
import { interval, Subscription } from 'rxjs';

import { DialogComponent } from '../dialog/dialog.component';
import { NavigationDrawerComponent } from '../navigation-drawer/navigation-drawer.component';
import { NavigationRailComponent } from '../navigation-rail/navigation-rail.component';
import { TopAppBarComponent } from '../top-app-bar/top-app-bar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    TopAppBarComponent,
    NavigationRailComponent,
    NavigationDrawerComponent,
    DialogComponent,
    RouterModule,
  ],
  template: `
    <app-navigation-drawer
      (drawerButton)="handleDrawerButton()"
      [isBrowser]="isBrowser"
      [open]="isDrawerOpen"
    ></app-navigation-drawer>
    <app-navigation-rail
      *ngIf="!isFullscreen"
      (drawerButton)="handleDrawerButton()"
    ></app-navigation-rail>
    <section>
      <top-app-bar
        *ngIf="!isFullscreen"
        (drawerButton)="handleDrawerButton()"
      ></top-app-bar>
      <main [ngClass]="{ 'with-padding': !isFullscreen }">
        <app-dialog></app-dialog>
        <router-outlet></router-outlet>
      </main>
    </section>
  `,
  styles: [
    `
      :host {
        min-height: 100vh;
      }

      section {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      section > main {
        height: 100%;
      }

      .with-padding {
        padding: 1rem 1rem 0 1rem;
      }

      app-navigation-rail {
        display: none;
      }

      @media screen and (min-width: 859px) {
        app-navigation-rail {
          display: block;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShellComponent implements OnInit, OnDestroy {
  public isBrowser: boolean;
  public isDrawerOpen: boolean = false;
  public isFullscreen: boolean = false;

  private unrecoverable!: Subscription;
  private versionUpdates!: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private swUpdate: SwUpdate,
    public el: ElementRef
  ) {
    this.isBrowser = isPlatformBrowser(platformId);

    if (this.isBrowser && !isDevMode()) {
      console.log(
        'Update Service: this.swUpdate.isEnabled?',
        this.swUpdate.isEnabled
      );

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
    if (this.isBrowser) {
      const progress: HTMLProgressElement | null =
        this.document.querySelector('.progress');

      if (progress) {
        progress.style.display = 'none';
      }

      this.el.nativeElement.addEventListener('fullscreen', () =>
        this.fullscreenListener()
      );
      this.document.addEventListener('fullscreenchange', () =>
        this.fullscreenChangeListener()
      );

      // clear persisted state
      sessionStorage.removeItem('apps-slides-fullscreen');
      sessionStorage.removeItem('apps-slides-mode');
      sessionStorage.removeItem('apps-slides-last');
    }
  }

  ngOnDestroy(): void {
    this.unrecoverable?.unsubscribe();
    this.versionUpdates?.unsubscribe();

    this.el.nativeElement.removeEventListener(
      'fullscreen',
      this.fullscreenListener
    );
    this.document.removeEventListener(
      'fullscreenchange',
      this.fullscreenChangeListener
    );
  }

  handleDrawerButton(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  fullscreenListener() {
    this.toggleFullscreen();
  }

  fullscreenChangeListener() {
    this.isFullscreen = !!this.document.fullscreenElement;

    sessionStorage.setItem(
      'apps-slides-fullscreen',
      this.isFullscreen ? 'enabled' : 'disabled'
    );
  }

  toggleFullscreen() {
    if (!this.document.fullscreenElement) {
      this.document.documentElement.requestFullscreen();
    } else if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    }
  }
}
