import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { title } from './../../../app/app.routes';

export const routes: Routes = [
  {
    path: 'rendering-app-shells-and-pwas-oh-my',
    loadChildren: () =>
      import(
        './rendering-app-shells-and-pwas-oh-my/presentation-001-routing.module'
      ).then((m) => m.Presentation001RoutingModule),
    title: `${title} | Slides | Rendering App Shells and PWAs oh my!`,
  },
  {
    path: '**',
    redirectTo: 'rendering-app-shells-and-pwas-oh-my',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SlidesRoutingModule {}
