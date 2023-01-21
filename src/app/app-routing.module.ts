import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./pages/about/about.component').then((x) => x.AboutComponent),
  },
  {
    path: 'herrick-design',
    loadComponent: () =>
      import('./pages/herrick-design/herrick-design.component').then(
        (x) => x.HerrickDesignComponent
      ),
  },
  {
    path: 'infinitym',
    loadComponent: () =>
      import('./pages/infinitym/infinitym.component').then(
        (x) => x.InfinitymComponent
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
