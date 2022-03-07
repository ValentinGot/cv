import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreServiceModule } from '../core-service.module';
import { Experience } from '../models/experience.model';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class ExperienceService {
  private static COLLECTION = 'experiences';

  constructor(
    private readonly firestoreService: FirestoreService
  ) { }

  getAll(): Observable<Experience[]> {
    return this.firestoreService.getAll(Experience, ExperienceService.COLLECTION);
  }

}
