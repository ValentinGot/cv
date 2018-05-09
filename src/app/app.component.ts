import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';
import { Observable } from 'rxjs';

import { UserService } from './shared/user/user.service';
import { User } from './shared/user/user.model';
import { SkillService } from './skills/skill.service';
import { Skill } from './skills/skill.model';
import { TrainingService } from './trainings/training.service';
import { Training } from './trainings/training.model';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  user$: Observable<User>;
  mainSkills$: Observable<Skill[]>;
  secondarySkills$: Observable<Skill[]>;
  trainings$: Observable<Training[]>;

  constructor (
    private userService: UserService,
    private skillService: SkillService,
    private trainingService: TrainingService,
    private sanitizer: DomSanitizer,
    private iconRegistry: MatIconRegistry
  ) { }

  ngOnInit () {
    this.user$ = this.userService.fetch();
    this.mainSkills$ = this.skillService.fetch();
    this.secondarySkills$ = this.skillService.fetchSecondary();
    this.trainings$ = this.trainingService.fetch();

    this.registerSkillIcons();
  }

  private registerSkillIcons () {
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
