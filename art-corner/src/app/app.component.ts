import { Component } from '@angular/core';
import { CreateExplore } from './data/CreateExplore';
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
    this.artifacts = this.getArtifacts.getAll();
  }
}
