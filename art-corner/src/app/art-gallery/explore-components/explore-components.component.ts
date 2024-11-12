import { Component } from '@angular/core';
import { CreateExplore } from '../../shared/model/CreateExplore';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { key } from '../../shared/constants/encryptionKey';
import { ArtifactsService } from '../../services/artifacts.service';
import { Observable } from 'rxjs';
import { BookmarkService } from '../../services/bookmark.service';
import { Bookmarks } from '../../shared/model/Bookmarks';

@Component({
  selector: 'app-explore-components',
  templateUrl: './explore-components.component.html',
  styleUrl: './explore-components.component.css'
})
export class ExploreComponentsComponent {
  currentItem: CreateExplore = new CreateExplore();
  artifacts: CreateExplore[] = [];
  bookmarks!: Bookmarks;

  constructor(
    private router: Router,
    private getArtifacts: ArtifactsService,
    private activatedRoute: ActivatedRoute,
    private bookmarkService: BookmarkService
  ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      let artifactsObs: Observable<CreateExplore[]> = new Observable<CreateExplore[]>();
      if (params['searchitem'] && params['searchitem'].length !== 0)
        artifactsObs = this.getArtifacts.getAllArtifactsBySearchTerm(params['searchitem']);
      else
        artifactsObs = this.getArtifacts.getAll();

      artifactsObs.subscribe((artifactsItems) => {
        this.artifacts = artifactsItems;
      })
    })
    this.bookmarkService.getBookmarkObservable().subscribe((bookItem) => {
      this.bookmarks = bookItem;
    })
  }

  trackByFn(item: any) {
    return item.id;
  }

  toggleLike(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.artifacts[index].bookmark = !this.artifacts[index].bookmark;
    }
    if(this.artifacts[index].bookmark){
      this.bookmarkService.addToBookmarks(item);
    }
    else {
      this.bookmarkService.removeBookmark(item.id);
    }
  }

  readMore(item: any) {
    this.currentItem = item;
    if (this.currentItem.id >= 0) {
      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.currentItem.id), key).toString();
      let encodeId = encodeURIComponent(encrypted);
      this.router.navigate(['/explore', encodeId]);
    }
  }

  getId(item: any) {
    return item.id;
  }
}

