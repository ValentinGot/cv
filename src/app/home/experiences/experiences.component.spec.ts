import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Experience } from '../../core/models/experience.model';
import { Technology } from '../../core/models/technology.model';
import { TranslateTestingModule } from '../../test/transloco-module.spec';
import { TitleComponent } from '../title/title.component';
import { ExperiencesComponent } from './experiences.component';
import { ExperiencesComponentPage } from './experiences.component.page';

describe('ExperiencesComponent', () => {
  let component: ExperiencesComponent;
  let fixture: ComponentFixture<ExperiencesComponent>;
  let page: ExperiencesComponentPage;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateTestingModule,
        MatIconModule,
        MatTooltipModule
      ],
      declarations: [
        ExperiencesComponent,
        TitleComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencesComponent);
    component = fixture.componentInstance;
    page = new ExperiencesComponentPage(fixture);

    component.experiences = [
      new Experience({
        name: 'Roi de Carmélide et Chevalier de la Table Ronde',
        duration: '30 ans',
        company: 'Kaamelott',
        description: `Moi une fois, j'étais tellement raide que j'avais l'impression de me faire attaquer de tous côtés, j'me défendais, j'me défendais... En fait, j'étais dans un pâturage, j'ai tué 76 chèvres !`,
        order: 0,
        technologies: [
          new Technology({
            name: 'Roi de Carmélide',
            icon: '',
            url: 'https://fr.wikipedia.org/wiki/Carm%C3%A9lide'
          }),
          new Technology({
            name: 'Chevalier de la Table Ronde',
            icon: '',
            url: null
          })
        ]
      })
    ];
  });

  it(`should show a link to the technology if there is one`, () => {
    fixture.detectChanges();

    expect(page.getTechnologyUrl(0, 0)).toBeTruthy();
    expect(page.getTechnologyNoUrl(0, 0)).toBeFalsy();
  });

  it(`shouldn't show a link to the technology if there is none`, () => {
    fixture.detectChanges();

    expect(page.getTechnologyNoUrl(0, 1)).toBeTruthy();
    expect(page.getTechnologyUrl(0, 1)).toBeFalsy();
  });

});
