import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  // tslint:disable-next-line
  selector: 'mat-icon',
  template: ''
})
// tslint:disable-next-line
class MatIconMock {

  @Input()
  svgIcon: any;

  @Input()
  fontSet: any;

  @Input()
  fontIcon: any;

}

export const MatIconModuleOverride = {
  remove: {
    declarations: [ MatIcon ],
    exports: [ MatIcon ]
  },
  add: {
    declarations: [ MatIconMock ],
    exports: [ MatIconMock ]
  }
};
