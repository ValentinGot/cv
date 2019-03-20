import { DebugElement } from '@angular/core';
import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class ComponentDriver<T> {

  constructor (
    private fixture: ComponentFixture<T>
  ) { }

  protected queryByTestId (testId: string): DebugElement {
    return this.fixture.debugElement.query(By.css(`[data-testid="${testId}"]`));
  }

  protected queryAllByTestId (testId: string): DebugElement[] {
    return this.fixture.debugElement.queryAll(By.css(`[data-testid="${testId}"]`));
  }

}
