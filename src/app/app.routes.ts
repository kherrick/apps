import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { XShellComponent } from './shell/x-shell/x-shell.component';

export const title = 'Apps';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title,
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news-routing.module').then((m) => m.NewsRoutingModule),
  },
  {
    path: 'feeds',
    loadChildren: () =>
      import('./pages/feeds/feeds-routing.module').then((m) => m.FeedsRoutingModule),
  },
  {
    path: 'playground',
    loadChildren: () =>
      import('./pages/playground/playground-routing.module').then((m) => m.PlaygroundRoutingModule),
  },
  {
    path: 'links',
    loadComponent: () => import('./pages/links/links.component').then((x) => x.LinksComponent),
    title: `${title} | Links`,
  },
  {
    path: 'slides',
    loadChildren: () =>
      import('./pages/slides/slides-routing.module').then((m) => m.SlidesRoutingModule),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((x) => x.AboutComponent),
    title: `${title} | About`,
  },
  {
    path: 'calculator',
    loadComponent: () =>
      import('./pages/playground/x-calculator/x-calculator.component').then(
        (x) => x.XCalculatorComponent,
      ),
    title: `${title} | Playground | Calculator`,
  },
  {
    path: 'pwgen',
    loadComponent: () =>
      import('./pages/playground/x-pwgen-container/x-pwgen-container.component').then(
        (x) => x.XPwgenContainerComponent,
      ),
    title: `${title} | Playground | pwgen`,
  },
  {
    path: 'shell',
    component: XShellComponent,
    title,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
