import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'valentin-got-cv' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
