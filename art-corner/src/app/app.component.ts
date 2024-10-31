import { Component } from '@angular/core';
import { CreateExplore } from './data/CreateExplore';
import { PagesContainer } from './data/PagesContainer';
import { initialArtifacts } from './data/initialArtifacts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  artifacts: CreateExplore[] = [];
  GetResults() {}

  pages: PagesContainer = new PagesContainer();

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit(){
    this.artifacts = initialArtifacts;
    this.route.data.subscribe(data =>{
      this.pages.pageNo = data['page'];
    })
  }

  OpenPage(page: string) {
    this.pages.pageNo = page;
  }

  getPages()
  {
    return this.pages;
  }
}
