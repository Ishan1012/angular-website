import { Injectable } from '@angular/core';
import { Bookmarks } from '../shared/model/Bookmarks';
import { BehaviorSubject, Observable } from 'rxjs';
import { CreateExplore } from '../shared/model/CreateExplore';
import { CreateBookmarks } from '../shared/model/CreateBookmarks';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {
  private bookmarks: Bookmarks = this.getBookmarksFromLocalStorage();
  private bookmarkSubject: BehaviorSubject<Bookmarks> = new BehaviorSubject(this.bookmarks);

  constructor() { }

  addToBookmarks(item: CreateExplore): void{
    let bookmarkItem = this.bookmarks.items
    .find(bookmarkedItem => bookmarkedItem.artifacts.id === item.id);
    
    if(!bookmarkItem)
      return;

    this.bookmarks.items.push(new CreateBookmarks(item));
    this.setBookmarkToLocalStorage();
  }

  removeBookmark(itemId: number):void {
    this.bookmarks.items = this.bookmarks.items
    .filter(item => item.artifacts.id != itemId);
    this.setBookmarkToLocalStorage();
  }

  changeQuantity(itemId: number):void {
    let artifactBookmarked = this.bookmarks.items
    .find(item => item.artifacts.id === itemId);

    if(!artifactBookmarked) return;
    this.setBookmarkToLocalStorage();
  }

  getBookmarkObservable(): Observable<Bookmarks> {
    return this.bookmarkSubject.asObservable();
  }

  private setBookmarkToLocalStorage():void{
    this.bookmarks.totalCount = this.bookmarks.items
    .reduce((prevSum, currentItem) => prevSum + 1,0);

    const bookmarksJson = JSON.stringify(this.bookmarks);
    localStorage.setItem('Bookmarks', bookmarksJson);
    this.bookmarkSubject.next(this.bookmarks);
  }

  private getBookmarksFromLocalStorage():Bookmarks{
    const bookmarkJson = localStorage.getItem('Bookmarks');

    return bookmarkJson? JSON.parse(bookmarkJson): new Bookmarks();
  }
}
