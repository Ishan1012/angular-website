import { Injectable } from '@angular/core';
import { CreateExplore } from '../data/CreateExplore';
import { initialArtifacts } from '../data/initialArtifacts';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  constructor() { }

  getAll(): CreateExplore[] {
    return initialArtifacts;
  }
}
