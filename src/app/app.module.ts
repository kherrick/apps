import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell/shell.component';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'apps' }),
    AppRoutingModule,
    ShellComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: environment.APP_BASE_HREF },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
