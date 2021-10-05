import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { CoreServiceModule } from './core-service.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    CoreServiceModule
  ],
  declarations: [
    NotFoundComponent
  ]
})
export class CoreModule { }
