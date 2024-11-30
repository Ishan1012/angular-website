import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../shared/model/User';

@Component({
  selector: 'app-admin-login-dashboard',
  templateUrl: './admin-login-dashboard.component.html',
  styleUrl: './admin-login-dashboard.component.css'
})
export class AdminLoginDashboardComponent {
  user!: User;
  userList!: User[];
  constructor(private userService: UserService) {
    this.userService.userObservable.subscribe((user) => {
      this.user = user;
    })
    this.userService.getUsers(this.user).subscribe({
      next: (data) => {
        this.userList = data;

        this.userList = this.userList.filter(item => item.isAdmin === false);
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
      complete: () => {
        console.log('User list fetch complete.');
      }
    });
  }

  trackByFn(item: any) {
    return item.id;
  }
}
