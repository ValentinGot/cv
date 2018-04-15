import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { UserService } from './user/user.service';
import { TitleComponent } from './title/title.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    PersonalInfoComponent,
    TitleComponent
  ],
  providers: [
    UserService
  ],
  exports: [
    PersonalInfoComponent,
    TitleComponent
  ]
})
export class SharedModule { }
