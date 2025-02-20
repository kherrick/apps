import {
  Component,
  ElementRef,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
  inject,
  isDevMode,
  viewChild,
} from '@angular/core';

import { CommonModule, DOCUMENT, isPlatformBrowser } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SwUpdate, UnrecoverableStateEvent } from '@angular/service-worker';

import { Subscription, interval } from 'rxjs';

import {
  Theme,
  ThemeService,
  Themes,
} from '../../../app/shell/theme/theme.service';

import { XDialogComponent } from '../../../app/shell/x-dialog/x-dialog.component';
import { XDialogService } from '../../../app/shell/x-dialog/x-dialog.service';
import { XNavigationRailComponent } from '../../../app/shell/x-navigation-rail/x-navigation-rail.component';
import { XTopAppBarComponent } from '../../../app/shell/x-top-app-bar/x-top-app-bar.component';
import { XNavigationDrawerComponent } from '../x-navigation-drawer/x-navigation-drawer.component';

@Component({
  selector: 'x-shell',
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule,
    XDialogComponent,
    XNavigationDrawerComponent,
    XNavigationRailComponent,
    XTopAppBarComponent,
  ],
  template: `
    <x-navigation-drawer
      (drawerButton)="handleDrawerButton()"
      [isBrowser]="isBrowser"
      [open]="isDrawerOpen"
      [hidden]="!isDrawerOpen"
    ></x-navigation-drawer>
    <x-navigation-rail
      *ngIf="!isFullscreen"
      (drawerButton)="handleDrawerButton()"
    ></x-navigation-rail>
    <section>
      <x-top-app-bar
        *ngIf="!isFullscreen"
        (drawerButton)="handleDrawerButton()"
        (themeButton)="handleThemeButton($event)"
      />
      <main>
        <x-dialog></x-dialog>
        <router-outlet></router-outlet>
      </main>
    </section>
  `,
  styles: [
    `
      section {
        display: flex;
        flex-direction: column;
        flex: 1;

        x-top-app-bar {
          --md-sys-comp-top-app-bar-padding: 1rem;
          --mat-toolbar-standard-height: 4rem;

          height: var(--mat-toolbar-standard-height);
          min-height: var(--mat-toolbar-standard-height);
          max-height: var(--mat-toolbar-standard-height);
        }

        main {
          height: 100%;
        }
      }

      x-navigation-rail {
        --md-comp-navigation-rail-container-height: 100vh;
        --md-comp-navigation-rail-container-width: 5rem;

        display: none;
        min-height: var(--md-comp-navigation-rail-container-height);
        min-width: 0;
        z-index: 2;
      }

      @media screen and (min-width: 859px) {
        x-navigation-rail {
          display: flex;
          flex: 0 0
            calc(var(--md-comp-navigation-rail-container-width, 5rem) + 1px);
        }
      }
    `,
  ],
})
export class XShellComponent implements OnInit {
  public isBrowser: boolean = false;
  public isDialogOpen: boolean = false;
  public isFullscreen: boolean = false;
  public isDrawerOpen: boolean = false;
  public sidenav = viewChild.required<MatSidenav>('sidenav');

  private dialogSubscription?: Subscription;
  private dialogResultSubscription?: Subscription;

  private unrecoverable!: Subscription;
  private versionUpdates!: Subscription;

  public dialogService: XDialogService = inject(XDialogService);
  public themeService: ThemeService = inject(ThemeService);

  private document: Document = inject(DOCUMENT);
  private platformId: Object = inject(PLATFORM_ID);

