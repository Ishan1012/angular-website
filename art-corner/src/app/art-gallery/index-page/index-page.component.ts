import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { User } from '../../shared/model/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { CreateExplore } from '../../shared/model/CreateExplore';
import { CommunitiesService } from '../../services/communities.service';
import { CreateCommunities } from '../../shared/model/CreateCommunities';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {
  user!: User;
  communities!: CreateCommunities[];
  
  constructor(
    private userService: UserService,
    private getCommunity: CommunitiesService,
    @Inject(PLATFORM_ID) private platformId: any,
    private router: Router
  ) {
    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
    this.getCommunity.getAll().subscribe((items) => {
      this.communities = items;
    })
    this.scrollToTop();
  }

  redirect(): void{
    if(!this.user.id)
      this.router.navigate(['/login']);
    else
      this.router.navigate(['/explore']);
  }

  trackByFn(item: any) {
    return item.id;
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  openLink(): void {
    if(this.user.id) {
      this.router.navigate(['/profile']);
    }
    else {
      this.router.navigate(['/login']);
    }
  }
}
