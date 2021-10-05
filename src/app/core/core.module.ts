import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class CoreModule { }
