import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { PersonalInformation } from '../../core/models/personal-information.model';
import { SocialType } from '../../core/models/social-type.enum';
import { getTranslocoModule } from '../../test/transloco-module.spec';
import { PersonalInformationComponent } from './personal-information.component';
import { PersonalInformationComponentPage } from './personal-information.component.page';

describe('PersonalInformationComponent', () => {
  let component: PersonalInformationComponent;
  let fixture: ComponentFixture<PersonalInformationComponent>;
  let page: PersonalInformationComponentPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        MatIconModule
      ],
      declarations: [ PersonalInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalInformationComponent);
    component = fixture.componentInstance;
    page = new PersonalInformationComponentPage(fixture);
  });

  describe('INIT', () => {

    it(`should show the location container if their is an address`, () => {
      component.personalInformation = {
        address: {
          city: 'Rennes',
          department: 35
        }
      } as PersonalInformation;
      fixture.detectChanges();

      expect(page.location).toBeTruthy();
    });

    it(`shouldn't show the location container if their is no address`, () => {
      component.personalInformation = {
        address: null
      } as PersonalInformation;
      fixture.detectChanges();

      expect(page.location).toBeFalsy();
    });

    it(`should show the socials container if their is at least one social link`, () => {
      component.personalInformation = {
        socials: [ { type: SocialType.TWITTER, url: 'https://social.url' } ]
      } as PersonalInformation;
      fixture.detectChanges();

      expect(page.socials).toBeTruthy();
    });

    it(`shouldn't show the socials container if their is no social link`, () => {
      component.personalInformation = {
        socials: []
      } as PersonalInformation;
      fixture.detectChanges();

      expect(page.socials).toBeFalsy();
    });

  });

});
