import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material';
import { By } from '@angular/platform-browser';

import { PersonalInfoComponent } from './personal-info.component';
import { Social, SocialType } from '../../shared/user/social.model';
import { Address } from '../../shared/user/address.model';
import { User } from '../../shared/user/user.model';
import { PersonalInfoComponentPage } from './personal-info.component.page';

describe('PersonalInfoComponent', () => {
  let component: PersonalInfoComponent;
  let fixture: ComponentFixture<PersonalInfoComponent>;
  let page: PersonalInfoComponentPage;
  let user: User;

  beforeEach (async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatIconModule
      ],
      declarations: [ PersonalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach (() => {
    fixture = TestBed.createComponent(PersonalInfoComponent);
    component = fixture.componentInstance;
    page = new PersonalInfoComponentPage(fixture);
  });

  beforeEach (() => {
    user = new User();

    component.user = user;
  });

  fdescribe ('INIT', () => {

    it(`should throw an error if the 'user' input isn't present`, () => {
      component.user = undefined;

      expect(() => fixture.detectChanges()).toThrow(new Error(`'user' input is required`));
    });

    it(`should throw an error if the 'user' input isn't of type User`, () => {
      component.user = {} as User;

      expect(() => fixture.detectChanges()).toThrow(new TypeError(`'user' input should be of type User`));
    });

    it (`should show the user's full name`, () => {
      user.firstName = 'Perceval';
      user.lastName = 'Le Gallois';
      fixture.detectChanges();

      expect(page.name.nativeElement.textContent).toContain('Perceval');
      expect(page.name.nativeElement.textContent).toContain('Le Gallois');
    });

    it (`should show the user's job`, () => {
      user.job = 'Chevalier de la Table Ronde';
      fixture.detectChanges();

      expect(page.job.nativeElement.textContent).toContain('Chevalier de la Table Ronde');
    });

    it (`should show the user's age`, () => {
      user.birthDate = new Date(1982, 4, 12);
      fixture.detectChanges();

      expect(page.age.nativeElement.textContent).toContain('36 ans');
    });

    it (`shouldn't show the user's location if there is no address`, () => {
      fixture.detectChanges();

      expect(page.location).toBeFalsy();
    });

    it (`should show the user's location`, () => {
      user.address = new Address();
      user.address.city = 'Camelot';
      user.address.department = 35;
      fixture.detectChanges();

      expect(page.location).toBeTruthy();
      expect(page.location.nativeElement.textContent).toContain(`Camelot`);
      expect(page.location.nativeElement.textContent).toContain(`(35)`);
    });

    it (`should show the user's email`, () => {
      user.email = 'perceval.legallois@camelot.bzh';
      fixture.detectChanges();

      expect(page.email.nativeElement.textContent).toContain(`perceval.legallois@camelot.bzh`);
    });

    it (`shouldn't show the user's socials if there is no socials`, () => {
      fixture.detectChanges();

      expect(page.socialsContainer).toBeFalsy();
    });

    it (`should show the user's socials`, () => {
      const twitter = new Social();
      twitter.type = SocialType.TWITTER;
      twitter.url = 'https://twitter.com/PercevalLeGallois';

      const flickr = new Social();
      flickr.type = SocialType.FLICKR;
      flickr.url = 'https://www.flickr.com/people/123456789@N12/';

      user.socials = [twitter, flickr];
      fixture.detectChanges();

      expect(page.socialsContainer).toBeTruthy();
      expect(page.socials.length).toEqual(2);
      expect(page.socials[0].nativeElement.getAttribute('aria-label')).toEqual('Twitter');
      expect(page.socials[1].nativeElement.getAttribute('aria-label')).toEqual('Flickr');
    });

  });

});
