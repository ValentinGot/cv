import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatTooltipModule } from '@angular/material';
import { By } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageSelectorComponent } from './language-selector.component';
import { CoreModule } from '../../core/core.module';
import { LangService } from '../../core/lang/lang.service';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        MatIconModule,
        MatTooltipModule,
        CoreModule
      ],
      declarations: [ LanguageSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
  });

  it (`shouldn't show the active language flag`, () => {
    const langService: LangService = TestBed.get(LangService);
    langService.setLang('fr');
    fixture.detectChanges();

    const flagEls = fixture.debugElement.queryAll(By.css('[data-info="flag"]'));

    expect(flagEls.find((flagEl) => flagEl.attributes['ng-reflect-message'] === 'fr')).toBeUndefined();
  });

});
