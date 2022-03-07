import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslocoModule } from '@ngneat/transloco';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { TitleComponent } from './title/title.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { CareerComponent } from './career/career.component';

@NgModule({
  imports: [
    CommonModule,
    TranslocoModule,
    MatIconModule,
    MatTooltipModule,
    SharedModule
  ],
  declarations: [
    HomeComponent,
    PersonalInformationComponent,
    SkillsComponent,
    SkillComponent,
    TitleComponent,
    ExperiencesComponent,
    CareerComponent
  ]
})
export class HomeModule { }
