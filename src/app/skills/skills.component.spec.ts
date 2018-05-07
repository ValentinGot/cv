import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule, MatTooltipModule } from '@angular/material';

import { SkillsComponent } from './skills.component';
import { SkillComponent } from './skill/skill.component';
import { Skill } from './skill.model';
import { By } from '@angular/platform-browser';

describe ('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatTooltipModule
      ],
      declarations: [
        SkillsComponent,
        SkillComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;
  });

  it ('should split main & secondary skills into their respective containers', () => {
    const mainSkill = new Skill();
    mainSkill.icon = 'skill:javascript';
    mainSkill.name = 'JavaScript';
    mainSkill.level = 9.5;
    mainSkill.main = true;

    const secondarySkill = new Skill();
    secondarySkill.icon = 'skill:ux';
    secondarySkill.name = 'UX / UI';
    secondarySkill.level = 6;
    secondarySkill.main = false;

    component.mainSkills = [ mainSkill ];
    component.secondarySkills = [ secondarySkill ];

    fixture.detectChanges();

    // -----------------------------------

    const mainSkills = fixture.debugElement.queryAll(By.css('[data-repeater="main-skills"]'));

    expect(mainSkills.length).toEqual(1);
    expect(mainSkills[0].nativeElement.textContent).toContain('JavaScript');
    expect(mainSkills[0].nativeElement.textContent).not.toContain('UX / UI');

    // -----------------------------------

    const secondarySkills = fixture.debugElement.queryAll(By.css('[data-repeater="secondary-skills"]'));

    expect(secondarySkills.length).toEqual(1);
    expect(secondarySkills[0].nativeElement.textContent).toContain('UX / UI');
    expect(secondarySkills[0].nativeElement.textContent).not.toContain('JavaScript');
  });

});
