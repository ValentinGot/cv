import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Skill } from '../../../core/models/skill.model';

@Component({
  selector: 'cv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  host: { // eslint-disable-line
    class: 'cv-skill'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent {
  public OUT_OF = 10;

  @Input()
  skill: Skill;

}
