import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgxSerializerService } from '@paddls/ngx-serializer';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { CoreServiceModule } from '../core-service.module';
import { LanguageService } from './language.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class FirestoreService {

  constructor(
    private readonly languageService: LanguageService,
    private readonly angularFirestore: AngularFirestore,
    private readonly ngxSerializerService: NgxSerializerService
  ) { }

  getAll<T>(type: new(...args: any[]) => T, collection: string): Observable<T[]> {
    return this.angularFirestore
      .collection(collection, (ref) => ref.where('lang', '==', this.languageService.activeLang))
      .get()
      .pipe(
        map((snapshot) => snapshot.docs[0]),
        filter((resp) => !!resp),
        map((resp) => resp.data()[collection]),
        map((data) => this.ngxSerializerService.deserializeAll(type, data))
      );
  }

}
