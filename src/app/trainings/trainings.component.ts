import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Training } from './training.model';

@Component({
  selector: 'cv-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingsComponent {

  @Input()
  trainings: Training[];

}
