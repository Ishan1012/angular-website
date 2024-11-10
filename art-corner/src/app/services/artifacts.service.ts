import { Injectable } from '@angular/core';
import { CreateExplore } from '../data/CreateExplore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ARITFACTS_BY_ID_URL, ARITFACTS_BY_SEARCH_URL, ARITFACTS_URL } from '../shared/urls';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<CreateExplore[]> {
    return this.http.get<CreateExplore[]>(ARITFACTS_URL);
  }

  getAllArtifactsBySearchTerm(searchItem: string): Observable<CreateExplore[]> {
    return this.http.get<CreateExplore[]>(ARITFACTS_BY_SEARCH_URL + searchItem)
  }

  getArtifactById(itemid: number): Observable<CreateExplore>{
    return this.http.get<CreateExplore>(ARITFACTS_BY_ID_URL + itemid);
  }
}
