import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
