import { CommonModule } from '@angular/common';
import {
  Component,
  Inject,
  isDevMode,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationDrawerComponent } from '../navigation-drawer/navigation-drawer.component';
import { NavigationRailComponent } from '../navigation-rail/navigation-rail.component';
import { TopAppBarComponent } from '../top-app-bar/top-app-bar.component';

import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { SwUpdate, UnrecoverableStateEvent } from '@angular/service-worker';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    TopAppBarComponent,
    NavigationRailComponent,
    NavigationDrawerComponent,
    RouterModule,
  ],
  template: `
    <app-navigation-drawer
      (drawerButton)="handleDrawerButton($event)"
      [isBrowser]="isBrowser"
      [open]="open"
    ></app-navigation-drawer>
    <app-navigation-rail
      (drawerButton)="handleDrawerButton($event)"
    ></app-navigation-rail>
    <section>
      <top-app-bar (drawerButton)="handleDrawerButton($event)"></top-app-bar>
      <main>
        <router-outlet></router-outlet>
      </main>
    </section>
  `,
  styles: [
    `
      :host {
        height: 100%;
      }

      section {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      section > main {
        height: 100%;
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
export class ShellComponent implements OnInit, OnDestroy{
  public isBrowser: boolean;
  public open: boolean = false;

  private unrecoverable!: Subscription;
  private versionUpdates!: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: Object,
    private swUpdate: SwUpdate
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

  handleDrawerButton(event: any) {
    this.open = !this.open;
  }
}
