import { Component, Input, OnInit } from '@angular/core';
import { CreateExplore } from '../data/CreateExplore';
import { PagesContainer } from '../data/PagesContainer';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { key } from '../data/encryptionKey';

@Component({
  selector: 'app-accessibility-features',
  templateUrl: './accessibility-features.component.html',
  styleUrl: './accessibility-features.component.css'
})
export class AccessibilityFeaturesComponent implements OnInit {
  artifacts: CreateExplore[] = [];
  currentItem: CreateExplore = new CreateExplore();
  pages: PagesContainer = new PagesContainer();
  checkActive: boolean = false;
  bookmarks: CreateExplore[] = [];

  constructor(
    private activaRoute: ActivatedRoute, 
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.activaRoute.data.subscribe(data => {
      this.artifacts = data['artifacts'];
      this.pages = data['page'];
    });
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

  OpenExplore() {
    this.pages.pageNo = 'explore';
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
