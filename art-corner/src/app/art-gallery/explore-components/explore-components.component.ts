import { Component } from '@angular/core';
import { PagesContainer } from '../../data/PagesContainer';
import { CreateExplore } from '../../data/CreateExplore';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';
import { key } from '../../data/encryptionKey';

@Component({
  selector: 'app-explore-components',
  templateUrl: './explore-components.component.html',
  styleUrl: './explore-components.component.css'
})
export class ExploreComponentsComponent {
  pages: PagesContainer = new PagesContainer;
  currentItem: CreateExplore = new CreateExplore();
  artifacts: CreateExplore[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.artifacts = data['artifacts'];
      this.pages.pageNo = data['page'];
    });

  }

  trackByFn(item: any) {
    return item.id;
  }

  toggleLike(item: CreateExplore) {
    const index = this.artifacts.indexOf(item);
    if (index !== -1) {
      this.artifacts[index].bookmark = !this.artifacts[index].bookmark;
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

