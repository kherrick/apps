import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { environment } from 'src/environments/environment';

import { AppRoutingServerModule } from './app-routing.server.module';
import { AppCommonModule } from './app.common.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppCommonModule, AppRoutingServerModule, ServerModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.APP_BASE_HREF }],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
