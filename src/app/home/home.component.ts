import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { forkJoin } from 'rxjs';
import { mergeMap, switchMap, tap } from 'rxjs/operators';

import { LoadingSnackBarComponent } from '../shared/loading-snackbar/loading-snackbar.component';
import { User } from '../shared/user/user.model';
import { Skill } from './skills/skill.model';
import { Experience } from './experiences/experience.model';
import { Training } from './trainings/training.model';
import { UserService } from '../shared/user/user.service';
import { SkillService } from './skills/skill.service';
import { ExperienceService } from './experiences/experience.service';
import { TrainingService } from './trainings/training.service';
import { LangService } from '../core/lang/lang.service';

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  user: User;
  skills: Skill[];
  experiences: Experience[];
  trainings: Training[];
  snackBarRef: MatSnackBarRef<LoadingSnackBarComponent>;

  constructor (
    private titleService: Title,
    private userService: UserService,
    private skillService: SkillService,
    private experienceService: ExperienceService,
    private trainingService: TrainingService,
    private langService: LangService,
    private snackBar: MatSnackBar,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit () {
    this.titleService.setTitle('Valentin Got · Front end engineer / Lead developer · Rennes · CV');

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
  }

}
