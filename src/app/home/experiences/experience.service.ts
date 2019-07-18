import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonConvert } from 'json2typescript';

import { LangService } from '../../core/lang/lang.service';
import { environment } from '../../../environments/environment';
import { Experience } from './experience.model';
import { HomeServiceModule } from '../service.module';

@Injectable({
  providedIn: HomeServiceModule
})
export class ExperienceService {
  public static RESOURCE = 'experiences.json';

  constructor (
    private http: HttpClient,
    private langService: LangService
  ) { }

  fetch (): Observable<Experience[]> {
    return this.http.get(
      `${environment.baseUrl}/${ExperienceService.RESOURCE}?orderBy="lang"&equalTo="${this.langService.getActiveLang()}"`
    ).pipe(
      map((res) => res[Object.keys(res)[0]].experiences),
      map((experiences) => experiences.sort(this.sort)),
      map((experiences) => (new JsonConvert()).deserializeArray(experiences, Experience))
    );
  }

  private sort (a: Experience, b: Experience): number {
    if (a.order > b.order) {
      return -1;
    }
    if (a.order < b.order) {
      return 1;
    }

    return 0;
  }

}
