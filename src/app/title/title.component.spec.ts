import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleComponent } from './title.component';
import { By } from '@angular/platform-browser';

@Component({
  template: `<cv-title data-info="title">Unagi skills</cv-title>`
})
class DummyTitleComponent { }

describe('TitleComponent', () => {
  let component: TitleComponent;
  let fixture: ComponentFixture<DummyTitleComponent>;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TitleComponent,
        DummyTitleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent(DummyTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it ('should render the title', () => {
    const titleEl = fixture.debugElement.query(By.css('[data-info="title"]')).nativeElement;

    expect(titleEl.textContent).toEqual('Unagi skills');
  });

});
