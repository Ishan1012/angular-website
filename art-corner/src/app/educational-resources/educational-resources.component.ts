import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { CreateExplore } from '../data/CreateExplore';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { key } from '../data/encryptionKey';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-educational-resources',
  templateUrl: './educational-resources.component.html',
  styleUrl: './educational-resources.component.css'
})
export class EducationalResourcesComponent implements OnInit {
  currentItem: CreateExplore = new CreateExplore;
  recommend_list: CreateExplore[] = [];
  artifacts: CreateExplore[] = [];
  list: CreateExplore[] = [];
  isFading: boolean = false;
  getCurrentId: number = 0;
  isActive: boolean = true;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,@Inject(PLATFORM_ID) private platformId: any) {
  }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {
      this.artifacts = data['artifacts'];
      this.isActive = data['navActive'];
      if(this.list)
      this.list = data['list'];
    });

    const navigation = this.router.getCurrentNavigation();
    if(navigation?.extras.state)
    this.list = navigation.extras.state['list'];
    
    const encodedID = this.activatedRoute.snapshot.paramMap.get('id');
    if(encodedID){
      try{
        const decodeId = decodeURIComponent(encodedID);
        const bytes = CryptoJS.AES.decrypt(decodeId,key);
        const parseObj = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

        this.currentItem = this.artifacts.find(x => x.id == parseObj) || new CreateExplore();

        const currentIndex = this.list.indexOf(this.currentItem);
        if(currentIndex !== -1)
          this.recommend_list = this.getRecommendations(currentIndex);
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
        this.moveBack(this.currentItem);
      }
      else
      {
        this.moveNext(this.currentItem);
      }
    }
  }

  getRecommendations(index: number): CreateExplore[]
  {
    let split_list;
    if(index+9 >= this.artifacts.length)
    {
      split_list = this.artifacts.slice(0,8);
    }
    else
    {
      split_list = this.artifacts.slice(index+1,index+9);
    }
    return split_list;
  }

  toggleLike(item: CreateExplore) {
    const index = this.list.indexOf(item);
    if (index !== -1) {
      this.list[index].like = !this.list[index].like;
    }
  }
  
  moveBack(item: CreateExplore) {
    const index = this.list.indexOf(item);
    if (index-1 > -1) {
      this.applyFadeEffect(() => this.currentItem = this.list[index-1]);
      const index2 = this.artifacts.indexOf(this.currentItem)-1;
      this.applyFadeEffect(() => this.recommend_list = this.getRecommendations(index2));
      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.currentItem.id),key).toString();
      let encodeId = encodeURIComponent(encrypted);
      this.router.navigate(['/explore',encodeId]);
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

  moveNext(item: CreateExplore) {
    const index = this.list.indexOf(item);
    if (index+1 < this.list.length) {
      this.applyFadeEffect(() => this.currentItem = this.list[index+1]);
      const index2 = this.artifacts.indexOf(this.currentItem)+1;
      this.applyFadeEffect(() => this.recommend_list = this.getRecommendations(index2));
      let encrypted = CryptoJS.AES.encrypt(JSON.stringify(this.currentItem.id),key).toString();
      let encodeId = encodeURIComponent(encrypted);
      this.router.navigate(['/explore',encodeId]);
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
  }
}
