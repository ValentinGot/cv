import { TestBed } from '@angular/core/testing';
import { TranslocoService } from '@ngneat/transloco';
import { hot } from 'jasmine-marbles';
import { TranslateTestingModule } from '../../test/transloco-module.spec';
import { LanguageService } from './language.service';
import { LocalStorage } from './local-storage.service';

describe('LanguageService', () => {
  let service: LanguageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule
      ],
      providers: [
        LanguageService,
        LocalStorage
      ]
    });
    service = TestBed.inject(LanguageService);
  });

  describe('#setActiveLang', () => {

    it(`should set the selected lang in localStorage, change it withing Transloco and notify that the active lang has changed`, () => {
      const localStorage = TestBed.inject(LocalStorage);
      const translocoService = TestBed.inject(TranslocoService);
      spyOn(localStorage, 'set');
      spyOn(translocoService, 'setActiveLang');
      spyOn((service as any).langObserver, 'next');

      service.setActiveLang('en');
      expect(localStorage.set).toHaveBeenCalledWith(LanguageService.LANG_KEY, 'en');
      expect(translocoService.setActiveLang).toHaveBeenCalledWith('en');
      expect((service as any).langObserver.next).toHaveBeenCalledWith('en');
    });

  });

  describe('#langChange', () => {

    beforeEach(() => {
      const localStorage = TestBed.inject(LocalStorage);
      localStorage.remove(LanguageService.LANG_KEY);
    });

    it(`should start with the default language`, () => {
      const translocoService = TestBed.inject(TranslocoService);
      const expectedObs = hot('a', { a: translocoService.getDefaultLang() });

      expect(service.langChange).toBeObservable(expectedObs);
    });

  });

  describe('#activeLang', () => {

    beforeEach(() => {
      const localStorage = TestBed.inject(LocalStorage);
      localStorage.remove(LanguageService.LANG_KEY);
    });

    it(`should return the stored lang`, () => {
      const localStorage = TestBed.inject(LocalStorage);
      localStorage.set(LanguageService.LANG_KEY, 'es');

      expect(service.activeLang).toEqual('es');
    });

    it(`should return the default lang if their is none stored`, () => {
      const translocoService = TestBed.inject(TranslocoService);

      expect(service.activeLang).toEqual(translocoService.getDefaultLang());
    });

  });

});
