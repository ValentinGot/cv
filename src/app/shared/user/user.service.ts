import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JsonConvert } from 'json2typescript';

import { SharedModule } from '../shared.module';
import { User } from './user.model';
import { environment } from '../../../environments/environment';
import { LangService } from '../../core/lang/lang.service';

@Injectable({
  providedIn: SharedModule
})
export class UserService {
  public static RESOURCE = 'personal-infos.json';

  constructor (
    private http: HttpClient,
    private langService: LangService
  ) { }

  fetch (): Observable<User> {
    return this.http.get(
      `${environment.baseUrl}/${UserService.RESOURCE}?orderBy="lang"&equalTo="${this.langService.getActiveLang()}"`
    ).pipe(
      map((res) => res[Object.keys(res)[0]]),
      map((user) => (new JsonConvert()).deserializeObject(user, User))
    );
  }

}
