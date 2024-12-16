import { Component, HostListener } from '@angular/core';
import { CreateExplore } from './shared/model/CreateExplore';
import { ArtifactsService } from './services/artifacts.service';
import { Router } from '@angular/router';
import { User } from './shared/model/User';
import { UserService } from './services/user.service';
import { BookmarkService } from './services/bookmark.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  artifacts: CreateExplore[] = [];
  user!: User;
  isDropdownOpen = false;
  title = "Art Corner | A Responsive Portfolio Web Application";
  
  constructor(
    private getArtifacts: ArtifactsService,
    private getBookmarks: BookmarkService,
    private router: Router,
    private userService: UserService,
  ) {
    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
  
  logout(){
    this.getBookmarks.clearBookmarks();
    this.userService.logout();
  }

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
