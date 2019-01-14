import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonConvert } from 'json2typescript';

import { Skill } from './skill.model';
import { environment } from '../../../environments/environment';
import { HomeServiceModule } from '../service.module';

@Injectable({
  providedIn: HomeServiceModule
})
export class SkillService {
  public static RESOURCE = 'skills.json';

  constructor (
    private http: HttpClient
  ) { }

  fetch (): Observable<Skill[]> {
    return this.http.get(
      `${environment.baseUrl}/${SkillService.RESOURCE}?orderBy="lang"&equalTo="fr"` // Skills should be the same no matter the language
    ).pipe(
      map((res) => res[Object.keys(res)[0]].skills),
      map((skills) => (new JsonConvert()).deserialize(skills, Skill))
    );
  }

}
