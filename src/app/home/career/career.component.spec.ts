import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Career } from '../../core/models/career.model';
import { TranslateTestingModule } from '../../test/transloco-module.spec';
import { TitleComponent } from '../title/title.component';
import { CareerComponent } from './career.component';
import { CareerComponentPage } from './career.component.page';

describe('CareerComponent', () => {
  let component: CareerComponent;
  let fixture: ComponentFixture<CareerComponent>;
  let page: CareerComponentPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule,
        MatIconModule,
        MatTooltipModule
      ],
      declarations: [
        CareerComponent,
        TitleComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerComponent);
    component = fixture.componentInstance;
    page = new CareerComponentPage(fixture);

    component.career = [
      new Career({
        name: 'Arthur roi de Bretagne',
        subtitle: 'Le sanglier de Cornouaille',
        duration: 'A long time ago'
      }),
      new Career({
        name: 'Milice urbaine',
        subtitle: null,
        duration: 'A very long time ago'
      })
    ];
  });

  describe('INIT', () => {

    it(`should show the subtitle if there is one`, () => {
      fixture.detectChanges();

      expect(page.getSubtitle(0)).toBeTruthy();
    });

    it(`shouldn't show the subtitle if there is none`, () => {
      fixture.detectChanges();

      expect(page.getSubtitle(1)).toBeFalsy();
    });

  });

});
