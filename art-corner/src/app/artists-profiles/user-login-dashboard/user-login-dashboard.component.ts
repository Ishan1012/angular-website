import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { User } from '../../shared/model/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-login-dashboard',
  templateUrl: './user-login-dashboard.component.html',
  styleUrl: './user-login-dashboard.component.css'
})
export class UserLoginDashboardComponent {
  selectedFile: File | null = null;
  postForm!: FormGroup;
  user!: User;

  constructor(
    private userServices: UserService,
    private router: Router,
    private fromBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: any,
    private http: HttpClient
  ) {
    this.userServices.userObservable.subscribe((user) => {
      this.user = user;
    });
    if(!this.user.id)
      this.router.navigate(['/index']);
  }

  ngOnInit() {
    this.scrollToTop();
    this.postForm = this.fromBuilder.group({
      name: [''],
    });
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

  onFileSelected(event: Event): void {
    // const input = event.target as HTMLInputElement;
    // if (input.files && input.files.length > 0) {
    //   this.selectedFile = input.files[0];
    // }
  }

  // Submit the selected file
  onSubmit(): void {
    // if (!this.selectedFile) return;

    // const formData = new FormData();
    // formData.append('image', this.selectedFile);

    // this.http.post('http://your-backend-api/upload', formData).subscribe({
    //   next: (response) => {
    //     console.log('Upload successful', response);
    //   },
    //   error: (error) => {
    //     console.error('Upload failed', error);
    //   }
    // });
  }
}
