import { TestBed, inject } from '@angular/core/testing';

import { LangService } from './lang.service';
import { TranslateModule } from '@ngx-translate/core';

describe('LangService', () => {

  beforeEach (() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot()
      ],
      providers: [ LangService ]
    });
  });

  describe ('#setLang', () => {

    it (`should save the language in local storage`, inject ([ LangService ], (service: LangService) => {
      service.setLang('es');

      expect(localStorage.getItem(LangService.LANG_KEY)).toEqual('es');
    }));

  });

  describe ('#getActiveLang', () => {

    it (`should set 'fr' as default language`, inject ([ LangService ], (service: LangService) => {
      localStorage.removeItem(LangService.LANG_KEY);

      expect(service.getActiveLang()).toEqual('fr');
    }));

    it (`should retrieve the stored language from local storage`, inject ([ LangService ], (service: LangService) => {
      spyOn(localStorage, 'getItem').and.returnValue('en');

      expect(service.getActiveLang()).toEqual('en');
    }));

  });

  describe ('#fetch', () => {

    it (`should retrieve an array of languages`, inject ([ LangService ], (service: LangService) => {
      expect(service.fetch()).toContain({ flag: 'flag:fr', lang: 'fr', i18nKey: 'lang.fr' });
    }));

  });

});

