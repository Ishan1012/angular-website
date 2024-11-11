import { Injectable } from '@angular/core';
import { CreateCommunities } from '../shared/model/CreateCommunities';
import { HttpClient } from '@angular/common/http';
import { COMMUNITY_BY_ID_URL, COMMUNITY_BY_SEARCH_URL, COMMUNITY_URL } from '../shared/constants/urls';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommunitiesService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<CreateCommunities[]> {
    return this.http.get<CreateCommunities[]>(COMMUNITY_URL);
  }

  getCommunityBySearchTerm(searchItem: string): Observable<CreateCommunities[]> {
    return this.http.get<CreateCommunities[]>(COMMUNITY_BY_SEARCH_URL + searchItem)
  }

  getArtifactById(itemid: number): Observable<CreateCommunities> {
    return this.http.get<CreateCommunities>(COMMUNITY_BY_ID_URL);
  }
}