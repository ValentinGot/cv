import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { SkillComponent } from './skill.component';
import { Skill } from '../skill.model';

describe ('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule,
        MatTooltipModule
      ],
      declarations: [ SkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent(SkillComponent);
    component = fixture.componentInstance;
  });

  it (`should throw an error if the 'skill' input isn't present`, () => {
    expect(() => fixture.detectChanges()).toThrow(new Error(`'skill' input is required`));
  });

  it (`should throw an error if the 'skill' input isn't of type Skill`, () => {
    component.skill = {} as Skill;

    expect(() => fixture.detectChanges()).toThrow(new TypeError(`'skill' input should be of type Skill`));
  });

  it ('should show the user info', () => {
    const skill = new Skill();
    skill.icon = 'tech:javascript';
    skill.name = 'JavaScript';
    skill.level = 9.5;
    skill.main = true;
    component.skill = skill;
    fixture.detectChanges();

    // -----------------------------------

    const iconEl = fixture.debugElement.query(By.css('.mat-icon')).nativeElement;

    expect(iconEl.getAttribute('ng-reflect-svg-icon')).toEqual('tech:javascript');

    // -----------------------------------

    const nameEl = fixture.debugElement.query(By.css('[data-info="name"]')).nativeElement;

    expect(nameEl.textContent).toEqual('JavaScript');

    // -----------------------------------

    const levelEl = fixture.debugElement.query(By.css('[data-info="level"] > span')).nativeElement;

    expect(levelEl.style.width).toEqual('95%');
  });

});
