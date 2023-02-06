import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./slide.000.component').then((x) => x.Slide000Component),
  },
  {
    path: '1',
    loadComponent: () => import('./slide.001.component').then((x) => x.Slide001Component),
  },
  {
    path: 'end',
    loadComponent: () => import('./slide.end.component').then((x) => x.SlideEndComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class SlidesRoutingModule {}
