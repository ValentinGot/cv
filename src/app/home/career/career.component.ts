import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Career } from '../../core/models/career.model';

@Component({
  selector: 'cv-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CareerComponent {

  @Input()
  career: Career[];

}