  constructor(
    private swUpdate: SwUpdate,
    public el: ElementRef,
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      if (!isDevMode()) {
        console.log(
          'Update Service: this.swUpdate.isEnabled',
          this.swUpdate.isEnabled,
        );

        const TEN_SECONDS = 10000;
        const FIVE_MINUTES = TEN_SECONDS * 30;
        interval(FIVE_MINUTES).subscribe(() => {
          console.log('UpdateService: Checking for Updates.', new Date());

          this.swUpdate.checkForUpdate();
        });

        this.swUpdate.unrecoverable.subscribe(
          (evt: UnrecoverableStateEvent) => {
            console.log('UnrecoverableStateEvent', evt);
          },
        );

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
                  `New app version ready for use: ${evt.latestVersion.hash}`,
                );

                await this.swUpdate.activateUpdate();

                this.handleAppUpdate();
                break;
              case 'VERSION_INSTALLATION_FAILED':
                console.log(
                  `Failed to install app version '${evt.version.hash}': ${evt.error}`,
                );

                break;
            }
          },
        );

        this.dialogSubscription = this.dialogService.open$.subscribe(
          (isDialogOpen) => {
            this.isDialogOpen = isDialogOpen;
          },
        );

        this.dialogResultSubscription = this.dialogService.result$.subscribe(
          (result) => {
            if (result === 'apps-update-ok') {
              location.reload();
            }

            if (result === 'apps-update-cancel') {
              console.log('cancelled.');
            }
          },
        );
      }

      this.keepInSync();
      this.watchPrefersColorScheme();
      this.enableTheme(
        this.getThemeFromStorage() ||
          this.getThemeFromBrowser() ||
          this.getThemeFromTime(),
      );
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      // clear site progress circle
      const progress: HTMLProgressElement | null =
        this.document.querySelector('.progress');

      if (progress) {
        progress.style.display = 'none';
      }

      // slides - listen for fullscreen events
      this.el.nativeElement.addEventListener('fullscreen', () =>
        this.fullscreenListener(),
      );
      this.document.addEventListener('fullscreenchange', () =>
        this.fullscreenChangeListener(),
      );

      // slides - clear persisted state
      sessionStorage.removeItem('apps-slides-fullscreen');
      sessionStorage.removeItem('apps-slides-mode');
      sessionStorage.removeItem('apps-slides-last');
    }
  }

  ngOnDestroy(): void {
    this.unrecoverable?.unsubscribe();
    this.versionUpdates?.unsubscribe();

    // slides - remove fullscreen event listeners
    this.el.nativeElement.removeEventListener(
      'fullscreen',
      this.fullscreenListener,
    );

    this.document.removeEventListener(
      'fullscreenchange',
      this.fullscreenChangeListener,
    );

    this.dialogSubscription?.unsubscribe();
    this.dialogResultSubscription?.unsubscribe();
  }

  enableTheme(newTheme = Themes.Light, persist = true) {
    const html = document.documentElement;

    let otherTheme;
    if (newTheme === Themes.Light) {
      otherTheme = Themes.Dark;
    } else {
      otherTheme = Themes.Light;
    }

    html.classList.add(`${newTheme}-theme`);
    html.classList.remove(`${otherTheme}-theme`);

    if (persist) {
      this.themeService.persistToStorage(
        this.getPreferenceKey('theme'),
        newTheme,
      );
    }
  }

  // slides - helper methods
  fullscreenListener() {
    this.toggleFullscreen();
  }

  // slides - helper methods
  fullscreenChangeListener() {
    this.isFullscreen = !!this.document.fullscreenElement;

    sessionStorage.setItem(
      'apps-slides-fullscreen',
      this.isFullscreen ? 'enabled' : 'disabled',
    );
  }

  getThemeFromBrowser() {
    let mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQueryList.matches) {
      return Themes.Dark;
    } else {
      mediaQueryList = window.matchMedia('(prefers-color-scheme: light)');

      if (mediaQueryList.matches) {
        return Themes.Light;
      } else {
        return undefined;
      }
    }
  }

  getThemeFromStorage() {
    const pref = localStorage.getItem(this.getPreferenceKey('theme'));
    const lastChanged = localStorage.getItem('preference-theme-last-change');

    let now: number | Date = new Date();
    now = now.getTime();

    const minutesPassed = (now - Number(lastChanged)) / (1000 * 60);

    if (minutesPassed < 120 && pref === Themes.Light) {
      return Themes.Light;
    } else if (minutesPassed < 120 && pref === Themes.Dark) {
      return Themes.Dark;
    } else {
      return undefined;
    }
  }

  getThemeFromTime() {
    const date = new Date();
    const hour = date.getHours();

    if (hour > 20 || hour < 5) {
      return Themes.Dark;
    } else {
      return Themes.Light;
    }
  }

  getTokens({ matches }: { matches: boolean }) {
    return {
      token: matches
        ? this.getThemePreference(Themes.Light)
        : this.getThemePreference(Themes.Dark),
      newToken: matches
        ? this.getThemePreference(Themes.Dark)
        : this.getThemePreference(Themes.Light),
    };
  }

  getPreferenceKey(type: string) {
    return `preference-${type}`;
  }

  getThemePreference(val: Theme) {
    return `${val}-theme`;
  }

  handleThemeButton(theme: Theme) {
    this.toggleMode(theme);
  }

  keepInSync() {
    globalThis.addEventListener('storage', (event: any) => {
      if (event.key === this.getPreferenceKey('theme')) {
        if (event.newValue === Themes.Light) {
          this.themeService.theme.set(Themes.Light);
          this.enableTheme(Themes.Light, false);
        } else if (event.newValue === Themes.Dark) {
          this.themeService.theme.set(Themes.Dark);
          this.enableTheme(Themes.Dark, false);
        }
      }
    });

    if (globalThis.matchMedia) {
      const darkModeMediaQuery = globalThis.matchMedia(
        '(prefers-color-scheme: dark)',
      );

      darkModeMediaQuery.addEventListener('change', (e) => {
        this.replaceThemeClass(e);

        const mode = e.matches ? Themes.Dark : Themes.Light;

        this.themeService.theme.set(mode);
        this.themeService.persistToStorage(
          this.getPreferenceKey('theme'),
          mode,
        );
      });

      const storedThemePreference = localStorage.getItem(
        this.getPreferenceKey('theme'),
      );

      if (storedThemePreference === Themes.Light) {
        this.themeService.theme.set(Themes.Light);

        globalThis.document.documentElement.classList.add(
          this.getThemePreference(Themes.Light),
        );

        return;
      }

      if (storedThemePreference === Themes.Dark) {
        this.themeService.theme.set(Themes.Dark);

        globalThis.document.documentElement.classList.add(
          this.getThemePreference(Themes.Dark),
        );

        return;
      }

      if (darkModeMediaQuery.matches) {
        this.themeService.theme.set(Themes.Dark);

        globalThis.document.documentElement.classList.add(
          this.getThemePreference(Themes.Dark),
        );

        return;
      }
      this.themeService.theme.set(Themes.Light);

      globalThis.document.documentElement.classList.add(
        this.getThemePreference(Themes.Light),
      );
    }
  }

  handleAppUpdate(): void {
    this.dialogService.openDialog(
      'Apps has updated. Press OK to load the new version.',
      {
        cancelText: 'Cancel',
        cancelValue: 'apps-update-cancel',
        submitText: 'OK',
        submitValue: 'apps-update-ok',
      },
    );
  }

  handleCloseStart() {
    this.el.nativeElement.shadowRoot.querySelector(
      'mat-sidenav-container',
    ).style.overflow = 'auto';
  }

  handleDrawerButton(): void {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  // slides - helper methods
  toggleFullscreen() {
    if (!this.document.fullscreenElement) {
      this.document.documentElement.requestFullscreen();
    } else if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    }
  }

  // @todo - revisit this, as it is really basic, and uses predefined colors
  // consider using https://github.com/rodydavis/material-theme-control
  toggleMode(currentTheme: Theme) {
    if (currentTheme === Themes.Light) {
      this.themeService.persistToStorage(
        this.getPreferenceKey('theme'),
        Themes.Dark,
      );

      this.themeService.theme.set(Themes.Dark);

      if (
        globalThis.document.documentElement.classList.contains(
          this.getThemePreference(Themes.Light),
        )
      ) {
        globalThis.document.documentElement.classList.replace(
          this.getThemePreference(Themes.Light),
          this.getThemePreference(Themes.Dark),
        );

        return;
      }

      globalThis.document.documentElement.classList.add(
        this.getThemePreference(Themes.Dark),
      );

      return;
    }

    this.themeService.persistToStorage(
      this.getPreferenceKey('theme'),
      Themes.Light,
    );

    this.themeService.theme.set(Themes.Light);

    if (
      globalThis.document.documentElement.classList.contains(
        this.getThemePreference(Themes.Dark),
      )
    ) {
      globalThis.document.documentElement.classList.replace(
        this.getThemePreference(Themes.Dark),
        this.getThemePreference(Themes.Light),
      );

      return;
    }

    globalThis.document.documentElement.classList.add(
      this.getThemePreference(Themes.Light),
    );
  }

  replaceThemeClass(query: MediaQueryList | MediaQueryListEvent) {
    return document.documentElement.classList.replace(
      this.getTokens(query).token,
      this.getTokens(query).newToken,
    );
  }

  watchPrefersColorScheme() {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');

    if (mediaQueryList && mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', (event) => {
        const root = document.documentElement;

        if (event.matches !== true) {
          if (!root.classList.contains(this.getThemePreference(Themes.Light))) {
            this.enableTheme(Themes.Light);
          }
        } else {
          if (!root.classList.contains(this.getThemePreference(Themes.Dark))) {
            this.enableTheme(Themes.Dark);
          }
        }
      });
    }
  }
}
