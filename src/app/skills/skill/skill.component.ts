import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Skill } from '../skill.model';
import { User } from '../../shared/user/user.model';

@Component({
  selector: 'cv-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillComponent implements OnInit {

  @Input()
  skill: Skill;

  ngOnInit () {
    if (!this.skill) {
      throw new Error(`'skill' input is required`);
    }

    if (!(this.skill instanceof Skill)) {
      throw new TypeError(`'skill' input should be of type Skill`);
    }
  }

}
