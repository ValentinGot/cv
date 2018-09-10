import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { Experience } from '../experience.model';

@Component({
  selector: 'cv-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperienceComponent implements OnInit {

  @Input()
  experience: Experience;

  ngOnInit () {
    if (!this.experience) {
      throw new Error(`'experience' input is required`);
    }

    if (!(this.experience instanceof Experience)) {
      throw new TypeError(`'experience' input should be of type Experience`);
    }
  }

}
