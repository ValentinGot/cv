import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { UserService } from './shared/user/user.service';
import { User } from './shared/user/user.model';

@Component({
  selector: 'cv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor (
    private userService: UserService
  ) { }

  ngOnInit () {
    this.user$ = this.userService.fetch();
  }

}
