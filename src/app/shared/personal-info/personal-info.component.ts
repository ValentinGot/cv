import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { User } from '../user/user.model';

@Component({
  selector: 'cv-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoComponent {

  @Input()
  user: User;

}
