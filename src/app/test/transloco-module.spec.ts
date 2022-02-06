import { NgModule } from '@angular/core';
import { TranslocoTestingModule } from '@ngneat/transloco';
import { TranslocoMessageFormatModule } from '@ngneat/transloco-messageformat';
import en from '../../assets/i18n/en.json';
import fr from '../../assets/i18n/fr.json';

@NgModule({
  imports: [
    TranslocoTestingModule.forRoot({
      langs: { en, fr },
      translocoConfig: {
        availableLangs: ['en', 'fr'],
        defaultLang: 'fr',
      },
      preloadLangs: true
    }),
    TranslocoMessageFormatModule.forRoot()
  ],
  exports: [
    TranslocoTestingModule,
    TranslocoMessageFormatModule
  ]
})
export class TranslateTestingModule { }
