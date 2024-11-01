import { Component } from '@angular/core';
import { CreateExplore } from '../../data/CreateExplore';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-general-community-page',
  templateUrl: './general-community-page.component.html',
  styleUrl: './general-community-page.component.css'
})
export class GeneralCommunityPageComponent {
  artifacts: CreateExplore[] = [];

  constructor(private activeRoute: ActivatedRoute){

  }

  ngOnInit(){
    this.activeRoute.data.subscribe(data => {
      this.artifacts = data['artifacts'];
    });
  }

  trackByFn(item: any) {
    return item.id;
  }
}
