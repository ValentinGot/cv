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
    this.registerTechIcons();
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

  private registerTechIcons (): void {
    this.iconRegistry
      .addSvgIconInNamespace(
        'tech',
        'javascript',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/javascript.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'typescript',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/typescript.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'css',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/css.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'angular',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/angular.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'nodejs',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/nodejs.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'responsive',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/responsive.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'ux',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/ux.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'git',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/git.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'sass',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/sass.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'vuejs',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/vuejs.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'mongodb',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/mongodb.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'sails',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/sails.svg')
      )
      .addSvgIconInNamespace(
        'tech',
        'webstorm',
        this.sanitizer.bypassSecurityTrustResourceUrl('/assets/tech/webstorm.svg')
      );
  }

}
