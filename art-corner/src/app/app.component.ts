import { Component } from '@angular/core';
import { CreateExplore } from './shared/model/CreateExplore';
import { ArtifactsService } from './services/artifacts.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  artifacts: CreateExplore[] = [];
  
  constructor(
    private getArtifacts: ArtifactsService,
    private router: Router
  ) {}

  GetResults(searchItem: string) {
    if(searchItem!=='')
      this.router.navigate(['/explore/search',searchItem]);
    else
      this.router.navigate(['/explore']);
  }

  ngOnInit(){
    let artifactObservable = this.getArtifacts.getAll();
    artifactObservable.subscribe((artifactItems) => {
      this.artifacts = artifactItems;
    })
  }
}
