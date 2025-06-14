import { ApplicationConfig, mergeApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { serverSideRoutes } from './app-routing.server.module';
import { appConfig } from './app.config';

const serverConfig: ApplicationConfig = {
  providers: [provideServerRendering(withRoutes(serverSideRoutes))],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
