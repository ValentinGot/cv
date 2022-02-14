import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgxSerializerService } from '@paddls/ngx-serializer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CoreServiceModule } from '../core-service.module';
import { PersonalInformation } from '../models/personal-information.model';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class PersonalInformationService {
  private static COLLECTION = 'personal-infos';

  constructor(
    private readonly languageService: LanguageService,
    private readonly angularFirestore: AngularFirestore,
    private readonly ngxSerializerService: NgxSerializerService
  ) { }

  get(): Observable<PersonalInformation> {
    return this.angularFirestore
      .collection<PersonalInformation>(PersonalInformationService.COLLECTION, (ref) => ref.where('lang', '==', this.languageService.activeLang))
      .get()
      .pipe(
        map((snapshot) => snapshot.docs[0]),
        filter((personalInfo) => !!personalInfo),
        map((personalInfo) => this.ngxSerializerService.deserialize(PersonalInformation, personalInfo.data()))
      );
  }

}
