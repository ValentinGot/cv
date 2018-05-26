import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Training } from '../training.model';

@Component({
  selector: 'cv-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TrainingComponent implements OnInit {

  @Input()
  training: Training;

  ngOnInit () {
    if (!this.training) {
      throw new Error(`'training' input is required`);
    }

    if (!(this.training instanceof Training)) {
      throw new TypeError(`'training' input should be of type Training`);
    }
  }

}
