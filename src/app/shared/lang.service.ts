import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { SharedModule } from './shared.module';

@Injectable({
  providedIn: SharedModule
})
export class LangService {
  private static LANG_KEY = 'lang';

  public langObserver: BehaviorSubject<string> = new BehaviorSubject<string>('fr');

  public setLang (lang: string): void {
    localStorage.setItem(LangService.LANG_KEY, lang);

    this.langObserver.next(lang);
  }

}
