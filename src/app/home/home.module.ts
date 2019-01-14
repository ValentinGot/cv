import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule, MatSnackBarModule, MatTooltipModule } from '@angular/material';

import { HomeServiceModule } from './service.module';
import { SharedModule } from '../shared/shared.module';
import { HomeRoute } from './home.routing';
import { HomeComponent } from './home.component';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { TitleComponent } from './title/title.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillComponent } from './skills/skill/skill.component';
import { TrainingsComponent } from './trainings/trainings.component';
import { TrainingComponent } from './trainings/training/training.component';
import { GithubCornerComponent } from './github-corner/github-corner.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ExperienceComponent } from './experiences/experience/experience.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild(),
    MatIconModule,
    MatTooltipModule,
    MatSnackBarModule,
    SharedModule,
    HomeServiceModule,
    HomeRoute
  ],
  declarations: [
    HomeComponent,
    PersonalInfoComponent,
    TitleComponent,
    SkillsComponent,
    SkillComponent,
    TrainingsComponent,
    TrainingComponent,
    GithubCornerComponent,
    LanguageSelectorComponent,
    ExperiencesComponent,
    ExperienceComponent
  ]
})
export class HomeModule { }
