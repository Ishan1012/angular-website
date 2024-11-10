import { Component, Input, OnInit } from '@angular/core';
import { CreateExplore } from '../data/CreateExplore';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { key } from '../shared/encryptionKey';
import { ArtifactsService } from '../services/artifacts.service';

@Component({
  selector: 'app-accessibility-features',
  templateUrl: './accessibility-features.component.html',
  styleUrl: './accessibility-features.component.css'
})
export class AccessibilityFeaturesComponent implements OnInit {
  artifacts: CreateExplore[] = [];
  currentItem: CreateExplore = new CreateExplore();
  checkActive: boolean = false;
  bookmarks: CreateExplore[] = [];

  constructor(
    private activaRoute: ActivatedRoute, 
    private router: Router,
    private getArtifacts: ArtifactsService
  ) {
  }

  ngOnInit(): void {
    let artifactObservable = this.getArtifacts.getAll();
    artifactObservable.subscribe((artifactItems) => {
      this.artifacts = artifactItems;
    })
    this.checkActive = this.checkActiveFav();
    this.bookmarks = this.checkBookmark();
  }

  checkBookmark(): CreateExplore[] {
    const getBookmarks = [];
    for (let i = 0; i < this.artifacts.length; i++) {
      const element = this.artifacts[i];
      if (element.bookmark)
        getBookmarks.push(this.artifacts[i]);
    }
    return getBookmarks;
  }

  readMore(item: any) {
    this.currentItem = item;
    if (this.currentItem.id >= 0) {
      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.currentItem.id), key).toString();
      let encodeId = encodeURIComponent(encrypted);
      this.activaRoute.data.subscribe(data => {
        data['list'] = this.bookmarks;
      });
      this.router.navigate(['/bookmarks', encodeId], {state: {list: this.bookmarks}});
    }
  }

  checkActiveFav(): boolean {
    this.checkActive = this.artifacts.some((artifact) => {
      if (artifact.bookmark) {
        return true; // Bookmark is active
      }
      return false; // No active bookmark
    });

    return this.checkActive;
  }

  toggleBookmark(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.artifacts[index].bookmark = !this.artifacts[index].bookmark;
    }
  }

  trackByFn(item: any) {
    return item.id;
  }
}
