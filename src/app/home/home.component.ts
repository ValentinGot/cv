import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PersonalInformation } from '../core/models/personal-information.model';
import { Skill } from '../core/models/skill.model';
import { PersonalInformationService } from '../core/services/personal-information.service';
import { SkillService } from '../core/services/skill.service';

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {
  personalInformationLoading = true;
  cvLoading = true;
  personalInformation: PersonalInformation;
  skills: Skill[];

  constructor(
    private readonly personalInformationService: PersonalInformationService,
    private readonly skillService: SkillService,
    private readonly cd: ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.personalInformationService.get().pipe(
      finalize(() => {
        this.personalInformationLoading = false;
        this.cd.detectChanges();
      })
    ).subscribe((personalInformation: PersonalInformation) => {
      this.personalInformation = personalInformation;
      this.cd.detectChanges();
      this.loadCV(); // Load the whole CV after we display the personal information
    });
  }

  private loadCV() {
    this.skillService.getAll().pipe(
      finalize(() => {
        this.cvLoading = false;
        this.cd.detectChanges();
      })
    ).subscribe((skills: Skill[]) => {
      this.skills = skills;

      this.cd.detectChanges();
    });
  }

}
