import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BookmarkService } from '../services/bookmark.service';
import { PasswordsMatchValidator } from '../shared/validators/password_match_validator';
import { IUserRegister } from '../shared/interfaces/IUserRegister';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-artists-profiles',
  templateUrl: './artists-profiles.component.html',
  styleUrl: './artists-profiles.component.css'
})
export class ArtistsProfilesComponent {
  loginForm!: FormGroup;
  signupForm!: FormGroup;
  isSubmitted = false;
  showLogin = true;
  returnUrl = '';
  showPassword = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private fromBuilder: FormBuilder,
    private userService: UserService,
    private getBookmarks: BookmarkService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.fromBuilder.group({
      name: [''],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required],
      confirmPassword: ['']
    });
    this.signupForm = this.fromBuilder.group({
      name: ['',[Validators.required,Validators.minLength(5),
        Validators.pattern(/^[a-zA-Z\s]+$/)
      ]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      ]],
      confirmPassword: ['', [Validators.required,
        this.matchValidator('password')
      ]]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc(){
    return this.showLogin?this.loginForm.controls:this.signupForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    console.log(this.signupForm.value);

    if(this.showLogin && this.loginForm.invalid){

      const emailControl = this.loginForm.get('email');
      if(emailControl?.hasError('email'))
        this.toastr.error('Invalid email format!', 'Validation Error!');
      else if(emailControl?.hasError('required'))
        this.toastr.error('Email is required!', 'Validation Error!');

      const passwordControl = this.loginForm.get('password');
      if(passwordControl?.hasError('required'))
        this.toastr.error('Password is required!', 'Validation Error!');
      return;
    }
    else if(!this.showLogin && this.signupForm.invalid)
    {
      
      // Check Name Validation
      const nameControl = this.signupForm.get('name');
      if(nameControl?.hasError('required'))
        this.toastr.error('Name is required!', 'Validation Error!');
      else if(nameControl?.hasError('minlength'))
        this.toastr.error('Name must be at least 5 characters long!', 'Validation Error!');
      else if(nameControl?.hasError('pattern'))
        this.toastr.error('Name must contain only letters and spaces!', 'Validation Error!');

      // Check Email Validation
      const emailControl = this.signupForm.get('email');
      if(emailControl?.hasError('email'))
        this.toastr.error('Invalid email format!', 'Validation Error!');
      else if(emailControl?.hasError('required'))
        this.toastr.error('Email is required!', 'Validation Error!');

      // Check Password Validation
      const passwordControl = this.signupForm.get('password');
      if(passwordControl?.hasError('required'))
        this.toastr.error('Password is required!', 'Validation Error!');
      else if(passwordControl?.hasError('minlength'))
        this.toastr.error('Password must be at least 8 characters long!', 'Validation Error!');
      else if(passwordControl?.hasError('pattern'))
        this.toastr.error('Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character!', 'Validation Error!');
      
      // Check Confirm Password Validation
      const confirmPasswordControl = this.signupForm.get('confirmPassword');
      if(confirmPasswordControl?.hasError('required'))
        this.toastr.error('Confirm password is required!', 'Validation Error!');
      else if(passwordControl?.hasError('isMatching'))
        this.toastr.error('Passwords do not match!', 'Validation Error');

      return;
    }

    if(this.showLogin) {

      this.userService.login({email: this.fc['email'].value,
        password: this.fc['password'].value
      }).subscribe(()=>{
        console.log('submit');
        this.route.navigateByUrl(this.returnUrl);
      })
    }
    else {
      const fv = this.signupForm.value;
      console.log(fv);
      const user : IUserRegister = {
        id: '',
        name: fv.name,
        email: fv.email,
        password: fv.password,
        confirmPassword: fv.confirmPassword,
        img: './profiles/profile11.png'
      }

      this.userService.register(user).subscribe(_ => {
        this.route.navigateByUrl(this.returnUrl);
      })
    }
    this.getBookmarks.clearBookmarks();
  }

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  matchValidator(matchTo: string): ValidatorFn {
    return (control: AbstractControl) => {
      return control?.value === control?.parent?.get(matchTo)?.value
        ? null
        : { isMatching: true };
    };
  }

  signup() {
    this.route.navigate(['/login']);
  }

  showPasswordfn(){
    this.showPassword = true;
  }

  hidePasswordfn(){
    this.showPassword = false;
  }
}
