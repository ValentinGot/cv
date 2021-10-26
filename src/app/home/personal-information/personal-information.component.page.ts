import { DebugElement } from '@angular/core';
import { ComponentDriver } from '../../component-driver';
import { PersonalInformationComponent } from './personal-information.component';

export class PersonalInformationComponentPage extends ComponentDriver<PersonalInformationComponent> {

  get location(): DebugElement {
    return this.queryByTestId('location');
  }

  get socials(): DebugElement {
    return this.queryByTestId('socials');
  }

}
