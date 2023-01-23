import { Location } from '@angular/common';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

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
    path: 'karl-herrick',
    loadComponent: () =>
      import('./pages/karl-herrick/karl-herrick.component').then(
        (x) => x.KarlHerrickComponent
      ),
  },
  {
    path: 'calculator',
    loadComponent: () =>
      import('./pages/calculator/calculator.component').then(
        (x) => x.CalculatorComponent
      ),
  },
  {
    path: 'pwgen',
    loadComponent: () =>
      import('./pages/pwgen/pwgen.component').then(
        (x) => x.PwgenComponent
      ),
  },
  {
    path: 'shell',
    loadComponent: () =>
      import('./shell/shell/shell.component').then((x) => x.ShellComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'disabled',
    })
  ],
  exports: [RouterModule],
})
export class AppRoutingServerModule {
  // allow custom routes to be fully rendered server side - note the absence
  // of "/shell"
  constructor(private router: Router, private loc: Location ) {
    const path = this.loc.path();

    const validPaths = [
      "",
      "/about",
      "/herrick-design",
      "/infinitym",
      "/karl-herrick",
      "/calculator",
      "/pwgen",
    ]

    if (validPaths.includes(path)) {
      this.router.navigate([path])
    }
  }
}
