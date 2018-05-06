import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { User } from '../user/user.model';

@Component({
  selector: 'cv-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoComponent implements OnInit {

  @Input()
  user: User;

  ngOnInit () {
    if (!this.user) {
      throw new Error(`'user' input is required`);
    }

    if (!(this.user instanceof User)) {
      throw new TypeError(`'user' input should be of type User`);
    }
  }

}
