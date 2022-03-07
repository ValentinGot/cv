import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreServiceModule } from '../core-service.module';
import { Skill } from '../models/skill.model';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: CoreServiceModule
})
export class SkillService {
  private static COLLECTION = 'skills';

  constructor(
    private readonly firestoreService: FirestoreService
  ) { }

  getAll(): Observable<Skill[]> {
    return this.firestoreService.getAll(Skill, SkillService.COLLECTION);
  }

}
