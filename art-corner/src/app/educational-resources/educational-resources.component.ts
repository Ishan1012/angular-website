import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CreateExplore } from '../shared/model/CreateExplore';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { key } from '../shared/constants/encryptionKey';
import { isPlatformBrowser } from '@angular/common';
import { ArtifactsService } from '../services/artifacts.service';
import { BookmarkService } from '../services/bookmark.service';
import { Bookmarks } from '../shared/model/Bookmarks';
import { UserService } from '../services/user.service';
import { User } from '../shared/model/User';


@Component({
  selector: 'app-educational-resources',
  templateUrl: './educational-resources.component.html',
  styleUrl: './educational-resources.component.css'
})
export class EducationalResourcesComponent implements OnInit {
  currentItem: CreateExplore = new CreateExplore();
  recommend_list: CreateExplore[] = [];
  artifacts: CreateExplore[] = [];
  list!: Bookmarks;
  isFading: boolean = false;
  getCurrentId: number = 0;
  isActive: boolean = true;
  bookmarkActive!: boolean;
  iscopy: boolean = false;
  user!: User;

  constructor(
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any,
    private getArtifacts: ArtifactsService,
    private bookmarkService: BookmarkService,
    private getUser: UserService
  ) {}

  ngOnInit() {
    this.getUser.userObservable.subscribe((item) => {
      this.user = item;
    })
    this.getArtifacts.getAll().subscribe((artifactItems) => {
      this.artifacts = artifactItems;
      this.recommend_list = this.getRecommendations(7);
    });

    this.bookmarkService.getBookmarkObservable().subscribe((bookmark) => {
      this.list = bookmark;
      if(this.list.items.length > 0)
        this.bookmarkActive = false;
      else
        this.bookmarkActive = true;
    })

    this.activatedRoute.data.subscribe(data => {
      this.isActive = data['navActive'];
    });
    
    const encodedID = this.activatedRoute.snapshot.paramMap.get('id');
    if(encodedID){
      try{
        this.getArtifacts.getArtifactById(encodedID).subscribe((currentItem) => {
          this.currentItem = currentItem;
        })
      }
      catch (error){
        console.error('Error decrypting object id: ',error);
      }
    }

    this.scrollToTop();
  }

  @HostListener('window:keydown',['$event'])
  handleKeyDown(event: KeyboardEvent){
    if(this.isActive)
    {
      if(event.key === 'ArrowLeft')
      {
        this.moveBack();
      }
      else
      {
        this.moveNext();
      }
    }
  }

  getRecommendations(index: number): CreateExplore[] {
    // Step 1: Get a subset of items starting after the current item
    const start = Math.max(0, index + 1);
    const end = Math.min(this.artifacts.length, index + 9);
  
    const recommendations = this.artifacts.slice(start, end);
  
    // Step 2: Add extra items from the start of the list if fewer than 8 are available
    if (recommendations.length < 8) {
      const additionalItems = this.artifacts.slice(0, 8 - recommendations.length);
      recommendations.push(...additionalItems);
    }
  
    // Step 3: Shuffle the recommendations array
    for (let i = recommendations.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [recommendations[i], recommendations[j]] = [recommendations[j], recommendations[i]];
    }
  
    return recommendations.slice(0, 8);  // Ensure we return exactly 8 items
  }
  

  toggleLike(item: CreateExplore) {
    item.like = !item.like;
  }
  
  moveBack() {
    const index = this.currentItem.index - 1;
    
    if (index-1 > -1) {
      this.applyFadeEffect(() => this.currentItem = this.artifacts[index-1]);
      
      const index2 = this.artifacts.indexOf(this.currentItem)-1;
      this.applyFadeEffect(() => this.recommend_list = this.getRecommendations(index2));
      this.router.navigate(['/explore',this.currentItem.id]);
    }
  }

  applyFadeEffect(action: () => void) {
    this.isFading = true; 
    setTimeout(() => {
      action();                         // Update image after delay
      setTimeout(() => {
        this.isFading = false;          // Fade-in new image
      }, 50);                           // Short delay to re-trigger CSS transition
    }, 500);                            // Match delay with CSS transition duration
  }

  moveNext() {
    const index = this.currentItem.index - 1;
    
    if (index+1 < this.artifacts.length) {
      this.applyFadeEffect(() => this.currentItem = this.artifacts[index+1]);
      const index2 = this.artifacts.indexOf(this.currentItem)+1;
      this.applyFadeEffect(() => this.recommend_list = this.getRecommendations(index2));
      this.router.navigate(['/explore',this.currentItem.id]);
    }
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  trackByFn(_index: number,item: CreateExplore) {
    return item['id'];
  }

  openImage(item: CreateExplore){
    this.currentItem = item;
    const index2 = this.artifacts.indexOf(this.currentItem);
    this.scrollToTop();
    this.applyFadeEffect(() => this.recommend_list = this.getRecommendations(index2));
    this.router.navigate(['/explore',this.currentItem.id]);
  }

  copyToClipboard(): void {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
      this.iscopy = true;
      setTimeout(() => {
        this.iscopy = false;
      }, 5000);

    }).catch(err => {
      console.error('Failed to copy: ', err);
    });
  }

  activeDownload(): boolean{
    return this.user.id?true:false;
  }
}
