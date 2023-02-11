import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { XRootComponent } from './app/x-root.component';

bootstrapApplication(XRootComponent, appConfig)
  .catch((err) => console.error(err));
