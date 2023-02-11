import { clientSideRoutes } from './app.routes';

export const serverSideRoutes = [
  ...clientSideRoutes,
  {
    path: 'shell',
    loadComponent: () =>
      import('./shell/x-shell/x-shell.component').then((x) => x.XShellComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
