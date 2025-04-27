import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnDestroy,
  Signal,
  ViewEncapsulation,
  inject,
  viewChild,
} from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import '@material/web/button/outlined-button.js';
import '@material/web/switch/switch.js';

import { asn1, pkcs12, pki, util } from 'node-forge';

import { XDialogService } from '../../../../app/shell/x-dialog/x-dialog.service';

@Component({
  selector: 'x-certificate',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatInputModule, MatIconModule],
  template: `
    <div certificate-container>
      <div certificate>
        <section>
          <header>
            <h1>&lt;x-certificate&gt;</h1>
            <p>
              Use the inputs below to generate a password protected pfx file, or
              load one at the bottom to see the generated response.
            </p>
          </header>

          <section class="settings">
            <label for="shouldCreate"> Read </label>
            <md-switch
              (change)="handleMdSwitchChange()"
              [selected]="shouldCreate"
              #shouldCreateToggle
              id="shouldCreate"
            />
            <label for="shouldCreate"> Write </label>
          </section>
        </section>
        <section #createCertificate>
          <mat-form-field>
            <mat-label>Country Name (2 letter code)</mat-label>
            <input
              (input)="countryName = countryNameInput.value"
              [value]="countryName"
              #countryNameInput
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>State or Province Name (full name)</mat-label>
            <input
              (input)="stateOrProvinceName = stateOrProvinceNameInput.value"
              [value]="stateOrProvinceName"
              #stateOrProvinceNameInput
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Locality Name (eg, city)</mat-label>
            <input
              (input)="localityName = localityNameInput.value"
              [value]="localityName"
              #localityNameInput
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Organization Name (eg, company)</mat-label>
            <input
              (input)="organizationName = organizationNameInput.value"
              [value]="organizationName"
              #organizationNameInput
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Organizational Unit Name (eg, section)</mat-label>
            <input
              (input)="
                organizationalUnitName = organizationalUnitNameInput.value
              "
              [value]="organizationalUnitName"
              #organizationalUnitNameInput
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Common Name (e.g. server FQDN or YOUR name)</mat-label>
            <input
              (input)="commonName = commonNameInput.value"
              [value]="commonName"
              #commonNameInput
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Email Address</mat-label>
            <input
              (input)="emailAddress = emailAddressInput.value"
              [value]="emailAddress"
              #emailAddressInput
              matInput
              type="text"
            />
          </mat-form-field>
          <mat-form-field>
            <mat-label>Bits (key length)</mat-label>
            <input
              (input)="bits = getNumber(bitsInput.value)"
              [value]="bits"
              #bitsInput
              matInput
              type="number"
            />
          </mat-form-field>
        </section>
        <section certificate-password>
          <mat-form-field>
            <mat-label>Password</mat-label>
            <input
              (input)="passwordChange($event)"
              [value]="password"
              #passwordInput
              matInput
              type="password"
            />
            @if (password) {
              <button
                aria-label="Clear"
                matSuffix
                (click)="
                  passwordInput.type === 'password'
                    ? (passwordInput.type = 'text')
                    : (passwordInput.type = 'password')
                "
              >
                <mat-icon>{{
                  passwordInput.type === 'password'
                    ? 'visibility'
                    : 'visibility_off'
                }}</mat-icon>
              </button>
            }
          </mat-form-field>
        </section>

        @if (shouldCreate) {
          <md-outlined-button (click)="handleCertificateGeneration()">
            Create Certificate
          </md-outlined-button>
        } @else {
          <md-outlined-button (click)="certInput.click()">
            Load PFX File
          </md-outlined-button>
          <input
            (change)="handleCertificateInputChange($event)"
            #certInput
            id="certInput"
            type="file"
          />
        }

        <div class="link-container">
          <a #link href=""></a>
        </div>
      </div>
    </div>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

    :host {
      --md-outlined-button-container-shape: 1rem;
      --md-outlined-button-disabled-label-text-color: var(
        --md-sys-color-on-surface
      );

      [certificate-container] {
        display: flex;
        justify-content: center;

        [certificate] {
          align-items: center;
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          grid-column-gap: 1rem;
          grid-row-gap: 1rem;
          justify-content: center;
          max-width: 60rem;
          padding: 1rem;
        }

        label {
          text-align: center;
          width: 5rem;
        }

        .settings {
          align-items: center;
          display: flex;
          flex-direction: row;
          justify-content: center;

          label {
            cursor: pointer;
          }
        }

        .link-container {
          text-align: center;
          width: 100%;

          a {
            text-decoration: underline;
          }
        }

        .text-container:first-of-type {
          margin-bottom: 1rem;
        }

        .text-container {
          display: flex;
          flex-direction: column;
        }

        input[type='file'] {
          display: none;
        }

        md-switch,
        md-outlined-button {
          margin: 0.5rem;
        }

        mat-form-field:has(input) {
          margin: auto;
          width: 90%;
        }

        section {
          text-align: center;
          width: 100%;

          button {
            margin-right: 1rem;
          }
        }
      }
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XCertificateComponent implements OnDestroy {
  countryName = 'US';
  stateOrProvinceName = 'Michigan';
  localityName = 'Detroit';
  organizationName = 'Internet Widgits Pty Ltd';
  organizationalUnitName = 'Sector 7-G';
  commonName = 'example.com';
  emailAddress = 'example@example.com';
  bits = 2048;
  password = '';

  shouldCreate = true;

  xDialogService: XDialogService = inject(XDialogService);

  link: Signal<ElementRef | undefined> = viewChild('link');
  shouldCreateToggle: Signal<ElementRef | undefined> =
    viewChild('shouldCreateToggle');
  createCertificate: Signal<ElementRef | undefined> =
    viewChild('createCertificate');

  worker?: Worker;
  workerEventListener!: (event: MessageEvent) => Promise<void>;

  constructor() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('./x-certificate.worker', import.meta.url),
      );

      this.workerEventListener = async (event: MessageEvent) => {
        // const progress = globalThis.document.querySelector(
        //   '.progress-container > .progress',
        // ) as HTMLElement;

        // if (progress) {
        //   progress.style.display = 'none';
        // }

        this.xDialogService.openDialog('Certificate creation has completed.', {
          title: 'Certificate Creation',
          modal: true,
        });

        let filename;

        switch (event?.data.intent) {
          case 'create-certificate':
            // generate a URL for the Blob
            const url = URL.createObjectURL(event.data.result.blob);
            const link = this.link();

            if (link) {
              link.nativeElement.innerText = event.data.result.filename;
              link.nativeElement.setAttribute(
                'download',
                event.data.result.filename,
              );
              link.nativeElement.href = url;
            }

            break;
          default:
            break;
        }
      };
    } else {
      // web workers are not supported in this environment
    }

    this.worker?.addEventListener('message', this.workerEventListener);
  }

  ngOnDestroy(): void {
    this.worker?.removeEventListener('message', this.workerEventListener);
  }

  extractFromPfx(pfxAb: ArrayBuffer, password: any) {
    const pfxAsn1 = asn1.fromDer(util.createBuffer(new Uint8Array(pfxAb)));

    const pfx = pkcs12.pkcs12FromAsn1(pfxAsn1, false, password);

    let bagResult, privateKey, certificate;

    let bagType = '1.2.840.113549.1.12.10.1.3'; // certificate Bag
    bagResult = pfx.getBags({ bagType })[bagType];

    if (bagResult && bagResult.length) {
      certificate = bagResult[0].cert;
    }

    bagType = '1.2.840.113549.1.12.10.1.2'; // PKCS #8 Shrouded Key Bag;
    bagResult = pfx.getBags({ bagType })[bagType];

    if (bagResult && bagResult.length) {
      privateKey = bagResult[0].key;
    }

    return { privateKey, certificate };
  }

  getNumber(v: string): number {
    return Number(v);
  }

  handleMdSwitchChange() {
    this.shouldCreate = !this.shouldCreate;

    const createCertificate = this.createCertificate();
    const shouldCreateToggle = this.shouldCreateToggle();

    if (createCertificate && shouldCreateToggle) {
      this.shouldCreate
        ? createCertificate.nativeElement.removeAttribute('hidden')
        : createCertificate.nativeElement.setAttribute('hidden', 'hidden');
    }
  }

  passwordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  privateKeyToPkcs8(privateKey: any) {
    const rsaPrivateKey = pki.privateKeyToAsn1(privateKey);
    const privateKeyInfo = pki.wrapRsaPrivateKey(rsaPrivateKey);
    const privateKeyInfoDer = asn1.toDer(privateKeyInfo).getBytes();
    const privateKeyInfoDerBuff = this.stringToArrayBuffer(privateKeyInfoDer);

    return privateKeyInfoDerBuff;
  }

  stringToArrayBuffer(data: any) {
    const arrBuff = new ArrayBuffer(data.length);
    const writer = new Uint8Array(arrBuff);

    for (let i = 0, len = data.length; i < len; i++) {
      writer[i] = data.charCodeAt(i);
    }

    return arrBuff;
  }

  async handleCertificateGeneration() {
    if (this.worker) {
      // const progress = globalThis.document.querySelector(
      //   '.progress-container > .progress',
      // ) as HTMLElement;

      // if (progress) {
      //   progress.style.display = 'block';
      // }

      this.xDialogService.openDialog('Certificate creation has started.', {
        title: 'Certificate Creation',
        modal: true,
        indeterminateProgress: true,
      });

      this.worker.postMessage({
        payload: {
          // set additional certificate attributes
          attrs: [
            {
              name: 'commonName',
              value: this.commonName,
            },
            {
              name: 'countryName',
              value: this.countryName,
            },
            {
              name: 'stateOrProvinceName',
              value: this.stateOrProvinceName,
            },
            {
              name: 'localityName',
              value: this.localityName,
            },
            {
              name: 'organizationName',
              value: this.organizationName,
            },
            {
              name: 'organizationalUnitName',
              value: this.organizationalUnitName,
            },
            {
              name: 'emailAddress',
              value: this.emailAddress,
            },
          ],
          bits: this.bits,
        },
        password: this.password,
        intent: 'create-certificate',
      });
    }
  }

  async handleCertificateInputChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    const [pfx] = fileInput.files ?? [];

    let privateKey = undefined;
    let certificate = undefined;

    try {
      fileInput.value = '';

      const extracted = this.extractFromPfx(
        await pfx.arrayBuffer(),
        this.password,
      );

      privateKey = extracted.privateKey;
      certificate = extracted.certificate;
    } catch (error) {
      this.xDialogService.openDialog(
        'The certificate details could not be extracted. Is the certificate and password valid? See the DevTools / Console for more details.',
        {
          modal: true,
        },
      );

      console.error(
        'ERROR',
        {
          certificate,
          cryptoKey: undefined,
          pkcs8: undefined,
          privateKey,
        },
        error,
      );

      return;
    }

    const pkcs8 = this.privateKeyToPkcs8(privateKey);

    const cryptoKey = await crypto.subtle.importKey(
      'pkcs8',
      pkcs8,
      { name: 'RSASSA-PKCS1-v1_5', hash: { name: 'SHA-256' } },
      true,
      ['sign'],
    );

    this.xDialogService.openDialog(
      'The certificate details have been extracted. See the DevTools / Console for more details.',
      {
        modal: true,
      },
    );

    console.log('Results', { certificate, cryptoKey, pkcs8, privateKey });
  }
}
