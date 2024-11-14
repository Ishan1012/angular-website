import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateCommunities } from '../../shared/model/CreateCommunities';

@Component({
  selector: 'app-community-description',
  templateUrl: './community-description.component.html',
  styleUrl: './community-description.component.css'
})
export class CommunityDescriptionComponent {
  user!: CreateCommunities;

  constructor(
    private activeRoute: ActivatedRoute
  ) {
    const item = this.activeRoute.snapshot.paramMap.get('commid');
    this.user = JSON.parse(item || '') as CreateCommunities;
  }

  
}
