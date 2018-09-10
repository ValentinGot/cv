import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry, MatSnackBar, MatSnackBarRef } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { forkJoin, Observable } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

import { UserService } from './shared/user/user.service';
import { User } from './shared/user/user.model';
import { SkillService } from './skills/skill.service';
import { Skill } from './skills/skill.model';
import { ExperienceService } from './experiences/experience.service';
import { Experience } from './experiences/experience.model';
import { TrainingService } from './trainings/training.service';
import { Training } from './trainings/training.model';
import { LangService } from './shared/lang/lang.service';
import { LoadingSnackBarComponent } from './shared/loading-snackbar/loading-snackbar.component';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  user: User;
  skills: Skill[];
  experiences: Experience[];
  trainings: Training[];
  snackBarRef: MatSnackBarRef<LoadingSnackBarComponent>;

  constructor (
    private userService: UserService,
    private skillService: SkillService,
    private experienceService: ExperienceService,
    private trainingService: TrainingService,
    private langService: LangService,
    private translate: TranslateService,
    private sanitizer: DomSanitizer,
    private snackBar: MatSnackBar,
    private iconRegistry: MatIconRegistry,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit () {
    this.langService.langChange.pipe(
      tap(() => this.snackBarRef = this.snackBar.openFromComponent(LoadingSnackBarComponent, {
        horizontalPosition: 'start'
      })),
      switchMap(() => this.userService.fetch()),
      mergeMap((user: User) => {
        this.user = user;
        this.cd.markForCheck();

        return forkJoin(
          this.skillService.fetch(),
          this.experienceService.fetch(),
          this.trainingService.fetch()
        );
      })
    ).subscribe(([ skills, experiences, trainings ]: [ Skill[], Experience[], Training[] ]) => {
      this.skills = skills;
      this.experiences = experiences;
      this.trainings = trainings;

      this.snackBarRef.dismiss();
      this.cd.markForCheck();
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
    this.registerIcons('flag', [
      'fr',
      'gb'
    ]);
  }

  private registerSocialIcons (): void {
    this.registerIcons('social', [
      'flickr',
      'github',
      'linkedin',
      'twitter'
    ]);
  }

  private registerTechIcons (): void {
    this.registerIcons('tech', [
      'javascript',
      'typescript',
      'css',
      'angular',
      'nodejs',
      'responsive',
      'ux',
      'git',
      'sass',
      'vuejs',
      'mongodb',
      'sails',
      'webstorm',
      'webrtc',
      'svn',
      'clea',
      'pwa',
      'd3js',
      'sublimetext',
      'less',
      'zend',
      'php',
      'webpack'
    ]);
  }

  private registerIcons (namespace: string, icons: string[]): void {
    for (const icon of icons) {
      this.iconRegistry.addSvgIconInNamespace(
        namespace,
        icon,
        this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/${namespace}/${icon}.svg`)
      );
    }
  }

}
