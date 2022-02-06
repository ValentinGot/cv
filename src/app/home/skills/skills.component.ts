import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../core/models/skill.model';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent {

  @Input()
  skills: Skill[];

  get mainSkills(): Skill[] {
    return this.skills.filter((skill) => skill.main);
  }

  get secondarySkills(): Skill[] {
    return this.skills.filter((skill) => !skill.main);
  }

}
