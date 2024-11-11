import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(
    private route: Router,
    private fromBuilder: FormBuilder
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
    })
  }

  get fc(){
    return this.loginForm.controls;
  }

  submit(){
    this.isSubmitted = true;
    if(this.loginForm.invalid) return;
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
