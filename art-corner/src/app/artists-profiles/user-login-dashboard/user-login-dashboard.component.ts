import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { User } from '../../shared/model/User';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ArtifactsService } from '../../services/artifacts.service';

@Component({
  selector: 'app-user-login-dashboard',
  templateUrl: './user-login-dashboard.component.html',
  styleUrl: './user-login-dashboard.component.css'
})
export class UserLoginDashboardComponent {
  selectedFile: File | null = null;
  postForm!: FormGroup;
  user!: User;
  returnUrl = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private userServices: UserService,
    private router: Router,
    private fromBuilder: FormBuilder,
    @Inject(PLATFORM_ID) private platformId: any,
    private toastr: ToastrService,
    private artifactService: ArtifactsService
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
      title: ['',Validators.required],
      desc: ['',Validators.required],
      img: [File, [Validators.required]]
    });
    
    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
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
      const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];

      if (!allowedTypes.includes(file.type)) {
        this.toastr.error('Only JPEG, WEBP and PNG files are allowed.',"Image Upload Failed!");
        this.selectedFile = null; // Reset the selected file
        return;
      }
      this.selectedFile = file;
    }
  }

  // Submit the selected file
  onSubmit(event: Event): void {
    event.preventDefault();
  
    if (!this.selectedFile) {
      this.toastr.error('Image is required!', 'Upload Failed!');
      return;
    }
  
    if (this.postForm.invalid) {
      const titleControl = this.postForm.get('title');
      const descControl = this.postForm.get('desc');
  
      if (titleControl?.hasError('required')) {
        this.toastr.error('Title is required!', 'Image Upload Failed!');
      }
  
      if (descControl?.hasError('required')) {
        this.toastr.error('Description is required!', 'Image Upload Failed!');
      }
  
      return;
    }

    console.log("reached");
  
    // Prepare form data for backend
    const formData = new FormData();
    formData.append('title', this.postForm.value.title);
    formData.append('desc', this.postForm.value.desc);
    formData.append('img', this.selectedFile);
  
    // Post to the backend
    this.artifactService.postArtifact(formData).subscribe(() => {
      this.toastr.success('Image uploaded successfully!', 'Success');
      this.router.navigateByUrl(this.returnUrl);
    });
  }
  
}
