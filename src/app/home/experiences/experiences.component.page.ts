import { DebugElement } from '@angular/core';
import { ComponentDriver } from '../../component-driver';
import { ExperiencesComponent } from './experiences.component';

export class ExperiencesComponentPage extends ComponentDriver<ExperiencesComponent> {

  getTechnologyUrl(experienceIndex: number, technologyIndex: number): DebugElement {
    return this.queryByTestId(`technologyUrl-${experienceIndex}-${technologyIndex}`);
  }

  getTechnologyNoUrl(experienceIndex: number, technologyIndex: number): DebugElement {
    return this.queryByTestId(`technologyNoUrl-${experienceIndex}-${technologyIndex}`);
  }

}
