import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { JsonConvert } from 'json2typescript';

import { Skill } from './skill.model';
import { LangService } from '../shared/lang/lang.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  public static RESOURCE = 'skills.json';

  constructor (
    private http: HttpClient,
    private langService: LangService
  ) { }

  fetch (): Observable<Skill[]> {
    return this.http.get(
      `${environment.baseUrl}/${SkillService.RESOURCE}?orderBy="lang"&equalTo="${this.langService.getActiveLang()}"`
    ).pipe(
      map((res) => res[Object.keys(res)[0]].skills),
      map((skills) => (new JsonConvert()).deserialize(skills, Skill))
    );
  }

}
