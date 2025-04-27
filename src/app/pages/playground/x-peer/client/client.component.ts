import {
  Component,
  Inject,
  inject,
  OnDestroy,
  ViewChild,
  DOCUMENT,
  output,
} from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';

import {
  MatProgressBarModule,
  ProgressBarMode,
} from '@angular/material/progress-bar';

import md5 from 'md5';
import { DataConnection, Peer, PeerError } from 'peerjs';

import { PeerStore } from '../store/store';

import {
  buildImageContainer,
  buildVideoContainer,
  getObjectUrl,
  getPeerClient,
  isOtherFileType,
  isValidImageType,
  isValidVideoType,
  prepareChatMessage,
  SafeHtml,
} from '../utils/utils';

@Component({
  selector: 'x-peer-client',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatProgressBarModule,
    SafeHtml,
  ],
  styles: `
    [x-peer-client-container] {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 0 1rem 0 1rem;

      --mat-fab-touch-target-display: none;
      --mat-icon-button-touch-target-display: none;

      --peer-message-author: #333;
      --peer-message-me: var(--mdc-fab-container-color, #787579);

      --peer-message-peer: var(
        --mdc-filled-text-field-focus-label-text-color,
        #a4c639
      );

      .video {
        height: 33%;
        margin: 1rem 0 1rem 0;

        video {
          height: 100%;
          width: 100%;
        }
      }

      .chat-output {
        flex: auto;
        overflow: auto;
      }

      .actions {
        display: flex;
        flex-direction: column;
        justify-content: end;
        margin: 1rem 0 1rem 0;

        button {
          margin: 0.5rem;
        }
      }

      .progressContainer {
        display: flex;
        margin-bottom: 0.25rem;
      }

      .chat-input {
        align-items: center;
        display: flex;
        flex-direction: row;

        .text-container {
          margin-right: 1rem;
          width: 100%;
        }

        .chat-input-actions {
          align-items: center;
          display: flex;
          justify-content: center;
          margin: 0 0.5rem 1.25rem 0;

          mat-icon {
            margin: 0;
          }

          .mdc-button__label {
            display: none;
          }
        }
      }
    }
  `,
  template: `
    <div x-peer-client-container>
      @if (store.hasRemoteStream()) {
        <section class="video">
          <video #sharedVideo autoplay controls muted playsinline></video>
        </section>
      }
      <section #chatOutput class="chat-output">
        @for (chat of store.chats(); track chat) {
          <section [innerHTML]="chat | safeHtml"></section>
        }
      </section>
      @if (!store.dataConnectionIsConnected()) {
        <section class="actions">
          <button
            (click)="handleAnnounce()"
            [disabled]="!store.canAnnounce()"
            extended
            mat-fab
          >
            <mat-icon>cloud_sync</mat-icon>
            Announce
          </button>
          <button
            (click)="handleConnect()"
            [disabled]="!store.canConnect()"
            extended
            mat-fab
          >
            <mat-icon>cloud_sync</mat-icon>
            Connect
          </button>
        </section>
      }
      <section class="progressContainer">
        <mat-progress-bar
          [mode]="progressMode"
          value="{{ progressPercentage }}"
        ></mat-progress-bar>
      </section>
      @if (store.dataConnectionIsConnected()) {
        <section class="chat-input">
          <mat-form-field class="text-container">
            <mat-label>Chat</mat-label>
            <input
              (keydown)="handleChatInput($event)"
              #chatInput
              id="chat-input"
              matInput
              type="text"
            />
          </mat-form-field>
          <button
            (click)="handleChatInput($event)"
            class="chat-input-actions"
            mat-fab
          >
            <mat-icon>sms</mat-icon>
          </button>
          <button
            class="chat-input-actions"
            mat-fab
            [matMenuTriggerFor]="menu"
            aria-label="Actions"
          >
            <mat-icon>more_vert</mat-icon>
          </button>
          <mat-menu #menu="matMenu">
            <button
              (click)="handleAnnounce()"
              [disabled]="!store.canAnnounce()"
              mat-menu-item
            >
              <mat-icon>cloud_sync</mat-icon>
              Announce
            </button>
            <button
              (click)="handleConnect()"
              [disabled]="!store.canConnect()"
              mat-menu-item
            >
              <mat-icon>cloud_sync</mat-icon>
              Connect
            </button>
            <button (click)="handleFullscreen()" mat-menu-item>
              <mat-icon>{{
                isFullscreen() ? 'fullscreen_exit' : 'fullscreen'
              }}</mat-icon>
              <span>Fullscreen</span>
            </button>
            <button (click)="handleScreenShare()" extended mat-menu-item>
              <mat-icon>screen_share</mat-icon>
              Share Screen
            </button>
            <button (click)="handleVideoCall()" extended mat-menu-item>
              <mat-icon>videocam</mat-icon>
              Video Call
            </button>
            <button (click)="handleSendButton($event)" extended mat-menu-item>
              <mat-icon>send</mat-icon>
              <label for="file-upload" id="file-upload-label">Send File</label>
              <input
                (change)="handleInputButton($event)"
                id="file-upload"
                hidden
                type="file"
              />
            </button>
          </mat-menu>
        </section>
      }
    </div>
  `,
})
export class XPeerClientComponent implements OnDestroy {
  readonly store = inject(PeerStore);
  readonly fullscreen = output<boolean>();

