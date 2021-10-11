import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { CoreServiceModule } from './core-service.module';
import { GithubCornerComponent } from './github-corner/github-corner.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    MatIconModule,
    MatTooltipModule,
    CoreServiceModule
  ],
  declarations: [
    LanguageSelectorComponent,
    NotFoundComponent,
    GithubCornerComponent
  ],
  exports: [
    LanguageSelectorComponent,
    GithubCornerComponent
  ]
})
export class CoreModule { }
