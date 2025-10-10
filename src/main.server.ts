import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';

import { config } from './app/app.config.server';

import { XShellComponent } from './app/shell/x-shell/x-shell.component';

const bootstrap = (context: BootstrapContext) =>
  bootstrapApplication(XShellComponent, config, context);

export default bootstrap;
