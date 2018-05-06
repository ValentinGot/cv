import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material';

import { PersonalInfoComponent } from './personal-info.component';
import { User } from '../user/user.model';
import { Address } from '../user/address.model';
import { SocialType } from '../user/social.model';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [ PersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach (async(() => {
    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
  }));

  it (`should throw an error if the 'user' input isn't of type User`, async(() => {
    expect(() => fixture.detectChanges()).toThrow(new Error(`'user' input is required`));
  }));

  it (`should throw an error if the 'user' input isn't of type User`, async(() => {
    component.user = {} as User;

    expect(() => fixture.detectChanges()).toThrow(new TypeError(`'user' input should be of type User`));
  }));

  it ('should show the user info', async(() => {
    const user = new User();
    user.firstName = 'Perceval';
    user.lastName = 'le Gallois';
    user.job = 'Chevalier de la Table Ronde';
    user.birthDate = new Date(1982, 4, 12);
    user.address = new Address();
    user.address.city = 'Camelot';
    user.address.department = 35;
    user.email = 'perceval.legallois@camelot.bzh';
    user.socials = [
      { type: SocialType.TWITTER, url: 'https://twitter.com/PercevalLeGallois' },
      { type: SocialType.FLICKR, url: 'https://www.flickr.com/people/123456789@N12/' }
    ];
    component.user = user;
    fixture.detectChanges();

    // -----------------------------------

    const nameEl = fixture.debugElement.query(By.css('[data-info="name"]')).nativeElement;

    expect(nameEl.textContent).toContain('Perceval');
    expect(nameEl.textContent).toContain('le Gallois');

    // -----------------------------------

    const jobEl = fixture.debugElement.query(By.css('[data-info="job"]')).nativeElement;

    expect(jobEl.textContent).toContain('Chevalier de la Table Ronde');

    // -----------------------------------

    const ageEl = fixture.debugElement.query(By.css('[data-info="age"]')).nativeElement;

    expect(ageEl.textContent).toContain('35 ans');

    // -----------------------------------

    const locationEl = fixture.debugElement.query(By.css('[data-info="location"]')).nativeElement;

    expect(locationEl.textContent).toContain('Camelot');
    expect(locationEl.textContent).toContain('(35)');

    // -----------------------------------

    const emailEl = fixture.debugElement.query(By.css('[data-info="email"]')).nativeElement;

    expect(emailEl.textContent).toContain('perceval.legallois@camelot.bzh');

    // -----------------------------------

    const socialsEl = fixture.debugElement.query(By.css('[data-info="socials"]'));
    const socialEls = socialsEl.queryAll(By.css('[data-info="social"]'));

    expect(socialEls.length).toEqual(2);
  }));

});
