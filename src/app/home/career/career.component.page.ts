import { DebugElement } from '@angular/core';
import { ComponentDriver } from '../../component-driver';
import { CareerComponent } from './career.component';

export class CareerComponentPage extends ComponentDriver<CareerComponent> {

  getSubtitle(index: number): DebugElement {
    return this.queryByTestId(`subtitle-${index}`);
  }

}
