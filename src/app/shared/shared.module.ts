import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    PersonalInfoComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    PersonalInfoComponent
  ]
})
export class SharedModule { }
