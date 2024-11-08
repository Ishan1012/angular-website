import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-profiles',
  templateUrl: './artists-profiles.component.html',
  styleUrl: './artists-profiles.component.css'
})
export class ArtistsProfilesComponent {
  constructor(private authService: AuthService,private route: Router) {}

  login(email: string, password: string) {
    this.authService.signIn(email,password)
    .then(result => this.route.navigate(['/login',result]))
    .catch(error => console.log("Error logging in: ",error));
  }

  logout() {
    this.authService.signOut()
    .then(result => console.log("Signed Out!"));
  }
}
