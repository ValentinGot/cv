import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'mat-icon',
  template: ''
})
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
