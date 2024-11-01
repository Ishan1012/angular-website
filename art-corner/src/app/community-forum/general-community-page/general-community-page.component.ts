import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateCommunities } from '../../data/CreateCommunities';

@Component({
  selector: 'app-general-community-page',
  templateUrl: './general-community-page.component.html',
  styleUrl: './general-community-page.component.css'
})
export class GeneralCommunityPageComponent {
  communities: CreateCommunities[] = [];

  constructor(private activeRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.activeRoute.data.subscribe(data => {
      this.communities = data['communities'];
    });
  }

  trackByFn(item: any) {
    return item.id;
  }
}
