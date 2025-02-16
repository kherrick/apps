import {
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  ViewEncapsulation,
  inject,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import '@material/web/button/outlined-button.js';
import '@material/web/switch/switch.js';
import '@material/web/textfield/outlined-text-field.js';

import { MdOutlinedTextField } from '@material/web/textfield/outlined-text-field.js';

import { XDialogService } from '../../../../app/shell/x-dialog/x-dialog.service';

@Component({
  selector: 'x-encryption',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [MatInputModule, MatButtonModule, MatIconModule],
  template: `
    <div encryption-container>
      <div encryption>
        <section>
          <header>
            <h1>&lt;x-encryption&gt;</h1>
            <p>
              <a href="https://en.wikipedia.org/wiki/PBKDF2">PBKDF2</a> will
              securely generate an encryption key from a given password, then
              <a href="https://en.wikipedia.org/wiki/AES-GCM">AES-GCM</a> will
              use that key to encrypt provided data, offering both
              confidentiality and integrity protection.
            </p>
          </header>
          <section class="settings">
            @if (isPlainText) {
              <md-outlined-button
                (click)="handleDecryptButton($event)"
                #decryptButton
                mat-stroked-button
                disabled
              >
                Decrypt
              </md-outlined-button>
            } @else {
              <label for="shouldEncrypt">Decrypt</label>
            }
            <md-switch
              id="shouldEncrypt"
              (input)="handleMatShouldEncryptSlideToggle($event)"
              [selected]="shouldEncrypt"
              #shouldEncryptToggle
            />
            @if (isPlainText) {
              <md-outlined-button
                (click)="handleEncryptButton($event)"
                #encryptButton
                mat-stroked-button
              >
                Encrypt
              </md-outlined-button>
            } @else {
              <label for="shouldEncrypt">Encrypt</label>
            }
          </section>
          <section class="settings">
            <label for="isPlainText">File</label>
            <md-switch
              id="isPlainText"
              (input)="handleMatIsPlainTextSlideToggle($event)"
              [selected]="isPlainText"
              #isPlainTextToggle
            />
            <label for="isPlainText">Plain Text</label>
          </section>
          <mat-form-field>
            <mat-label>Password</mat-label>
            <input
              (input)="passwordChange($event)"
              matInput
              type="password"
              [value]="password"
              #passwordInput
            />
            @if (password) {
              <button
                matSuffix
                mat-icon-button
                aria-label="Clear"
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
          @if (isPlainText) {
            <div class="text-container">
              <md-outlined-text-field
                (input)="handlePlainTextInput($event)"
                #plainText
                label="Plain Text"
                type="textarea"
              />
              <md-outlined-button
                (click)="handleCopyTextButtonClick(this.plainText)"
                #copyPlainTextButton
                disabled
                mat-stroked-button
              >
                Copy Plain Text
              </md-outlined-button>
            </div>
            <div class="text-container">
              <md-outlined-text-field
                (input)="handleEncryptedTextInput($event)"
                #encryptedText
                label="Encrypted Text"
                type="textarea"
              />
              <md-outlined-button
                (click)="handleCopyTextButtonClick(this.encryptedText)"
                #copyEncryptedTextButton
                mat-stroked-button
                disabled
              >
                Copy Encrypted Text
              </md-outlined-button>
            </div>
          }

          @if (!isPlainText) {
            <div
              (click)="clickDropZoneHandler()"
              (dragenter)="dragEnterHandler($event)"
              (dragleave)="dragLeaveHandler($event)"
              (dragover)="dragOverHandler($event)"
              (drop)="dropHandler($event)"
              (mousedown)="mousedownHandler()"
              (mouseup)="mouseupHandler()"
              #dropZone
              id="dropZone"
            >
              Drag a single file to this drop zone or touch / click here to
              select a file.
            </div>
          }
        </section>
        <input
          #fileInput
          type="file"
          (change)="handleFileInputChange($event)"
        />
        <div class="link-container">
          <a #link href=""></a>
        </div>
      </div>
    </div>
  `,
  styles: `
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons&display=block');

    :host {
      --md-outlined-text-field-container-shape: 1rem;
      --md-outlined-button-container-shape: 1rem;
      --md-outlined-button-disabled-label-text-color: var(
        --md-sys-color-on-surface
      );

      [encryption-container] {
        align-items: center;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        justify-content: center;

        [encryption] {
          max-width: 60rem;
          padding: 0 1rem 1rem 1rem;

          #dropZone {
            border-radius: 1rem;
            height: 5rem;
            margin-bottom: 1rem;
            outline: var(--x-shell-default-outline);
            padding: 1rem;
            text-align: center;
            width: calc(100% - 2rem);
          }

          .settings {
            align-items: center;
            display: flex;
            flex-direction: row;
            justify-content: center;
          }

          .link-container {
            text-align: center;
            width: 100%;
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

          label {
            cursor: pointer;
            margin: 0 1rem;
            text-align: center;
            width: 5rem;
          }

          md-switch,
          md-outlined-button {
            margin: 0.5rem;
          }

          mat-form-field:has(input) {
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
    }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class XEncryptionComponent implements OnDestroy {
  password = '';
  isPlainText = true;
  shouldEncrypt = true;

  xDialogService: XDialogService = inject(XDialogService);

  @ViewChild('encryptedText') encryptedText!: ElementRef<MdOutlinedTextField>;
  @ViewChild('plainText') plainText!: ElementRef<MdOutlinedTextField>;

  @ViewChild('shouldEncryptToggle') shouldEncryptToggle!: ElementRef;
  @ViewChild('isPlainTextToggle') isPlainTextToggle!: ElementRef;

  @ViewChild('dropZone') dropZone!: ElementRef;
  @ViewChild('link') link!: ElementRef;
  @ViewChild('fileInput') fileInput!: ElementRef;

  @ViewChild('copyEncryptedTextButton') copyEncryptedTextButton!: ElementRef;
  @ViewChild('copyPlainTextButton') copyPlainTextButton!: ElementRef;
  @ViewChild('decryptButton') decryptButton!: ElementRef;
  @ViewChild('encryptButton') encryptButton!: ElementRef;
  @ViewChild('passwordInput') passwordInput!: ElementRef;

  worker?: Worker;
  workerEventListener?: any;
  workerErrorListener?: any;

  constructor() {
    if (typeof Worker !== 'undefined') {
      this.worker = new Worker(
        new URL('./x-encryption.worker', import.meta.url),
      );

      this.workerErrorListener = async (event: MessageEvent) => {
        let phrase = 'Operation';
        let error = JSON.stringify(event);
        let title = 'Encryption';

        if (event.data.error !== null) {
          error = event.data.error;

          if (event.data.intent === 'encrypt-text') {
            phrase = 'Text encryption';
          }

          if (event.data.intent === 'decrypt-text') {
            phrase = 'Text decryption';
            title = 'Decryption';
          }

          if (event.data.intent === 'encrypt-file') {
            phrase = 'File encryption';
          }

          if (event.data.intent === 'decrypt-file') {
            phrase = 'File decryption';
            title = 'Decryption';
          }
        }

        this.xDialogService.openDialog(`${phrase} has errored. ${error}`, {
          title,
          modal: true,
        });

        return;
      };

      this.workerEventListener = async (event: MessageEvent) => {
        if (event.data.error !== null) {
          this.workerErrorListener(event);

          return;
        }

        if (event.data.result === null) {
          event.data.error =
            'The result is null. Was everything input correctly? Could the password be incorrect?';

          this.workerErrorListener(event);

          return;
        }

        // const progress = globalThis.document.querySelector(
        //   '.progress-container > .progress',
        // ) as HTMLElement;

        // if (progress) {
        //   progress.style.display = 'none';
        // }

        let filename;

        switch (event?.data.intent) {
          case 'encrypt-text':
            this.encryptedText.nativeElement.value = event.data.result;
            this.xDialogService.openDialog('Text encryption has completed.', {
              title: 'Encryption',
              modal: true,
            });
            this.copyEncryptedTextButton.nativeElement.disabled = false;
            break;
          case 'decrypt-text':
            this.plainText.nativeElement.value = new TextDecoder().decode(
              event.data.result,
            );
            this.xDialogService.openDialog('Text decryption has completed.', {
              title: 'Decryption',
              modal: true,
            });
            this.copyPlainTextButton.nativeElement.disabled = false;
            break;
          case 'encrypt-file':
            filename = `${event.data.result.filename}.enc`;

            this.link.nativeElement.innerText = filename;
            this.link.nativeElement.setAttribute('download', filename);
            this.link.nativeElement.href = URL.createObjectURL(
              new Blob([await event.data.result.buffer]),
            );

            this.xDialogService.openDialog('File encryption has completed.', {
              title: 'Encryption',
              modal: true,
            });
            break;
          case 'decrypt-file':
            filename = event.data.result.filename.replace(/.enc$/, '');

            this.link.nativeElement.innerText = filename;
            this.link.nativeElement.setAttribute('download', filename);
            this.link.nativeElement.href = URL.createObjectURL(
              new Blob([await event.data.result.buffer]),
            );

            this.xDialogService.openDialog('File decryption has completed.', {
              title: 'Decryption',
              modal: true,
            });
            break;

          default:
            break;
        }
      };
    } else {
      // web workers are not supported in this environment
    }

    this.worker?.addEventListener('error', this.workerErrorListener);
    this.worker?.addEventListener('messageerror', this.workerErrorListener);
    this.worker?.addEventListener('message', this.workerEventListener);
  }

  ngOnDestroy(): void {
    this.worker?.removeEventListener('error', this.workerErrorListener);
    this.worker?.removeEventListener('messageerror', this.workerErrorListener);
    this.worker?.removeEventListener('message', this.workerEventListener);
  }

  clickDropZoneHandler() {
    this.fileInput.nativeElement.click();
  }

  dragLeaveHandler(event: DragEvent) {
    this.dropZone.nativeElement.style.outline =
      'var(--x-shell-default-outline)';
    this.dropZone.nativeElement.style.backgroundColor = 'unset';
  }

  dragEnterHandler(event: DragEvent) {
    this.dropZone.nativeElement.style.outline = '5px solid red';
    this.dropZone.nativeElement.style.backgroundColor = '#ccc';
  }

  dragOverHandler(event: DragEvent) {
    // prevent the browser from processing the file natively
    event.preventDefault();
  }

  handleFileInputChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    if (files) {
      this.handleFile(files[0]);
    }
  }

  mouseupHandler() {
    this.dropZone.nativeElement.style.outline =
      'var(--x-shell-default-outline)';
    this.dropZone.nativeElement.style.backgroundColor = 'unset';
  }

  mousedownHandler() {
    this.dropZone.nativeElement.style.outline = '5px solid red';
  }

  async dropHandler(event: DragEvent) {
    // prevent the browser from processing the file natively
    event.preventDefault();

    this.dropZone.nativeElement.style.outline =
      'var(--x-shell-default-outline)';
    this.dropZone.nativeElement.style.backgroundColor = 'unset';

    if (event.dataTransfer?.items) {
      // use DataTransferItemList interface to access the file
      const item = event.dataTransfer.items[0];
      if (item.kind === 'file') {
        const file = item.getAsFile();

        if (file) {
          await this.handleFile(file);
        }
      }
    } else {
      // use DataTransfer interface to access the file
      const file = event.dataTransfer?.files[0];

      if (file) {
        await this.handleFile(file);
      }
    }
  }

  handleEncryptedTextInput(event: Event) {
    this.copyEncryptedTextButton.nativeElement.disabled =
      (event.currentTarget as MdOutlinedTextField).value === '';
  }

  handlePlainTextInput(event: Event) {
    this.copyPlainTextButton.nativeElement.disabled =
      (event.currentTarget as MdOutlinedTextField).value === '';
  }

  async handleCopyTextButtonClick(
    inputElement: ElementRef<MdOutlinedTextField>,
  ) {
    await navigator.clipboard.writeText(inputElement.nativeElement.value);
  }

  async handleFile(file: File) {
    if (this.worker) {
      // const progress = globalThis.document.querySelector(
      //   '.progress-container > .progress',
      // ) as HTMLElement;

      // if (progress) {
      //   progress.style.display = 'block';
      // }

      if (this.shouldEncrypt) {
        this.worker.postMessage({
          payload: file,
          password: this.password,
          intent: 'encrypt-file',
        });

        this.xDialogService.openDialog('File encryption has started.', {
          title: 'Encryption',
          modal: true,
          indeterminateProgress: true,
        });

        return;
      }

      this.worker.postMessage({
        payload: file,
        password: this.password,
        intent: 'decrypt-file',
      });

      this.xDialogService.openDialog('File decryption has started.', {
        title: 'Decryption',
        modal: true,
        indeterminateProgress: true,
      });
    } else {
      this.xDialogService.openDialog(
        'Unsupported scenario; the web worker cannot be found.',
        { modal: true },
      );
    }
  }

  handleMatIsPlainTextSlideToggle(event: Event) {
    this.isPlainText = !this.isPlainText;
    (this.isPlainTextToggle as any).selected = this.isPlainText;

    if (!this.isPlainText) {
      this.decryptButton.nativeElement.disabled = true;
      this.encryptButton.nativeElement.disabled = true;

      return;
    }

    requestAnimationFrame(() => {
      if (this.decryptButton) {
        this.decryptButton.nativeElement.disabled = this.shouldEncrypt;
      }

      if (this.encryptButton) {
        this.encryptButton.nativeElement.disabled = !this.shouldEncrypt;
      }
    });
  }

  handleMatShouldEncryptSlideToggle(event: Event) {
    this.shouldEncrypt = !this.shouldEncrypt;

    (this.shouldEncryptToggle as any).selected = this.shouldEncrypt;

    if (this.isPlainText) {
      this.decryptButton.nativeElement.disabled = this.shouldEncrypt;
      this.encryptButton.nativeElement.disabled = !this.shouldEncrypt;
    }
  }

  passwordChange(event: Event) {
    this.password = (event.target as HTMLInputElement).value;
  }

  async handleEncryptButton(e: any) {
    e.preventDefault();

    const plainText = this.plainText.nativeElement.value;

    if (this.worker) {
      // const progress = globalThis.document.querySelector(
      //   '.progress-container > .progress',
      // ) as HTMLElement;

      // if (progress) {
      //   progress.style.display = 'block';
      // }

      this.worker.postMessage({
        payload: new Blob([plainText]),
        password: this.password,
        intent: 'encrypt-text',
      });

      this.xDialogService.openDialog('Text encryption has started.', {
        title: 'Encryption',
        modal: true,
        indeterminateProgress: true,
      });
    } else {
      this.xDialogService.openDialog(
        'Unsupported scenario; the web worker cannot be found.',
        { modal: true },
      );
    }
  }

  async handleDecryptButton(e: any) {
    e.preventDefault();

    const encryptedText = this.encryptedText.nativeElement.value;

    if (this.worker) {
      // const progress = globalThis.document.querySelector(
      //   '.progress-container > .progress',
      // ) as HTMLElement;

      // if (progress) {
      //   progress.style.display = 'block';
      // }

      this.worker.postMessage({
        payload: encryptedText,
        password: this.password,
        intent: 'decrypt-text',
      });

      this.xDialogService.openDialog('Text decryption has started.', {
        title: 'Decryption',
        modal: true,
        indeterminateProgress: true,
      });
    } else {
      this.xDialogService.openDialog(
        'Unsupported scenario; the web worker cannot be found.',
        { modal: true },
      );
    }
  }
}
