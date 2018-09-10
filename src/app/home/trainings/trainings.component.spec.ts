import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';

import { TrainingsComponent } from './trainings.component';
import { TrainingComponent } from './training/training.component';
import { Training } from './training.model';

describe('TrainingsComponent', () => {
  let component: TrainingsComponent;
  let fixture: ComponentFixture<TrainingsComponent>;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [
        TrainingsComponent,
        TrainingComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent(TrainingsComponent);
    component = fixture.componentInstance;
  });

  it (`should generate an empty list of trainings by default`, () => {
    fixture.detectChanges();

    const trainingEls = fixture.debugElement.queryAll(By.css('cv-training'));

    expect(trainingEls.length).toEqual(0);
  });

  it (`should generate a list of trainings`, () => {
    const training = new Training();
    training.name = 'Unagi';
    training.year = 2005;
    component.trainings = [ training ];
    fixture.detectChanges();

    const trainingEls = fixture.debugElement.queryAll(By.css('cv-training'));

    expect(trainingEls.length).toEqual(1);
  });

});
