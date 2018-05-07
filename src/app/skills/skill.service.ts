import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Skill } from './skill.model';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  constructor () { }

  fetch (): Observable<Skill[]> {
    return of(this.getSkills()).pipe(
      map((skills) => skills.filter((skill) => skill.main))
    );
  }

  fetchSecondary (): Observable<Skill[]> {
    return of(this.getSkills()).pipe(
      map((skills) => skills.filter((skill) => !skill.main))
    );
  }

  private getSkills (): Skill[] {
    return [
      this.createSkill('skill:javascript', 'JavaScript', 9, true),
      this.createSkill('skill:typescript', 'TypeScript', 8, true),
      this.createSkill('skill:angular', 'Angular', 9, true),
      this.createSkill('skill:css', 'CSS 3', 8, true),
      this.createSkill('skill:nodejs', 'NodeJS', 8, true),
      this.createSkill('skill:angular', 'AngularJS', 9, false),
      this.createSkill('skill:ux', 'UX / UI', 6, false),
      this.createSkill('skill:responsive', 'Responsive Design', 9, false),
      this.createSkill('skill:git', 'Git', 7, false),
      this.createSkill('skill:sass', 'Sass', 8, false),
      this.createSkill('skill:vuejs', 'VueJS', 6, false),
    ];
  }

  private createSkill (icon: string, name: string, level: number, main: boolean): Skill {
    const skill = new Skill();

    skill.icon = icon;
    skill.name = name;
    skill.level = level;
    skill.main = main;

    return skill;
  }

}
