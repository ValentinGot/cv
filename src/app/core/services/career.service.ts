import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreServiceModule } from '../core-service.module';
import { Career } from '../models/career.model';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class CareerService {
  private static COLLECTION = 'career';

  constructor(
    private readonly firestoreService: FirestoreService
  ) { }

  getAll(): Observable<Career[]> {
    return this.firestoreService.getAll<Career>(Career, CareerService.COLLECTION);
  }

}
