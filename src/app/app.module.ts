import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';

// import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'valentin-got-cv' }),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    TransferHttpCacheModule,
    NoopAnimationsModule,
    SharedModule
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
