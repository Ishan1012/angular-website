import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Newsletters } from '../shared/model/Newsletters';
import { HttpClient } from '@angular/common/http';
import { NEWSLETTERS_URL } from '../shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class NewslettersService {
  private newsletterSubject = 
  new BehaviorSubject<Newsletters>(new Newsletters());
  public newsletterObservable: Observable<Newsletters>;

  constructor(
    private http: HttpClient,
  ) { 
    this.newsletterObservable = this.newsletterSubject.asObservable();
  }

  getAll(): Observable<Newsletters[]> {
    return this.http.get<Newsletters[]>(NEWSLETTERS_URL);
  }
}
