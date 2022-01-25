import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { HomeComponent } from './home.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    MatIconModule,
    MatTooltipModule
  ],
  declarations: [
    HomeComponent,
    PersonalInformationComponent,
    SkillsComponent,
    SkillComponent
  ]
})
export class HomeModule { }
