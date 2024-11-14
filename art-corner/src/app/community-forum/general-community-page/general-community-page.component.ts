import { Component } from '@angular/core';
import { CreateCommunities } from '../../shared/model/CreateCommunities';
import { CommunitiesService } from '../../services/communities.service';
import { Router } from '@angular/router';
import { key } from '../../shared/constants/encryptionKey';

@Component({
  selector: 'app-general-community-page',
  templateUrl: './general-community-page.component.html',
  styleUrl: './general-community-page.component.css'
})
export class GeneralCommunityPageComponent {
  communities: CreateCommunities[] = [];
  currentItem!: CreateCommunities;

  constructor(
    private getCommunities: CommunitiesService,
    private router: Router
  ) { }

  ngOnInit() {
    let communityObservable = this.getCommunities.getAll();
    communityObservable.subscribe((communityItems) => {
      this.communities = communityItems;
    })
  }

  trackByFn(item: any) {
    return item.id;
  }

  getSummary(description: string): string{
    return description.substring(0,218);
  }

  OpenCommunityPage(item: CreateCommunities) {
    this.router.navigate(['/community/description', JSON.stringify(item)]);
  }

  JoinCommunity(item: CreateCommunities) {
    
  }
}
