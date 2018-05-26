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
      this.createTraining(2009, 'BAC S'),
      this.createTraining(2011, 'IUT', 'Réseaux et Télécommunication'),
      this.createTraining(2014, 'ESIPE MLV', 'Informatique et Réseaux')
    ]);
  }

  private createTraining (year: number, name: string, subTitle?: string): Training {
    const training = new Training();

    training.year = year;
    training.name = name;
    if (subTitle) {
      training.subTitle = subTitle;
    }

    return training;
  }

}
