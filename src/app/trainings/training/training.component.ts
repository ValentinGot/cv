import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Training } from '../training.model';

@Component({
  selector: 'cv-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingComponent {

  @Input()
  training: Training;

}
