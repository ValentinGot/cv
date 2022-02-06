import { DebugElement } from '@angular/core';
import { ComponentDriver } from '../component-driver';
import { HomeComponent } from './home.component';

export class HomeComponentPage extends ComponentDriver<HomeComponent> {

  get skills(): DebugElement {
    return this.queryByTestId('skills');
  }

}
