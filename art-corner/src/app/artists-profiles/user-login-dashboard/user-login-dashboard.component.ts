import { Component } from '@angular/core';
import { User } from '../../shared/model/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-dashboard',
  templateUrl: './user-login-dashboard.component.html',
  styleUrl: './user-login-dashboard.component.css'
})
export class UserLoginDashboardComponent {
  user!: User;

  constructor(
    private userServices: UserService,
    private router: Router
  ) {
    this.userServices.userObservable.subscribe((user) => {
      this.user = user;
    });
    if(!this.user.token)
      this.router.navigate(['/index']);
  }

  logout(){
    this.userServices.logout();
  }
}
