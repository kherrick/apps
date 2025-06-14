import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverSideRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
