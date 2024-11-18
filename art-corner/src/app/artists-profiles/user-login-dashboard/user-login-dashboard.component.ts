import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { User } from '../../shared/model/User';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
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
      img: [File, [Validators.required]]
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
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];
      const allowedTypes = ['image/jpeg', 'image/png'];

      if (!allowedTypes.includes(file.type)) {
        this.toastr.error('Only JPEG and PNG files are allowed.',"Image Upload Failed!");
        this.selectedFile = null; // Reset the selected file
        return;
      }
      this.selectedFile = file;
    }
  }

  uploadImage(): void{
    
  }

  // Submit the selected file
  onSubmit(event: Event, title: string, desc: string): void {
    event.preventDefault();

    if (!this.selectedFile){
      this.toastr.error('Image is required!', 'Upload Failed!');
      return;
    }
    else if(title === ''){
      this.toastr.error('Title is required!', 'Upload Failed!');
      return;
    }
    else if(desc === ''){
      this.toastr.error('Description is required!', 'Upload Failed!');
      return;
    }
  }
}
