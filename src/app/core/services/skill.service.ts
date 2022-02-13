import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgxSerializerService } from '@witty-services/ngx-serializer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CoreServiceModule } from '../core-service.module';
import { Skill, SkillResponse } from '../models/skill.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class SkillService {
  private static COLLECTION = 'skills';

  constructor(
    private readonly languageService: LanguageService,
    private readonly angularFirestore: AngularFirestore,
    private readonly ngxSerializerService: NgxSerializerService
  ) { }

  getAll(): Observable<Skill[]> {
    return this.angularFirestore
      .collection<SkillResponse>(SkillService.COLLECTION, (ref) => ref.where('lang', '==', this.languageService.activeLang))
      .get()
      .pipe(
        map((snapshot) => snapshot.docs[0]),
        filter((resp) => !!resp),
        map((resp) => resp.data().skills),
        map((skills) => this.ngxSerializerService.deserializeAll(Skill, skills))
      );
  }

}
