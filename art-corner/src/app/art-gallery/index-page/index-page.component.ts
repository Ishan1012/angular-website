import { Component } from '@angular/core';
import { User } from '../../shared/model/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent {
  user!: User;
  
  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  redirect(): void{
    if(!this.user.token)
      this.router.navigate(['/login']);
    else
      this.router.navigate(['/explore']);
  }
}
