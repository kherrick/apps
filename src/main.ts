import { bootstrapApplication } from '@angular/platform-browser';

import { appConfig } from './app/app.config';

import { XShellComponent } from './app/shell/x-shell/x-shell.component';

bootstrapApplication(XShellComponent, appConfig)
  .catch((err) => console.error(err));
