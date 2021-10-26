import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { PersonalInformation } from '../core/models/personal-information.model';
import { PersonalInformationService } from '../core/services/personal-information.service';

@Component({
  selector: 'cv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class HomeComponent implements OnInit {
  personalInformationLoading = true;
  personalInformation: PersonalInformation;

  constructor(
    private readonly personalInformationService: PersonalInformationService,
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
    });
  }

}
