import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { MatIconModule, MatTooltipModule } from '@angular/material';
import { TranslateCompiler, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateMessageFormatCompiler } from 'ngx-translate-messageformat-compiler';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TitleComponent } from './title/title.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingComponent } from './trainings/training/training.component';
import { GithubCornerComponent } from './github-corner/github-corner.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory (http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'valentin-got-cv' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    TransferHttpCacheModule,
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      },
      compiler: {
        provide: TranslateCompiler,
        useClass: TranslateMessageFormatCompiler
      }
    }),
    MatIconModule,
    MatTooltipModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    PersonalInfoComponent,
    TitleComponent,
    SkillsComponent,
    SkillComponent,
    TrainingsComponent,
    TrainingComponent,
    GithubCornerComponent,
    LanguageSelectorComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
