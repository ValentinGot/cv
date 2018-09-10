import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonConvert } from 'json2typescript';

import { Training } from './training.model';
import { LangService } from '../../core/lang/lang.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private static RESOURCE = 'trainings.json';

  constructor (
    private http: HttpClient,
    private langService: LangService
  ) { }

  fetch (): Observable<Training[]> {
    return this.http.get(
      `${environment.baseUrl}/${TrainingService.RESOURCE}?orderBy="lang"&equalTo="${this.langService.getActiveLang()}"`
    ).pipe(
      map((res) => res[Object.keys(res)[0]].trainings),
      map((trainings) => (new JsonConvert()).deserialize(trainings, Training))
    );
  }

}
