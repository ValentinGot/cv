import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

import { UserService } from './shared/user/user.service';
import { User } from './shared/user/user.model';
import { SkillService } from './skills/skill.service';
import { Skill } from './skills/skill.model';
import { TrainingService } from './trainings/training.service';
import { Training } from './trainings/training.model';
import { LangService } from './shared/lang/lang.service';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  skills$: Observable<Skill[]>;
  trainings$: Observable<Training[]>;

  constructor (
    private userService: UserService,
    private skillService: SkillService,
    private trainingService: TrainingService,
    private langService: LangService,
    private translate: TranslateService,
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) { }

  ngOnInit () {
    this.langService.langChange.subscribe(() => {
      this.user$ = this.userService.fetch();
      this.skills$ = this.skillService.fetch();
      this.trainings$ = this.trainingService.fetch();
    });

    this.i18nConfiguration();
    this.registerLangIcons();
    this.registerSocialIcons();
    this.registerSkillIcons();
  }

  private i18nConfiguration (): void {
    this.translate.setDefaultLang(LangService.DEFAULT_LANG);
    this.translate.use(LangService.DEFAULT_LANG);
  }

  private registerLangIcons (): void {
    this.iconRegistry
      .addSvgIconInNamespace(
        'flag',
        'fr',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/flag/fr.svg')
      )
      .addSvgIconInNamespace(
        'flag',
        'gb',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/flag/gb.svg')
      );
  }

  private registerSocialIcons (): void {
    this.iconRegistry
      .addSvgIconInNamespace(
        'social',
        'flickr',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/social/flickr.svg')
      )
      .addSvgIconInNamespace(
        'social',
        'github',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/social/github.svg')
      )
      .addSvgIconInNamespace(
        'social',
        'linkedin',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/social/linkedin.svg')
      )
      .addSvgIconInNamespace(
        'social',
        'twitter',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/social/twitter.svg')
      );
  }

  private registerSkillIcons (): void {
    this.iconRegistry
      .addSvgIconInNamespace(
        'skill',
        'javascript',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/javascript.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'typescript',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/typescript.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'css',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/css.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'angular',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/angular.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'nodejs',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/nodejs.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'responsive',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/responsive.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'ux',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/ux.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'git',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/git.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'sass',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/sass.svg')
      )
      .addSvgIconInNamespace(
        'skill',
        'vuejs',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/skill/vuejs.svg')
      );
  }

}
