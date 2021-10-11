import { DebugElement } from '@angular/core';
import { ComponentDriver } from '../../component-driver';
import { LanguageSelectorComponent } from './language-selector.component';

export class LanguageSelectorComponentPage extends ComponentDriver<LanguageSelectorComponent> {

  getFlag(lang: string): DebugElement {
    return this.queryByTestId(`flag-${lang}`);
  }

}
