import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { CoreServiceModule } from '../core-service.module';
import { Lang } from '../models/lang.interface';
import { LocalStorage } from './local-storage.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class LanguageService {
  public static LANG_KEY = 'lang';

  private langObserver: Subject<string> = new Subject<string>();

  constructor(
    private translocoService: TranslocoService,
    private localStorage: LocalStorage
  ) { }

  setActiveLang(lang: string): void {
    this.localStorage.set(LanguageService.LANG_KEY, lang);
    this.translocoService.setActiveLang(lang);

    this.langObserver.next(lang);
  }

  getAllLanguages(): Lang[] {
    return [
      new Lang({ lang: 'fr', flag: 'flag:fr' }),
      new Lang({ lang: 'en', flag: 'flag:gb' })
    ];
  }

  get langChange(): Observable<string> {
    return this.langObserver.pipe(
      startWith(this.activeLang)
    );
  }

  get activeLang(): string {
    return this.localStorage.get(LanguageService.LANG_KEY) || this.translocoService.getDefaultLang();
  }

}
