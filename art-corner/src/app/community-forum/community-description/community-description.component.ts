import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateCommunities } from '../../shared/model/CreateCommunities';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-community-description',
  templateUrl: './community-description.component.html',
  styleUrl: './community-description.component.css'
})
export class CommunityDescriptionComponent {
  user!: CreateCommunities;

  constructor(
    private activeRoute: ActivatedRoute,
    @Inject(PLATFORM_ID) private platformId: any,
  ) {
    const item = this.activeRoute.snapshot.paramMap.get('commid');
    this.user = JSON.parse(item || '') as CreateCommunities;
  }

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
