import { Injectable } from '@angular/core';
import { CreateExplore } from '../shared/model/CreateExplore';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { ARITFACTS_BY_ID_URL, ARITFACTS_BY_SEARCH_URL, ARITFACTS_URL, POST_ARTIFACTS } from '../shared/constants/urls';
import { IArtifactPost } from '../shared/interfaces/IArtifactPost';

@Injectable({
  providedIn: 'root'
})
export class ArtifactsService {
  private itemSubject = 
  new BehaviorSubject<CreateExplore>(new CreateExplore());
  public itemObservable: Observable<CreateExplore>;

  constructor(
    private http: HttpClient,
    private toastrService: ToastrService,
  ) { 
    this.itemObservable = this.itemSubject.asObservable();
  }

  getAll(): Observable<CreateExplore[]> {
    return this.http.get<CreateExplore[]>(ARITFACTS_URL);
  }

  getAllArtifactsBySearchTerm(searchItem: string): Observable<CreateExplore[]> {
    return this.http.get<CreateExplore[]>(ARITFACTS_BY_SEARCH_URL + searchItem)
  }

  getArtifactById(itemid: string): Observable<CreateExplore>{
    return this.http.get<CreateExplore>(ARITFACTS_BY_ID_URL + itemid);
  }

  postArtifact(item: IArtifactPost): Observable<CreateExplore>{
    return this.http.post<CreateExplore>(POST_ARTIFACTS, item).pipe(
      tap({
        next: (artifact) => {
          this.toastrService.success(
            `Image title: ${artifact.title}\nImage desc: ${artifact.desc}`,
            'Image Uploaded Successfully'
          )
        },
        error: (errorResponse) => {
          console.log(errorResponse);
          this.toastrService.error(errorResponse.error,
            'Image Upload Failed'
          )
        }
      })
    );
  }
}
