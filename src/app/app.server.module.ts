import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    AppModule,
    ServerModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.APP_BASE_HREF },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
