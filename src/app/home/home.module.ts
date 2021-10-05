import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@ngneat/transloco';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
