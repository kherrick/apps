import {
  APP_ID,
  ApplicationConfig,
  isDevMode,
  provideZoneChangeDetection,
} from '@angular/core';

import {
  provideHttpClient,
  withFetch,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideServiceWorker } from '@angular/service-worker';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideHttpClient(withFetch(), withInterceptorsFromDi()),
    provideAnimations(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
    { provide: APP_ID, useValue: 'apps' },
  ],
};
