import { Injectable } from '@angular/core';
import { CreateCommunities } from '../data/CreateCommunities';
import { initialCommunities } from '../data/initialCommunities';

@Injectable({
  providedIn: 'root'
})
export class CommunitiesService {

  constructor() { }

  getAll(): CreateCommunities[] {
    return initialCommunities;
  }
}
