import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { User } from '../../shared/model/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-user-login-dashboard',
  templateUrl: './user-login-dashboard.component.html',
  styleUrl: './user-login-dashboard.component.css'
})
export class UserLoginDashboardComponent {
  user!: User;

  constructor(
    private userServices: UserService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.userServices.userObservable.subscribe((user) => {
      this.user = user;
    });
    if(!this.user.id)
      this.router.navigate(['/index']);
  }

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }

  logout(){
    this.userServices.logout();
  }
}
