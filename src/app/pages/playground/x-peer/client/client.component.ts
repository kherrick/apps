import { isPlatformBrowser } from '@angular/common';

import {
  ChangeDetectorRef,
  Component,
  DOCUMENT,
  Inject,
  inject,
  OnDestroy,
  output,
  PLATFORM_ID,
  ViewChild,
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

import { DataConnection, Peer, PeerError } from 'peerjs';

import { XDialogService } from '../../../../shell/x-dialog/x-dialog.service';
import { PeerStore } from '../store/store';

import { initChatOutputObserver } from '../utils/misc';
import {
  buildImageContainer,
  buildVideoContainer,
  getObjectUrl,
  getPeerClient,
  getSha256,
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
      --actions-button-margin: 0.5rem;
      --actions-height: calc(
        calc(
          var(--mat-fab-extended-container-height)
          * 2
        )
        + calc(
          var(--actions-button-margin)
          * 4
        )
      );

      --mat-fab-touch-target-display: none;
      --mat-icon-button-touch-target-display: none;

      --peer-message-me: #e5e5ea;
      --peer-message-me-color: #000;
      --peer-message-author: var(--peer-message-me);
      --peer-message-author-color: var(--peer-message-me-color);

      align-items: center;
      display: flex;
      flex-direction: column;

      .video {
        height: var(--video-height);

        video {
          height: 100%;
          object-fit: contain;
          width: 100%;
        }
      }

      .chat-output {
        display: flex;
        flex-direction: column;
        height: var(--chat-output-height);
        overflow: auto;
        width: 100%;

        section {
          margin: 0 1rem;
        }
      }

      // when .chat-output is an adjacent sibling of .video
      .video + .chat-output {
        max-height: calc(
          var(--chat-output-height)
          - var(--video-height)
        );
      }

      // when .chat-output has .actions as an adjacent sibling
      .chat-output:has(+ .actions) {
        height: calc(
          100vh
          - var(--actions-height)
          - var(--mat-toolbar-standard-height)
          - var(--mat-tab-container-height)
          - calc(
            var(--actions-button-margin)
            / 2
          )
        );
      }

      .actions {
        display: flex;
        flex-direction: column;
        height: var(--actions-height);
        justify-content: end;
        width: 100%;

        button {
          margin: var(--actions-button-margin);
        }
      }

      .progress-container {
        display: none;
        margin-bottom: 0.25rem;
        width: calc(100% - 2rem);
      }

      .chat-output + .progress-container {
        display: flex;
      }

      .chat-input {
        align-items: center;
        display: flex;
        flex-direction: row;
        width: calc(100% - 2rem);

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
            (click)="setupPeerClient()"
            [disabled]="!store.canAnnounce()"
            extended
            mat-fab
          >
            <mat-icon>cloud_sync</mat-icon>
            Announce
          </button>
          <button
            (click)="initialize(peer, store, chatOutput)"
            [disabled]="!store.canConnect()"
            extended
            mat-fab
          >
            <mat-icon>cloud_sync</mat-icon>
            Connect
          </button>
        </section>
      }
      <section class="progress-container">
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
              (click)="setupPeerClient()"
              [disabled]="!store.canAnnounce()"
              mat-menu-item
            >
              <mat-icon>cloud_sync</mat-icon>
              Announce
            </button>
            <button
              (click)="initialize(peer, store, chatOutput)"
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
  private cdr = inject(ChangeDetectorRef);

  readonly store = inject(PeerStore);
  readonly fullscreen = output<boolean>();
  readonly xDialogService: XDialogService = inject(XDialogService);

  @ViewChild('chatInput') chatInput!: { nativeElement: HTMLInputElement };
  @ViewChild('chatOutput') chatOutput!: { nativeElement: HTMLElement };
  @ViewChild('sharedVideo') sharedVideo!: { nativeElement: HTMLVideoElement };

  #hasMessages: boolean = false;
  #isBrowser: boolean = false;
  #isSending: boolean = false;
  #platformId: Object = inject(PLATFORM_ID);

  progressMode: ProgressBarMode = 'determinate';
  progressPercentage: number = 0;

  chatOutputObserver!: MutationObserver;
  myDataConnectionIsConnecting: boolean = false;
  myDataConnection?: DataConnection;
  peerDataConnection?: DataConnection;
  peer?: Peer;

  controller = new AbortController();

  isFullscreen(): boolean {
    return !!this.document.fullscreenElement;
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
    this.#isBrowser = isPlatformBrowser(this.#platformId);
    this.xDialogService.registerChangeDetector(this.cdr);

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
    this.chatOutputObserver?.disconnect();
  }

  handleProgressPercentage(e: any) {
    this.progressPercentage =
      (e?.detail?.chunkInfo?.count / e?.detail?.chunkInfo?.total) * 100;

    this.cdr?.markForCheck();
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

  handlePeerDataConnection(data: any) {
    this.#hasMessages = true;

    // handle progress-complete messages from peer
    if (data?.type === 'progress-complete') {
      this.#isSending = false;
      this.progressMode = 'determinate';
      this.progressPercentage = 0;

      this.cdr?.markForCheck();
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

      this.myDataConnection?.send({
        type: 'progress-complete',
        detail: {
          meta: {
            pingType: 'chat',
          },
        },
      });

      setTimeout(() => {
        this.progressPercentage = 0;

        this.cdr?.markForCheck();
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

      this.myDataConnection?.send({
        type: 'progress-complete',
        detail: {
          name: data?.detail?.name,
          size: data?.detail?.size,
          type: data?.detail?.type,
          sha256: data?.detail?.sha256,
          meta: {
            pingType: 'file',
          },
        },
      });

      setTimeout(() => {
        this.progressPercentage = 0;

        this.cdr?.markForCheck();
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
    this.myDataConnection?.send({
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

  // // my connection
  // handlePeerDataConnectionChange(changeEvent: any) {
  //   if (changeEvent.currentTarget.connectionState === 'connecting') {
  //     this.myDataConnectionIsConnecting = true;
  //   }

  //   if (changeEvent.currentTarget.connectionState === 'failed') {
  //   }

  //   if (changeEvent.currentTarget.connectionState === 'disconnected') {
  //     this.store.updateDataConnectionIsConnected(false);
  //   }

  //   if (changeEvent.currentTarget.connectionState === 'connected') {
  //     this.myDataConnectionIsConnecting = false;
  //     this.store.updateDataConnectionIsConnected(true);
  //   }
  // }

  setupMyDataConnection(
    peer: Peer | undefined,
    store: InstanceType<typeof PeerStore>,
    chatOutput: HTMLElement,
  ): DataConnection | undefined {
    this.chatOutputObserver = initChatOutputObserver(chatOutput);
    this.chatOutputObserver.observe(chatOutput, { childList: true });

    return peer?.connect(`${store.peerId()}`);
  }

  setupMyDataConnectionEventHandlers(peerDataconnection: DataConnection) {
    peerDataconnection.on('data', (data) =>
      this.handlePeerDataConnection(data),
    );

    peerDataconnection.on('open', () => {
      console.log('peerDataconnection.on open');
    });

    peerDataconnection.on('error', (error: Error) =>
      console.log('peerDataconnection.on error', error),
    );

    peerDataconnection.on('close', () =>
      console.log('peerDataconnection.on close'),
    );

    peerDataconnection.on('iceStateChanged', (iceStateChanged: string) =>
      console.log('peerDataconnection.on iceStateChanged', iceStateChanged),
    );
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

  initialize(
    peer: Peer | undefined,
    store: InstanceType<typeof PeerStore>,
    chatOutput: HTMLElement,
  ) {
    const myDataConnection = this.setupMyDataConnection(
      peer,
      store,
      chatOutput,
    );

    if (myDataConnection) {
      this.setupMyDataConnectionEventHandlers(myDataConnection);
      this.myDataConnection = myDataConnection;
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

  async setupPeerClient(): Promise<void> {
    this.peer = await getPeerClient(
      this.store.myId(),
      (globalThis as any).PeerJS_App_Server_Config || {},
    );

    if (this.peer) {
      this.peer.on('connection', (peerDataConnection: DataConnection) => {
        this.peerDataConnection = peerDataConnection;

        this.peerDataConnection?.on('data', (data) =>
          this.handlePeerDataConnection(data),
        );

        this.peerDataConnection?.on('open', () => {
          if (
            this.myDataConnection === undefined ||
            this.myDataConnection?.peerConnection === null
          ) {
            this.initialize(
              this.peer,
              this.store,
              this.chatOutput.nativeElement,
            );
          }

          this.peerDataConnection?.send({
            type: 'peer-connected',
            detail: {
              meta: {
                pingType: 'connected',
              },
            },
          });
        });

        this.peerDataConnection.on('close', () => {
          console.error('peerDataConnection on close');
        });
      });

      this.peer.on(
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

          if (errorEvent.type === 'unavailable-id') {
            this.xDialogService.openDialog(
              `The id that you are trying to use is unavailable. Please try using a different peer pair from the "Settings" tab, or refresh and try again.`,
              { modal: true },
            );
          }

          if (errorEvent.type === 'disconnected') {
            this.xDialogService.openDialog(`You have been disconnected.`, {
              modal: true,
            });
          }

          if (errorEvent.type === 'peer-unavailable') {
            this.xDialogService.openDialog(
              `The peer you are trying to connect to is unavailable. Please try to "connect" again. Has your peer used the "announce" button?`,
              { modal: true },
            );

            return;
          }

          this.store.updateCanConnect(true);
          this.store.updateCanAnnounce(true);
        },
      );

      this.peer.on('call', (call) => this.handlePeerCall(call));

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
      const share = this.peer?.call(`${this.store.peerId()}`, stream);

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
      this.myDataConnection?.send({
        type: 'file',
        detail: {
          file,
          type,
          name,
          size,
          sha256: await getSha256(new Uint8Array(buff)),
        },
      });

      this.progressMode = 'indeterminate';

      this.cdr?.markForCheck();
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
      const call = this.peer?.call(`${this.store.peerId()}`, stream);
      // // show stream in some video/canvas element.
      // call?.on('stream', (remoteStream: any) => {});
    }
  }
}
