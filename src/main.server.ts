import { bootstrapApplication } from '@angular/platform-browser';
import { XRootComponent } from './app/x-root.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(XRootComponent, config);

export default bootstrap;
