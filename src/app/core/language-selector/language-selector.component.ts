import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Lang } from '../models/lang.interface';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'cv-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent implements OnInit, OnDestroy {
  public languages: Lang[];
  public activeLang: string;

  private onDestroy$ = new Subject();

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageService.langChange.pipe(
      takeUntil(this.onDestroy$)
    ).subscribe((lang) => {
      this.activeLang = lang;
    });

    this.languages = this.languageService.getAllLanguages();
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  onSelectLanguage(lang: Lang) {
    this.languageService.setActiveLang(lang.lang);
  }

}
