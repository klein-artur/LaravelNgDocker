import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppVersionComponent } from './app-version/app-version.component';

import { AppInfoService } from './services/app-info.service';

@NgModule({
  declarations: [
    AppComponent,
    AppVersionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AppInfoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
