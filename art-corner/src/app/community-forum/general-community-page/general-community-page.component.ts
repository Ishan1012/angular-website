import { Component } from '@angular/core';
import { CreateCommunities } from '../../data/CreateCommunities';
import { CommunitiesService } from '../../services/communities.service';

@Component({
  selector: 'app-general-community-page',
  templateUrl: './general-community-page.component.html',
  styleUrl: './general-community-page.component.css'
})
export class GeneralCommunityPageComponent {
  communities: CreateCommunities[] = [];

  constructor(
    private getCommunities: CommunitiesService
  ){

  }

  ngOnInit(){
    this.communities = this.getCommunities.getAll();
  }

  trackByFn(item: any) {
    return item.id;
  }
}
