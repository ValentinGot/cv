import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { MatIconModule } from '@angular/material';

// import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'valentin-got-cv' }),
    // ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    TransferHttpCacheModule,
    NoopAnimationsModule,
    MatIconModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    TitleComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
