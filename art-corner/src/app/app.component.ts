import { Component } from '@angular/core';
import { CreateExplore } from './data/CreateExplore';
import { ArtifactsService } from './services/artifacts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  artifacts: CreateExplore[] = [];
  GetResults() {}

  constructor(
    private getArtifacts: ArtifactsService
  ) {}

  ngOnInit(){
    this.artifacts = this.getArtifacts.getAll();
  }
}
