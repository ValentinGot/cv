import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModuleOverride } from '../../test/mat-icon-module.spec';
import { TranslateTestingModule } from '../../test/transloco-module.spec';
import { LanguageService } from '../services/language.service';
import { LocalStorage } from '../services/local-storage.service';
import { LanguageSelectorComponent } from './language-selector.component';
import { LanguageSelectorComponentPage } from './language-selector.component.page';

describe('LanguageSelectorComponent', () => {
  let component: LanguageSelectorComponent;
  let fixture: ComponentFixture<LanguageSelectorComponent>;
  let page: LanguageSelectorComponentPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule,
        MatIconModule,
        MatTooltipModule
      ],
      providers: [
        LanguageService,
        LocalStorage
      ],
      declarations: [ LanguageSelectorComponent ]
    })
      .overrideModule(MatIconModule, MatIconModuleOverride)
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSelectorComponent);
    component = fixture.componentInstance;
    page = new LanguageSelectorComponentPage(fixture);
  });

  describe('INIT', () => {

    it(`should show all of the flags except for the active language one`, () => {
      const localStorage = fixture.debugElement.injector.get(LocalStorage);
      localStorage.set(LanguageService.LANG_KEY, 'fr');
      fixture.detectChanges();

      expect(page.getFlag('en')).toBeTruthy();
      expect(page.getFlag('fr')).toBeFalsy();
    });

  });

});
