import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ViewChild,
  inject,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { WriterOptions } from 'zxing-wasm';

import { PeerStore } from '../store/store';

import {
  QUERY_PARAM_KEY,
  getMyEncodedURIComponent,
  getMyUrl,
  getPeerUrl,
  getRandomId,
} from '../utils/utils';

const writerOptions: WriterOptions = {
  format: 'QRCode',
  ecLevel: '2',
  scale: 4,
  sizeHint: 300,
};

@Component({
  selector: 'x-peer-settings',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatIconModule],
  styles: `
    [x-peer-settings-container] {
      display: flex;
      flex-direction: column;
      height: calc(100% - 2rem);
      padding: 1rem;

      .actions {
        align-items: flex-end;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        height: 100%;
        justify-content: flex-start;

        button {
          margin: 0.5rem;
        }
      }

      .peerContainer {
        height: 100%;
      }

      mat-form-field {
        display: block;
      }

      section {
        display: flex;
        flex-direction: column;

        .peerUrlContainer {
          align-items: center;
          display: flex;
          flex-direction: row;

          .peerUrlField {
            margin-right: 1rem;
            width: 100%;
          }

          .peerUrlCopy {
            margin-bottom: 1rem;
          }
        }

        section {
          margin-bottom: 1rem;
        }
      }
    }
  `,
  template: `
    <div x-peer-settings-container>
      <section class="peerContainer">
        <section class="peerUrlContainer">
          <mat-form-field class="peerUrlField">
            <mat-label>Peer Url</mat-label>
            <input [disabled]="'disabled'" #peerUrlInput matInput value="" />
          </mat-form-field>

          <button
            [disabled]="!store.canCopy()"
            (click)="handlePeerUrlCopy()"
            class="peerUrlCopy"
            extended
            mat-fab
          >
            <mat-icon>content_copy</mat-icon>
            Copy
          </button>
        </section>
        <section>
          <form #inputsForm>
            <mat-form-field>
              <mat-label>Peer Id</mat-label>
              <input #peerIdInput matInput value="" />
            </mat-form-field>

            <img src="{{ peerUrlQrCode }}" />

            <mat-form-field>
              <mat-label>My Id</mat-label>
              <input #myIdInput matInput value="" />
            </mat-form-field>

            <img src="{{ myUrlQrCode }}" />
          </form>
        </section>

        <section class="actions">
          <button
            (click)="generatePeerUrl()"
            aria-label="Generate Peer Ids"
            extended
            mat-fab
          >
            <mat-icon>science</mat-icon>
            Generate Peer Url
          </button>
          <button
            (click)="clear()"
            aria-label="Clear"
            extended
            mat-fab
          >
            <mat-icon>clear_all</mat-icon>
            Clear
          </button>
        </section>
      </section>
    </div>
  `,
})
export class XPeerSettingsComponent implements AfterViewInit {
  readonly store = inject(PeerStore);
  readonly cd = inject(ChangeDetectorRef);

  private searchParams = new URLSearchParams(globalThis.location?.search);

  myUrlQrCode?: string;
  peerUrlQrCode?: string;

  @ViewChild('myIdInput') myIdInput!: { nativeElement: HTMLInputElement };
  @ViewChild('peerIdInput') peerIdInput!: { nativeElement: HTMLInputElement };
  @ViewChild('peerUrlInput') peerUrlInput!: { nativeElement: HTMLInputElement };

  ngAfterViewInit() {
    if (globalThis.requestAnimationFrame) {
      globalThis.requestAnimationFrame(async () => {
        this.myIdInput.nativeElement.value = this.store.myId();
        this.peerIdInput.nativeElement.value = this.store.peerId();
        this.peerUrlInput.nativeElement.value = this.store.peerUrl();

        if (
          this.myIdInput.nativeElement.value &&
          this.peerIdInput.nativeElement.value
        ) {
          await this.setMyQrCode(
            await getMyUrl(
              this.myIdInput.nativeElement.value,
              this.peerIdInput.nativeElement.value,
            ),
          );

          await this.setPeerQrCode(this.peerUrlInput.nativeElement.value);
        }
      });
    }
  }

  clear() {
    this.myIdInput.nativeElement.value = '';
    this.store.updateMyId(this.myIdInput.nativeElement.value);
    this.peerIdInput.nativeElement.value = '';
    this.store.updatePeerId(this.peerIdInput.nativeElement.value);
    this.peerUrlInput.nativeElement.value = '';
    this.store.updatePeerUrl(this.peerUrlInput.nativeElement.value);

    this.myUrlQrCode = '';
    this.peerUrlQrCode = '';

    this.searchParams.delete(QUERY_PARAM_KEY.PEER);
    globalThis.history?.replaceState(null, '', globalThis.location?.pathname);
  }

  handlePeerUrlCopy() {
    globalThis.navigator.clipboard.writeText(
      this.peerUrlInput.nativeElement.value,
    );
  }

  async generatePeerUrl(): Promise<void> {
    let shouldGetPeerUrl = false;

    // update myId in store
    if (!this.myIdInput.nativeElement.value) {
      this.myIdInput.nativeElement.value = getRandomId();
      shouldGetPeerUrl = true;
    }

    this.store.updateMyId(this.myIdInput.nativeElement.value);

    // update peerId in store
    if (!this.peerIdInput.nativeElement.value) {
      this.peerIdInput.nativeElement.value = getRandomId();
      shouldGetPeerUrl = true;
    }

    this.store.updatePeerId(this.peerIdInput.nativeElement.value);

    // update peerUrl in store
    if (!this.peerUrlInput.nativeElement.value || shouldGetPeerUrl === true) {
      this.peerUrlInput.nativeElement.value = await getPeerUrl(
        this.myIdInput.nativeElement.value,
        this.peerIdInput.nativeElement.value,
      );
    }

    this.store.updateCanAnnounce(true);

    this.store.updatePeerUrl(this.peerUrlInput.nativeElement.value);
    await this.setPeerQrCode(this.peerUrlInput.nativeElement.value);
    await this.setMyUrl(this.store.myId(), this.store.peerId());
  }

  async setPeerQrCode(qrString: string): Promise<void> {
    await import('zxing-wasm').then(async ({ writeBarcode }) => {
      const peerUrlQrCodeBlob: Blob | null = (
        await writeBarcode(qrString, writerOptions)
      ).image;

      if (peerUrlQrCodeBlob) {
        this.peerUrlQrCode = URL.createObjectURL(peerUrlQrCodeBlob);
      }
    });
  }

  async setMyQrCode(qrString: string): Promise<void> {
    await import('zxing-wasm').then(async ({ writeBarcode }) => {
      const myUrlQrCodeBlob: Blob | null = (
        await writeBarcode(qrString, writerOptions)
      ).image;

      if (myUrlQrCodeBlob) {
        this.myUrlQrCode = URL.createObjectURL(myUrlQrCodeBlob);
      }
    });
  }

  async setMyUrl(myId: string, peerId: string): Promise<void> {
    if (myId && peerId) {
      await this.setMyQrCode(await getMyUrl(myId, peerId));

      this.searchParams.set(
        QUERY_PARAM_KEY.PEER,
        await getMyEncodedURIComponent(myId, peerId),
      );

      globalThis.history?.replaceState(
        null,
        '',
        globalThis.location?.pathname + '?' + this.searchParams.toString(),
      );

      this.cd.detectChanges();
    }
  }
}
