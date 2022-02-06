import { ComponentFixture, TestBed } from '@angular/core/testing';
import { snapshotChanges } from '@angular/fire/compat/database';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBar, MatSnackBarModule, MatSnackBarRef } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Skill } from '../core/models/skill.model';
import { LanguageService } from '../core/services/language.service';
import { LocalStorage } from '../core/services/local-storage.service';
import { PersonalInformationService } from '../core/services/personal-information.service';
import { SkillService } from '../core/services/skill.service';
import { LoadingSnackBarComponent } from '../shared/loading-snack-bar/loading-snack-bar.component';
import { AngularFireTestingModule } from '../test/angular-fire-module.spec';
import { MatIconModuleOverride } from '../test/mat-icon-module.spec';
import { NgxSerializerTestingModule } from '../test/ngx-serializer-module.spec';
import { TranslateTestingModule } from '../test/transloco-module.spec';
import { HomeComponent } from './home.component';
import { HomeComponentPage } from './home.component.page';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SkillComponent } from './skills/skill/skill.component';
import { SkillsComponent } from './skills/skills.component';
import { TitleComponent } from './title/title.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let page: HomeComponentPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateTestingModule,
        AngularFireTestingModule,
        NgxSerializerTestingModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        MatSnackBarModule,
        MatIconModule
      ],
      providers: [
        PersonalInformationService,
        SkillService,
        LanguageService,
        LocalStorage
      ],
      declarations: [
        HomeComponent,
        LoadingSnackBarComponent,
        PersonalInformationComponent,
        SkillsComponent,
        SkillComponent,
        TitleComponent
      ]
    })
      .overrideModule(MatIconModule, MatIconModuleOverride)
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    page = new HomeComponentPage(fixture);
  });

  describe('INIT', () => {

    it(`should show the list of skills if there is at least one skill`, () => {
      component.skills = [
        new Skill()
      ];
      fixture.detectChanges();

      expect(page.skills).toBeTruthy();
    });

    it(`should not show the list of skills if there is no skills`, () => {
      component.skills = null;
      fixture.detectChanges();

      expect(page.skills).toBeFalsy();
    });

  });

  describe('#showLoadingSnackBar', () => {
    let snackBar: MatSnackBar;

    beforeEach(() => {
      snackBar = fixture.debugElement.injector.get(MatSnackBar);
      spyOn(snackBar, 'openFromComponent');
    });

    it(`should show the loading snack bar if there is not one already displayed`, () => {
      (component as any).snackBarRef = null;
      (component as any).showLoadingSnackBar();

      expect(snackBar.openFromComponent).toHaveBeenCalled();
    });

    it(`should not show the loading snack bar if there is already one displayed`, () => {
      (component as any).snackBarRef = {} as MatSnackBarRef<LoadingSnackBarComponent>;
      (component as any).showLoadingSnackBar();

      expect(snackBar.openFromComponent).not.toHaveBeenCalled();
    });

  });

  describe('#hideLoadingSnackBar', () => {

    it(`should dismiss the loading snack bar if there is one displayed`, () => {
      (component as any).snackBarRef = { dismiss: () => {} } as MatSnackBarRef<LoadingSnackBarComponent>;
      const snackBarRefDismissSpy = spyOn((component as any).snackBarRef, 'dismiss');
      (component as any).hideLoadingSnackBar();

      expect(snackBarRefDismissSpy).toHaveBeenCalled();
      expect((component as any).snackBarRef).toBeNull();
    });

    it(`should not try to dismiss the loading snack bar if there is none displayed`, () => {
      (component as any).snackBarRef = undefined;
      (component as any).hideLoadingSnackBar();

      expect((component as any).snackBarRef).toBeUndefined();
    });

  });

});
