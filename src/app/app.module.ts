import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppCommonModule } from './app.common.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppCommonModule, AppRoutingModule,
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.APP_BASE_HREF }],
  bootstrap: [AppComponent],
})
export class AppModule {}
