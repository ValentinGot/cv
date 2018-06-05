import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { SharedModule } from '../shared.module';
import { Lang } from './lang.model';

@Injectable({
  providedIn: SharedModule
})
export class LangService {
  private static LANG_KEY = 'lang';
  private static DEFAULT_LANG = 'fr';

  private langObserver: Subject<string> = new Subject<string>();

  public get langChange (): Observable<string> {
    return this.langObserver.pipe(
      startWith(this.getActiveLang())
    );
  }

  public setLang (lang: string): void {
    localStorage.setItem(LangService.LANG_KEY, lang);

    this.langObserver.next(lang);
  }

  public getActiveLang (): string {
    return localStorage.getItem(LangService.LANG_KEY) || LangService.DEFAULT_LANG;
  }

  public fetch (): Lang[] {
    return [
      { flag: 'flag:fr', lang: 'fr' },
      { flag: 'flag:gb', lang: 'en' },
    ];
  }

}
