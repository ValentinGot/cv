import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Experience } from './experience.model';

@Component({
  selector: 'cv-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesComponent {

  @Input()
  experiences: Experience[];

}
