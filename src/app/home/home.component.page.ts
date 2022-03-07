import { DebugElement } from '@angular/core';
import { ComponentDriver } from '../component-driver';
import { HomeComponent } from './home.component';

export class HomeComponentPage extends ComponentDriver<HomeComponent> {

  get skills(): DebugElement {
    return this.queryByTestId('skills');
  }

  get experiences(): DebugElement {
    return this.queryByTestId('experiences');
  }

  get career(): DebugElement {
    return this.queryByTestId('career');
  }

}