  @ViewChild('chatInput') chatInput!: { nativeElement: HTMLInputElement };
  @ViewChild('chatOutput') chatOutput!: { nativeElement: HTMLElement };
  @ViewChild('sharedVideo') sharedVideo!: { nativeElement: HTMLVideoElement };

  #dataConnection?: DataConnection;
  #peerDataConnection?: DataConnection;
  #peer?: Peer;

  #dataConnectionIsConnecting: boolean = false;
  #hasMessages: boolean = false;
  #isSending: boolean = false;

  progressMode: ProgressBarMode = 'determinate';
  progressPercentage: number = 0;

  controller = new AbortController();

  isFullscreen(): boolean {
    return !!this.document.fullscreenElement;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    if (globalThis.addEventListener) {
      globalThis?.addEventListener(
        'peerjs-dc-handle-chunk',
        (event) => this.handleProgressPercentage(event),
        { signal: this.controller.signal },
      );
    }

    this.store.updateCanConnect(true);
    this.store.updateCanAnnounce(true);
  }

  ngOnDestroy(): void {
    this.controller.abort();
  }

  handleProgressPercentage(e: any) {
    this.progressPercentage =
      (e?.detail?.chunkInfo?.count / e?.detail?.chunkInfo?.total) * 100;
  }

  handlePeerCall(call: any) {
    // // ...answer the call with another A/V stream
    // call.answer(stream);
    call.answer();

    call.on('stream', (remoteStream: any) => {
      // show stream in some video/canvas element.
      this.store.updateHasRemoteStream(true);
      requestAnimationFrame(() => {
        if (this.sharedVideo?.nativeElement) {
          this.sharedVideo.nativeElement.srcObject = remoteStream;
        }
      });
    });
  }

  handleDataConnection(data: any) {
    this.#hasMessages = true;

    // handle progress-complete messages from peer
    if (data?.type === 'progress-complete') {
      this.#isSending = false;
      this.progressMode = 'determinate';
      this.progressPercentage = 0;
    }

    if (data?.type === 'peer-connected') {
      this.store.updateDataConnectionIsConnected(true);
      this.store.updateCanConnect(false);
    }

    // handle chat messages from peer
    if (data?.type === 'chat') {
      this.store.updateChats(
        prepareChatMessage(this.document, 'peer', data?.detail?.text),
      );

      this.#dataConnection?.send({
        type: 'progress-complete',
        detail: {
          meta: {
            pingType: 'chat',
          },
        },
      });

