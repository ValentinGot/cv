import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { CoreServiceModule } from './core-service.module';
import { GithubCornerComponent } from './github-corner/github-corner.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PlatformService } from './services/platform.service';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    MatButtonModule,
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
export class CoreModule {

  // Force instantiation of PlatformService for @OnlyBrowser decorator
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
    private platformService: PlatformService
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Only import it once, in the AppModule');
    }
  }

}
