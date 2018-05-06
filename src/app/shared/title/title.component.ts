import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'cv-title',
  template: `<h3><ng-content></ng-content></h3>`,
  styleUrls: ['./title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleComponent { }
