import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';

import { TrainingComponent } from './training.component';
import { Training } from '../training.model';
import { By } from '@angular/platform-browser';
import { MatIconModuleOverride } from '../../../../test/mat-icon.component';

describe('TrainingComponent', () => {
  let component: TrainingComponent;
  let fixture: ComponentFixture<TrainingComponent>;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [ TrainingComponent ]
    })
    .overrideModule(MatIconModule, MatIconModuleOverride)
    .compileComponents();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent(TrainingComponent);
    component = fixture.componentInstance;
  });

  it (`should throw an error if the 'training' input isn't present`, () => {
    expect(() => fixture.detectChanges()).toThrow(new Error(`'training' input is required`));
  });

  it (`should throw an error if the 'training' input isn't of type Training`, () => {
    component.training = {} as Training;

    expect(() => fixture.detectChanges()).toThrow(new TypeError(`'training' input should be of type Training`));
  });

  it (`should show the training info`, () => {
    const training = new Training();
    training.name = 'Unagi';
    training.subTitle = `Comment masteriser l'art de l'esquive`;
    training.year = 2005;
    component.training = training;
    fixture.detectChanges();

    // -----------------------------------

    const nameEl = fixture.debugElement.query(By.css('[data-info="name"]')).nativeElement;

    expect(nameEl.textContent).toContain('Unagi');

    // -----------------------------------

    const subTitleEl = fixture.debugElement.query(By.css('[data-info="subtitle"]')).nativeElement;

    expect(subTitleEl.textContent).toContain(`Comment masteriser l'art de l'esquive`);

    // -----------------------------------

    const yearEl = fixture.debugElement.query(By.css('[data-info="year"]')).nativeElement;

    expect(yearEl.textContent).toContain('2005');
  });

  it (`shouldn't show the subtitle`, () => {
    const training = new Training();
    training.name = 'Unagi';
    training.year = 2005;
    component.training = training;
    fixture.detectChanges();

    // -----------------------------------

    const subTitleEl = fixture.debugElement.query(By.css('[data-info="subtitle"]'));

    expect(subTitleEl).toBeNull();
  });

});
