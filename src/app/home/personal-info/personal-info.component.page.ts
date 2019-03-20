import { DebugElement } from '@angular/core';

import { ComponentDriver } from '../../component-driver';
import { PersonalInfoComponent } from './personal-info.component';

export class PersonalInfoComponentPage extends ComponentDriver<PersonalInfoComponent> {

  get name (): DebugElement {
    return this.queryByTestId('name');
  }

  get job (): DebugElement {
    return this.queryByTestId('job');
  }

  get age (): DebugElement {
    return this.queryByTestId('age');
  }

  get location (): DebugElement {
    return this.queryByTestId('location');
  }

  get email (): DebugElement {
    return this.queryByTestId('email');
  }

  get socialsContainer (): DebugElement {
    return this.queryByTestId('socials');
  }

  get socials (): DebugElement[] {
    return this.queryAllByTestId('social');
  }

}
