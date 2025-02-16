import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { title } from './../../../app/app.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feeds.component').then((m) => m.FeedsComponent),
    title: `${title} | Feeds`,
  },
  {
    path: 'herrick-design',
    loadComponent: () =>
      import('./herrick-design/herrick-design.component').then(
        (x) => x.HerrickDesignComponent,
      ),
    title: `${title} | Feeds | Herrick Design`,
  },
  {
    path: 'infinitym',
    loadComponent: () =>
      import('./infinitym/infinitym.component').then(
        (x) => x.InfinitymComponent,
      ),
    title: `${title} | Feeds | Infinity M`,
  },
  {
    path: 'karl-herrick',
    loadComponent: () =>
      import('./karl-herrick/karl-herrick.component').then(
        (x) => x.KarlHerrickComponent,
      ),
    title: `${title} | Feeds | Karl Herrick`,
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
export class FeedsRoutingModule {}
