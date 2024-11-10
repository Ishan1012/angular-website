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

  getAllArtifactsBySearchTerm(searctItem: string) {
    return this.getAll().filter(artifacts =>
      artifacts.title.toLowerCase().includes(searctItem.toLowerCase()));

  }

}
