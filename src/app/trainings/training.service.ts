import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Training } from './training.model';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  constructor () { }

  fetch (): Observable<Training[]> {
    return of([
      {
        year: 2009,
        name: 'BAC S'
      },
      {
        year: 2011,
        name: 'IUT',
        subTitle: 'Réseaux et Télécommunication'
      },
      {
        year: 2014,
        name: 'ESIPE MLV',
        subTitle: 'Informatique et Réseaux'
      }
    ]);
  }

}
