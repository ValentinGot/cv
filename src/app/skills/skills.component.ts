import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Skill } from './skill.model';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

  @Input()
  mainSkills: Skill[];

  @Input()
  secondarySkills: Skill[];

}
