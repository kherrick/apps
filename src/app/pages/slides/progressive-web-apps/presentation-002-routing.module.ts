import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./slide.000.component').then((x) => x.Slide000Component),
  },
  {
    path: '1',
    loadComponent: () =>
      import('./slide.001.component').then((x) => x.Slide001Component),
  },
  {
    path: '2',
    loadComponent: () =>
      import('./slide.002.component').then((x) => x.Slide002Component),
  },
  {
    path: '3',
    loadComponent: () =>
      import('./slide.003.component').then((x) => x.Slide003Component),
  },
  {
    path: '4',
    loadComponent: () =>
      import('./slide.004.component').then((x) => x.Slide004Component),
  },
  {
    path: '5',
    loadComponent: () =>
      import('./slide.005.component').then((x) => x.Slide005Component),
  },
  {
    path: '6',
    loadComponent: () =>
      import('./slide.006.component').then((x) => x.Slide006Component),
  },
  {
    path: '7',
    loadComponent: () =>
      import('./slide.007.component').then((x) => x.Slide007Component),
  },
  {
    path: '8',
    loadComponent: () =>
      import('./slide.008.component').then((x) => x.Slide008Component),
  },
  {
    path: '9',
    loadComponent: () =>
      import('./slide.009.component').then((x) => x.Slide009Component),
  },
  {
    path: '10',
    loadComponent: () =>
      import('./slide.010.component').then((x) => x.Slide010Component),
  },
  {
    path: '11',
    loadComponent: () =>
      import('./slide.011.component').then((x) => x.Slide011Component),
  },
  {
    path: '12',
    loadComponent: () =>
      import('./slide.012.component').then((x) => x.Slide012Component),
  },
  {
    path: '13',
    loadComponent: () =>
      import('./slide.013.component').then((x) => x.Slide013Component),
  },
  {
    path: '14',
    loadComponent: () =>
      import('./slide.014.component').then((x) => x.Slide014Component),
  },
  {
    path: '15',
    loadComponent: () =>
      import('./slide.015.component').then((x) => x.Slide015Component),
  },
  {
    path: '16',
    loadComponent: () =>
      import('./slide.016.component').then((x) => x.Slide016Component),
  },
  {
    path: '17',
    loadComponent: () =>
      import('./slide.017.component').then((x) => x.Slide017Component),
  },
  {
    path: '18',
    loadComponent: () =>
      import('./slide.018.component').then((x) => x.Slide018Component),
  },
  {
    path: '19',
    loadComponent: () =>
      import('./slide.019.component').then((x) => x.Slide019Component),
  },
  {
    path: '20',
    loadComponent: () =>
      import('./slide.020.component').then((x) => x.Slide020Component),
  },
  {
    path: '20',
    loadComponent: () =>
      import('./slide.020.component').then((x) => x.Slide020Component),
  },
  {
    path: '21',
    loadComponent: () =>
      import('./slide.021.component').then((x) => x.Slide021Component),
  },
  {
    path: '22',
    loadComponent: () =>
      import('./slide.022.component').then((x) => x.Slide022Component),
  },
  {
    path: '23',
    loadComponent: () =>
      import('./slide.023.component').then((x) => x.Slide023Component),
  },
  {
    path: '24',
    loadComponent: () =>
      import('./slide.024.component').then((x) => x.Slide024Component),
  },
  {
    path: '25',
    loadComponent: () =>
      import('./slide.025.component').then((x) => x.Slide025Component),
  },
  {
    path: '26',
    loadComponent: () =>
      import('./slide.026.component').then((x) => x.Slide026Component),
  },
  {
    path: '27',
    loadComponent: () =>
      import('./slide.027.component').then((x) => x.Slide027Component),
  },
  {
    path: '28',
    loadComponent: () =>
      import('./slide.028.component').then((x) => x.Slide028Component),
  },
  {
    path: 'end',
    loadComponent: () =>
      import('./slide.end.component').then((x) => x.SlideEndComponent),
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
export class Presentation002RoutingModule {}
