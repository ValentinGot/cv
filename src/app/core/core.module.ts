import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild()
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class CoreModule { }