      setTimeout(() => {
        this.progressPercentage = 0;
      }, 200);
    }

    // handle file transfers
    if (data?.type === 'file') {
      if (isValidImageType(data.detail.type)) {
        this.store.updateChats(
          prepareChatMessage(
            this.document,
            'peer',
            data.detail.name,
            getObjectUrl(data.detail.file, data.detail.type),
            buildImageContainer(
              data.detail.file,
              data.detail.type,
              data.detail.name,
              this.document,
            ),
          ),
        );
      }

      if (isValidVideoType(data.detail.type)) {
        this.store.updateChats(
          prepareChatMessage(
            this.document,
            'peer',
            data.detail.name,
            getObjectUrl(data.detail.file, data.detail.type),
            buildVideoContainer(
              data.detail.file,
              data.detail.type,
              this.document,
            ),
          ),
        );
      }

      if (isOtherFileType(data.detail.type)) {
        this.store.updateChats(
          prepareChatMessage(
            this.document,
            'peer',
            data.detail.name,
            getObjectUrl(data.detail.file, data.detail.type),
          ),
        );
      }

      this.#dataConnection?.send({
        type: 'progress-complete',
        detail: {
          name: data?.detail?.name,
          size: data?.detail?.size,
          type: data?.detail?.type,
          md5: data?.detail?.md5,
          meta: {
            pingType: 'file',
          },
        },
      });

      setTimeout(() => {
        this.progressPercentage = 0;
      }, 200);
    }
  }

  handleChatInput(e: KeyboardEvent | MouseEvent) {
    if (e?.type === 'keydown' && (e as KeyboardEvent)?.key !== 'Enter') {
      return;
    }

    if (this.chatInput.nativeElement.value === '') {
      return;
    }

    this.#isSending = true;
    this.#hasMessages = true;
    this.#dataConnection?.send({
      type: 'chat',
      detail: { text: this.chatInput.nativeElement.value },
    });

    this.store.updateChats(
      prepareChatMessage(
        this.document,
        'me',
        this.chatInput.nativeElement.value,
      ),
    );

    this.chatInput.nativeElement.value = '';
  }

  // my connection
  handleDataConnectionChange(changeEvent: any) {
    if (changeEvent.currentTarget.connectionState === 'connecting') {
      this.#dataConnectionIsConnecting = true;
    }

    if (changeEvent.currentTarget.connectionState === 'failed') {
    }

    if (changeEvent.currentTarget.connectionState === 'disconnected') {
      this.store.updateDataConnectionIsConnected(false);
    }

    if (changeEvent.currentTarget.connectionState === 'connected') {
      this.#dataConnectionIsConnecting = false;
      this.store.updateDataConnectionIsConnected(true);
    }
  }

  handleConnect() {
    this.#dataConnection = this.#peer?.connect(`${this.store.peerId()}`);

    if (this.#dataConnection) {
      this.#dataConnection.on('data', (data) =>
        this.handleDataConnection(data),
      );
      this.#dataConnection.on('open', () =>
        console.log('this.#dataConnection.on open'),
      );
      this.#dataConnection.on('error', (error: any) =>
        console.log('this.#dataConnection.on error', error),
      );
      this.#dataConnection.on('close', () =>
        console.log('this.#dataConnection.on close'),
      );
      this.#dataConnection.on('iceStateChanged', (iceStateChanged: string) =>
        console.log('this.#dataConnection.on iceStateChanged', iceStateChanged),
      );
    }
  }

  handleFullscreen(): void {
    if (this.isFullscreen()) {
      this.fullscreen.emit(false);

      return;
    }

    this.fullscreen.emit(true);
  }

  handleSendButton(e: any) {
    if (e.target.id !== 'file-upload' && e.target.id !== 'file-upload-label') {
      e.currentTarget.querySelector('input').click();
    }
  }

  async handleInputButton(e: any) {
    // only handling one file dropped at a time for now
    const file = e.currentTarget.files[0];
    const { type, name, size } = file;

    if (isValidImageType(type)) {
      this.store.updateChats(
        prepareChatMessage(
          this.document,
          'me',
          name,
          getObjectUrl(file, type),
          buildImageContainer(file, type, name, this.document),
        ),
      );
    }

    if (isValidVideoType(type)) {
      this.store.updateChats(
        prepareChatMessage(
          this.document,
          'me',
          name,
          getObjectUrl(file, type),
          buildVideoContainer(file, type, this.document),
        ),
      );
    }

    if (isOtherFileType(type)) {
      this.store.updateChats(
        prepareChatMessage(this.document, 'me', name, getObjectUrl(file, type)),
      );
    }

    await this.handleSendFile(file, type, name, size);
  }

  async handleAnnounce(): Promise<void> {
    this.#peer = await getPeerClient(
      this.store.myId(),
      (globalThis as any).PeerJS_App_Server_Config || {},
    );

    if (this.#peer) {
      this.#peer.on('connection', (peerDataConnection: DataConnection) => {
        this.#peerDataConnection = peerDataConnection;

        this.#peerDataConnection?.on('data', (data) =>
          this.handleDataConnection(data),
        );

        this.#peerDataConnection?.on('open', () => {
          if (
            this.#dataConnection === undefined ||
            this.#dataConnection?.peerConnection === null
          ) {
            this.handleConnect();
          }

          this.#peerDataConnection?.send({
            type: 'peer-connected',
            detail: {
              meta: {
                pingType: 'connected',
              },
            },
          });
        });

        this.#peerDataConnection.on('close', () => {
          console.error('peerDataConnection on close');
        });
      });

      this.#peer.on(
        'error',
        (
          errorEvent: PeerError<
            | 'disconnected'
            | 'browser-incompatible'
            | 'invalid-id'
            | 'invalid-key'
            | 'network'
            | 'peer-unavailable'
            | 'ssl-unavailable'
            | 'server-error'
            | 'socket-error'
            | 'socket-closed'
            | 'unavailable-id'
            | 'webrtc'
          >,
        ) => {
          console.error(
            'error',
            errorEvent.cause,
            errorEvent.message,
            errorEvent.name,
            errorEvent.type,
          );

          // if (errorEvent.type === 'unavailable-id') {
          // }

          // if (errorEvent.type === 'disconnected') {
          // }

          this.store.updateCanConnect(true);
          this.store.updateCanAnnounce(true);
        },
      );

      this.#peer.on('call', (call) => this.handlePeerCall(call));

      this.store.updateCanConnect(true);
      this.store.updateCanAnnounce(false);
    }
  }

  async handleScreenShare() {
    let stream = null;

    // https://developer.mozilla.org/en-US/docs/Web/API/MediaTrackConstraints
    const mediaConstraints = {
      video: {
        cursor: 'always',
      },
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100,
      },
    };

    try {
      stream = await navigator.mediaDevices.getDisplayMedia(
        mediaConstraints as any,
      );
    } catch (error) {
      console.error(error);
    }

    if (stream !== null) {
      const share = this.#peer?.call(`${this.store.peerId()}`, stream);

      // // show stream in some video/canvas element.
      // share?.on('stream', (remoteStream: any) => {});
    }
  }

  async handleSendFile(
    file: File | undefined,
    type: string,
    name: string,
    size: string,
  ) {
    const buff = await file?.arrayBuffer();

    if (buff) {
      this.#isSending = true;
      this.#dataConnection?.send({
        type: 'file',
        detail: {
          file,
          type,
          name,
          size,
          md5: md5(new Uint8Array(buff)),
        },
      });

      this.progressMode = 'indeterminate';
    }
  }

  async handleVideoCall() {
    let stream = null;
    const mediaConstraints = { video: true, audio: true };
    try {
      stream = await navigator.mediaDevices.getUserMedia(mediaConstraints);
    } catch (err) {
      console.error(err);
    }

    if (stream !== null) {
      const call = this.#peer?.call(`${this.store.peerId()}`, stream);
      // // show stream in some video/canvas element.
      // call?.on('stream', (remoteStream: any) => {});
    }
  }
}
