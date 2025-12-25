import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { title } from './../../../app/app.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./playground.component').then((m) => m.PlaygroundComponent),
    title: `${title} | Playground`,
  },
  {
    path: 'certificates',
    loadComponent: () =>
      import('./x-certificate/x-certificate.component').then((x) => x.XCertificateComponent),
    title: `${title} | Playground | Certificates`,
  },
  {
    path: 'sprite-garden',
    loadComponent: () =>
      import('./x-sprite-garden/x-sprite-garden.component').then((x) => x.XSpriteGardenComponent),
    title: `${title} | Playground | SpriteGarden`,
  },
  {
    path: 'block-garden',
    loadComponent: () =>
      import('./x-block-garden/x-block-garden.component').then((x) => x.XBlockGardenComponent),
    title: `${title} | Playground | Block Garden`,
  },
  {
    path: 'encryption',
    loadComponent: () =>
      import('./x-encryption/x-encryption.component').then((x) => x.XEncryptionComponent),
    title: `${title} | Playground | Encryption`,
  },
  {
    path: 'peer',
    loadComponent: () => import('./x-peer/x-peer.component').then((x) => x.XPeerComponent),
    title: `${title} | Playground | WebRTC`,
  },
  {
    path: 'background-removal',
    loadComponent: () =>
      import('./x-background-removal/x-background-removal').then((x) => x.XBackgroundRemoval),
    title: `${title} | Playground | Background Removal`,
  },
  {
    path: 'canvas-image-manipulation',
    loadComponent: () =>
      import('./x-canvas-image-manipulation/x-canvas-image-manipulation').then(
        (x) => x.XCanvasImageManipulation,
      ),
    title: `${title} | Playground | Canvas Image Manipulation`,
  },
  {
    path: 'signature-detection',
    loadComponent: () =>
      import('./x-signature-detection/x-signature-detection').then((x) => x.XSignatureDetection),
    title: `${title} | Playground | Signature Detection`,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaygroundRoutingModule {}
