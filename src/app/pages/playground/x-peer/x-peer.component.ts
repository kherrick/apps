import { CommonModule, isPlatformServer } from '@angular/common';
import {
  Component,
  DOCUMENT,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { MatTabsModule } from '@angular/material/tabs';

import { XPeerClientComponent } from './client/client.component';
import { XPeerSettingsComponent } from './settings/settings.component';

import { PeerStore } from './store/store';

import { getConfig, getPeerUrl, getQueryParamKey } from './utils/utils';

@Component({
  selector: 'x-peer',
  encapsulation: ViewEncapsulation.ShadowDom,
  standalone: true,
  imports: [
    CommonModule,
    MatTabsModule,
    XPeerClientComponent,
    XPeerSettingsComponent,
  ],
  styles: `
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');
    [x-peer-container] {
      --video-height: calc(
        (100vh / 2)
        - var(--mat-toolbar-standard-height)
        - var(--mat-tab-container-height)
      );

      --chat-output-height: calc(
        (100vh / 2)
        - var(--mat-toolbar-standard-height)
        - var(--mat-tab-container-height)
        + var(--video-height)
        + var(--x-peer-container-spacer)
      );

      display: flex;
      flex-direction: column;
      flex: auto;
      height: calc(
        100vh
        - var(--mat-toolbar-standard-height)
      );

      mat-tab-group {
        flex: auto;
        height: 100%;
        width: 100%;

        .mat-mdc-tab-body-wrapper {
          flex: auto;
        }

        &.fullscreen {
          mat-tab-header {
            display: none;
          }
        }
      }
    }
  `,
  template: `
    <div x-peer-container>
      <mat-tab-group
        [ngClass]="{ fullscreen: isFullscreen() }"
        [selectedIndex]="selectedTabIndex"
        mat-align-tabs="start"
        mat-stretch-tabs="true"
      >
        <mat-tab label="Client">
          <ng-template matTabContent>
            <x-peer-client
              (fullscreen)="handleFullscreen($event)"
            ></x-peer-client>
          </ng-template>
        </mat-tab>
        <mat-tab label="Settings">
          <ng-template matTabContent>
            <x-peer-settings></x-peer-settings>
          </ng-template>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
})
export class XPeerComponent implements OnInit {
  readonly store = inject(PeerStore);

  private searchParams = new URLSearchParams(globalThis.location?.search);

  elementRef: HTMLElement;
  hasSearchConfig: any;
  matMdcTabBodyWrappers: NodeListOf<HTMLElement> | null = null;
  selectedTabIndex: number = 0;

  isFullscreen(): boolean {
    return !!this.document.fullscreenElement;
  }

  constructor(
    @Inject(DOCUMENT) private document: Document,
    @Inject(PLATFORM_ID) private platformId: any,
    el: ElementRef,
  ) {
    this.elementRef = el.nativeElement;
  }

  async ngOnInit(): Promise<void> {
    const searchParamsConfig = await getConfig(
      this.searchParams.get(getQueryParamKey()),
    );

    // look at location to see if peer url is provided. If it is -- attempt to
    // add to the store -- assuming nothing else is stored there already.
    if (Object.keys(searchParamsConfig).length) {
      let shouldGetPeerUrl = false;

      if (this.store.myId() === '') {
        this.store.updateMyId(searchParamsConfig.m);
        shouldGetPeerUrl = true;
      }

      if (this.store.peerId() === '') {
        this.store.updatePeerId(searchParamsConfig.p);
        shouldGetPeerUrl = true;
      }

      if (this.store.peerUrl() === '' || shouldGetPeerUrl === true) {
        const myId = this.store.myId();
        const peerId = this.store.peerId();

        this.store.updatePeerUrl(await getPeerUrl(myId, peerId));
        this.store.updateCanAnnounce(true);
      }
    }

    if (!isPlatformServer(this.platformId)) {
      requestAnimationFrame(async () => {
        this.selectedTabIndex =
          Object.keys(
            await getConfig(this.searchParams.get(getQueryParamKey())),
          ).length > 0
            ? 0
            : 1;
      });
    }
  }

  async handleFullscreen(shouldFullscreen: boolean) {
    if (shouldFullscreen) {
      await this.document.documentElement.requestFullscreen();

      this.document.documentElement.style.setProperty('--mat-toolbar-standard-height', '0px');
      this.document.documentElement.style.setProperty('--x-peer-container-spacer', '0px');

      return;
    }

    this.document.documentElement.style.setProperty('--mat-toolbar-standard-height', '4rem');
    this.document.documentElement.style.setProperty('--x-peer-container-spacer', '1.6875rem');

    await this.document.exitFullscreen();
  }
}
