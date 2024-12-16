import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../../shared/model/User';

@Component({
  selector: 'app-grid-one-content',
  templateUrl: './grid-one-content.component.html',
  styleUrl: './grid-one-content.component.css'
})
export class GridOneContentComponent {
  user!: User;
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
  openLink(): void {
    if(this.user.id) {
      this.router.navigate(['/The-Art-Corner-Web-Application/profile']);
    }
    else {
      this.router.navigate(['/The-Art-Corner-Web-Application/login']);
    }
  }
}
