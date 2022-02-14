import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgxSerializerService } from '@paddls/ngx-serializer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CoreServiceModule } from '../core-service.module';
import { Experience, ExperienceResponse } from '../models/experience.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class ExperienceService {
  private static COLLECTION = 'experiences';

  constructor(
    private readonly languageService: LanguageService,
    private readonly angularFirestore: AngularFirestore,
    private readonly ngxSerializerService: NgxSerializerService
  ) { }

  getAll(): Observable<Experience[]> {
    return this.angularFirestore
      .collection<ExperienceResponse>(ExperienceService.COLLECTION, (ref) => ref.where('lang', '==', this.languageService.activeLang))
      .get()
      .pipe(
        map((snapshot) => snapshot.docs[0]),
        filter((resp) => !!resp),
        map((resp) => resp.data().experiences),
        map((experiences) => this.ngxSerializerService.deserializeAll(Experience, experiences))
      );
  }

}
