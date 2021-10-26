import { ChangeDetectionStrategy, Component, HostBinding, Input } from '@angular/core';
import { PersonalInformation } from '../../core/models/personal-information.model';

@Component({
  selector: 'cv-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInformationComponent {

  @Input()
  @HostBinding('class.ghost')
  loading: boolean;

  @Input()
  personalInformation: PersonalInformation;

}
