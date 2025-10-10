import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes, withAppShell } from '@angular/ssr';

import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

import { XShellComponent } from './shell/x-shell/x-shell.component';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverRoutes), withAppShell(XShellComponent))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
