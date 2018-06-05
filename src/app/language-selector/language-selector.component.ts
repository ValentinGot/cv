import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Lang } from '../shared/lang/lang.model';
import { LangService } from '../shared/lang/lang.service';

@Component({
  selector: 'cv-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectorComponent implements OnInit {
  languages: Lang[];
  activeLang: string;

  constructor (
    private langService: LangService
  ) { }

  ngOnInit () {
    this.langService.langChange.subscribe((lang) => {
      this.activeLang = lang;
    });

    this.languages = this.langService.fetch();
  }

  onSelectLanguage (lang: Lang): void {
    this.langService.setLang(lang.lang);
  }

}
