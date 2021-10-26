import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule } from '@ngneat/transloco';
import { HomeComponent } from './home.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    MatIconModule
  ],
  declarations: [
    HomeComponent,
    PersonalInformationComponent
  ]
})
export class HomeModule { }
