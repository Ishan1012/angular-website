import { Component, Input, OnInit } from '@angular/core';
import { CreateExplore } from '../shared/model/CreateExplore';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { key } from '../shared/constants/encryptionKey';
import { ArtifactsService } from '../services/artifacts.service';
import { BookmarkService } from '../services/bookmark.service';
import { Bookmarks } from '../shared/model/Bookmarks';
import { UserService } from '../services/user.service';
import { User } from '../shared/model/User';

@Component({
  selector: 'app-accessibility-features',
  templateUrl: './accessibility-features.component.html',
  styleUrl: './accessibility-features.component.css'
})
export class AccessibilityFeaturesComponent implements OnInit {
  artifacts: CreateExplore[] = [];
  currentItem: CreateExplore = new CreateExplore();
  checkActive: boolean = false;
  bookmarks!: Bookmarks;
  user!: User;

  constructor(
    private activaRoute: ActivatedRoute, 
    private router: Router,
    private getArtifacts: ArtifactsService,
    private bookmarkService: BookmarkService,
    private userService: UserService
  ) {
    this.bookmarkService.getBookmarkObservable().subscribe((bookmark) => {
      this.bookmarks = bookmark;
    })
  }

  ngOnInit() {
    let artifactObservable = this.getArtifacts.getAll();
    artifactObservable.subscribe((artifactItems) => {
      this.artifacts = artifactItems;
      this.checkActive = this.checkActiveFav();
    })
    this.userService.userObservable.subscribe((user) => {
      this.user = user;
    })
  }

  readMore(item: any) {
    this.currentItem = item;
    if (this.currentItem.id >= 0) {
      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.currentItem.id), key).toString();
      let encodeId = encodeURIComponent(encrypted);
      this.activaRoute.data.subscribe(data => {
        data['list'] = this.bookmarks;
      });
      this.router.navigate(['/bookmarks', encodeId]);
    }
  }

  checkActiveFav(): boolean {
    return (this.bookmarks.items.length > 0)?true:false;
  }

  toggleBookmark(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.bookmarks.items[index].artifacts.bookmark = !this.bookmarks.items[index].artifacts.bookmark;
    }
    this.bookmarkService.removeBookmark(item.id);
  }

  trackByFn(item: any) {
    return item.id;
  }
}
