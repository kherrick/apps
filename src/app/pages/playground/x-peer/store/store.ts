import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

type Chat = string;
type Chats = Chat[];
type PeerState = {
  canAnnounce: boolean;
  canCopy: boolean;
  canConnect: boolean;
  chats: Chats;
  dataConnectionIsConnected: boolean;
  hasRemoteStream: boolean;
  myId: string;
  peerId: string;
  peerUrl: string;
};

const initialState: PeerState = {
  canAnnounce: false,
  canCopy: false,
  canConnect: false,
  chats: [],
  dataConnectionIsConnected: false,
  hasRemoteStream: false,
  myId: '',
  peerId: '',
  peerUrl: '',
};

export const PeerStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods((store) => ({
    updateCanAnnounce(canAnnounce: boolean): void {
      patchState(store, (state) => ({
        ...state,
        canAnnounce,
      }));
    },
    updateCanConnect(canConnect: boolean): void {
      patchState(store, (state) => ({
        ...state,
        canConnect,
      }));
    },
    updateChats(chat: Chat): void {
      patchState(store, (state) => ({
        ...state,
        chats: [...state.chats, chat],
      }));
    },
    updateDataConnectionIsConnected(dataConnectionIsConnected: boolean): void {
      patchState(store, (state) => ({
        ...state,
        dataConnectionIsConnected,
      }));
    },
    updateHasRemoteStream(hasRemoteStream: boolean): void {
      patchState(store, (state) => ({
        ...state,
        hasRemoteStream,
      }));
    },
    updateMyId(myId: string): void {
      patchState(store, (state) => ({
        ...state,
        myId,
      }));
    },
    updatePeerId(peerId: string): void {
      patchState(store, (state) => ({
        ...state,
        peerId,
      }));
    },
    updatePeerUrl(peerUrl: string): void {
      patchState(store, (state) => ({
        ...state,
        canCopy: peerUrl !== '',
        peerUrl,
      }));
    },
  })),
);
