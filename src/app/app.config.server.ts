import { provideServerRendering } from '@angular/ssr';
import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideRouter, withDisabledInitialNavigation } from '@angular/router';

import { serverSideRoutes } from './app-routing.server.module';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [
    provideRouter(serverSideRoutes, withDisabledInitialNavigation()),
    provideServerRendering(),
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
