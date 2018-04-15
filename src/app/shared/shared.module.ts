import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TitleComponent } from './title/title.component';
import { UserService } from './user/user.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TitleComponent
  providers: [
    UserService
  ],
  ]
})
export class SharedModule { }
