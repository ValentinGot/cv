import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Skill } from './skill.model';

@Component({
  selector: 'cv-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsComponent implements OnInit {

  @Input()
  skills: Skill[];

  mainSkills: Skill[];
  secondarySkills: Skill[];

  ngOnInit () {
    this.mainSkills = this.skills.filter((skill) => skill.main);
    this.secondarySkills = this.skills.filter((skill) => !skill.main);
  }

}
