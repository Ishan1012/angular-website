import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artists-profiles',
  templateUrl: './artists-profiles.component.html',
  styleUrl: './artists-profiles.component.css'
})
export class ArtistsProfilesComponent {
  name: any;  

  constructor(private route: Router) {}

  login(email: string, password: string) {
    this.route.navigate(['/home']);
  }

  logout() {
    this.route.navigate(['/login']);
  }
}
