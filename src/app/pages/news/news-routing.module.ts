import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { title } from '../../../app/app.routes';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./news.component').then((m) => m.NewsComponent),
    title: `${title} | News`,
  },
  {
    path: 'hacker-news',
    loadChildren: () =>
      import('./hacker-news/news-001-routing.module').then(
        (m) => m.News001RoutingModule,
      ),
    title: `${title} | News | Hacker News`,
  },
  {
    path: 'lobsters',
    loadChildren: () =>
      import('./lobsters/news-003-routing.module').then(
        (m) => m.News003RoutingModule,
      ),
    title: `${title} | News | Lobsters`,
  },
  {
    path: 'slashdot',
    loadChildren: () =>
      import('./slashdot/news-004-routing.module').then(
        (m) => m.News004RoutingModule,
      ),
    title: `${title} | News | Slashdot`,
  },
  {
    path: 'soylent-news',
    loadChildren: () =>
      import('./soylent-news/news-002-routing.module').then(
        (m) => m.News002RoutingModule,
      ),
    title: `${title} | News | Soylent News`,
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
export class NewsRoutingModule {}
