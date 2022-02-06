import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Skill } from '../../core/models/skill.model';
import { getTranslocoModule } from '../../test/transloco-module.spec';
import { TitleComponent } from '../title/title.component';
import { SkillsComponent } from './skills.component';

describe('SkillsComponent', () => {
  let component: SkillsComponent;
  let fixture: ComponentFixture<SkillsComponent>;
  const skills: Skill[] = [
    new Skill({ name: 'Angular', level: 9, icon: 'icon', main: true }),
    new Skill({ name: 'JavaScript', level: 9, icon: 'icon', main: true }),
    new Skill({ name: 'Cooking', level: 9, icon: 'icon', main: false }),
    new Skill({ name: 'Kaamelott', level: 9, icon: 'icon', main: false })
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule()
      ],
      declarations: [
        SkillsComponent,
        TitleComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsComponent);
    component = fixture.componentInstance;

    component.skills = skills;
  });

  describe('#mainSkills', () => {

    it(`should retrieve only the list of main skills`, () => {
      expect(component.mainSkills).toEqual([
        new Skill({ name: 'Angular', level: 9, icon: 'icon', main: true }),
        new Skill({ name: 'JavaScript', level: 9, icon: 'icon', main: true })
      ]);
    });

  });

  describe('#secondarySkills', () => {

    it(`should retrieve only the list of secondary skills`, () => {
      expect(component.secondarySkills).toEqual([
        new Skill({ name: 'Cooking', level: 9, icon: 'icon', main: false }),
        new Skill({ name: 'Kaamelott', level: 9, icon: 'icon', main: false })
      ]);
    });

  });

});
