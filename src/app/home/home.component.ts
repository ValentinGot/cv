import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { forkJoin, Subject } from 'rxjs';
import { switchMap, takeUntil, tap } from 'rxjs/operators';
import { Career } from '../core/models/career.model';
import { Experience } from '../core/models/experience.model';
import { PersonalInformation } from '../core/models/personal-information.model';
import { Skill } from '../core/models/skill.model';
import { CareerService } from '../core/services/career.service';
import { ExperienceService } from '../core/services/experience.service';
import { LanguageService } from '../core/services/language.service';
import { PersonalInformationService } from '../core/services/personal-information.service';
import { SkillService } from '../core/services/skill.service';
import { LoadingSnackBarComponent } from '../shared/loading-snack-bar/loading-snack-bar.component';

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit, OnDestroy {
  personalInformationLoading = true;
  personalInformation: PersonalInformation;
  skills: Skill[];
  experiences: Experience[];
  career: Career[];

  private snackBarRef: MatSnackBarRef<LoadingSnackBarComponent>;
  private readonly onDestroy$: Subject<void> = new Subject<void>();

  constructor(
    private readonly personalInformationService: PersonalInformationService,
    private readonly skillService: SkillService,
    private readonly experienceService: ExperienceService,
    private readonly careerService: CareerService,
    private readonly languageService: LanguageService,
    private readonly snackBar: MatSnackBar,
    private readonly cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.showLoadingSnackBar();

    this.languageService.langChange.pipe(
      tap(() => {
        this.personalInformationLoading = true;
        this.cd.detectChanges();
      }),
      switchMap(() => this.personalInformationService.get()),
      tap((personalInformation: PersonalInformation) => {
        this.personalInformation = personalInformation;
        this.personalInformationLoading = false;
        this.showLoadingSnackBar();
        this.cd.detectChanges();
      }),
      // Load the whole CV after we display the personal information
      switchMap(() => {
        // Use forkJoin to wait for all results. It's cleaner visually than having the results appearing one by one.
        return forkJoin([
          this.skillService.getAll(),
          this.experienceService.getAll(),
          this.careerService.getAll()
        ]);
      }),
      takeUntil(this.onDestroy$)
    ).subscribe(([ skills, experiences, career ]: [ Skill[], Experience[], Career[] ]) => {
      this.skills = skills;
      this.experiences = experiences;
      this.career = career;

      this.hideLoadingSnackBar();
      this.cd.detectChanges();
    });
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

  private showLoadingSnackBar() {
    if (!this.snackBarRef) {
      this.snackBarRef = this.snackBar.openFromComponent(LoadingSnackBarComponent, {
        horizontalPosition: 'start'
      });
    }
  }

  private hideLoadingSnackBar() {
    if (!!this.snackBarRef) {
      this.snackBarRef.dismiss();
      this.snackBarRef = null;
    }
  }

}
