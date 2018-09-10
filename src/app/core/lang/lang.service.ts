import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { Lang } from './lang.model';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class LangService {
  public static LANG_KEY = 'lang';
  public static DEFAULT_LANG = 'fr';

  private langObserver: Subject<string> = new Subject<string>();

  constructor (
    private translate: TranslateService
  ) { }

  public get langChange (): Observable<string> {
    return this.langObserver.pipe(
      startWith(this.getActiveLang())
    );
  }

  public setLang (lang: string): void {
    localStorage.setItem(LangService.LANG_KEY, lang);
    this.translate.use(lang);

    this.langObserver.next(lang);
  }

  public getActiveLang (): string {
    return localStorage.getItem(LangService.LANG_KEY) || LangService.DEFAULT_LANG;
  }

  public fetch (): Lang[] {
    return [
      { flag: 'flag:fr', lang: 'fr', i18nKey: 'lang.fr' },
      { flag: 'flag:gb', lang: 'en', i18nKey: 'lang.en' }
    ];
  }

}
