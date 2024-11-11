import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private fromBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.loginForm = this.fromBuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    })
    this.signupForm = this.fromBuilder.group({
      name: ['',[Validators.required,Validators.maxLength(50)]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', Validators.required]
    });

    this.returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'];
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;

    this.userService.login({email: this.fc['email'].value,
      password: this.fc['password'].value
    }).subscribe(()=>{
      console.log('submit');
      this.route.navigateByUrl(this.returnUrl);
    })
  }

  toggleForm() {
    this.showLogin = false;
  }

  login() {
    this.route.navigate(['/home']);
  }

  signup() {
    this.route.navigate(['/login']);
  }
}
