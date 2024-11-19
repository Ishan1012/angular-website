import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IFeedback } from '../shared/interfaces/IFeedback';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-feedback-about-us',
  templateUrl: './feedback-about-us.component.html',
  styleUrl: './feedback-about-us.component.css'
})
export class FeedbackAboutUsComponent {
  postForm!: FormGroup;
  returnUrl = '';

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastrService,
    private userService: UserService,
    private route: Router,
    private fromBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.scrollToTop(); this.postForm = this.fromBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
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

  scrollToElement(elementId: string) {
    const element = document.getElementById(elementId);

    if (element) {
      element.scrollIntoView({
        behavior:
          'smooth'
      });
    } else {
      console.error(`Element with ID "${elementId}" 
   not found.`);
    }
  }

  onSubmit(): void {
    if (this.postForm.invalid) {
      const nameControl = this.postForm.get('name');
      const emailControl = this.postForm.get('email');
      const subjectControl = this.postForm.get('subject');
      const messageControl = this.postForm.get('message');

      if (nameControl?.hasError("required")) {
        this.toastr.error('Name is required!', 'Feedback Submission Failed!');
      }

      if (emailControl?.hasError("required")) {
        this.toastr.error('Email is required!', 'Feedback Submission Failed!');
      }
      else if (emailControl?.hasError("email")) {
        this.toastr.error('Email is invalid!', 'Feedback Submission Failed!');
      }

      if (subjectControl?.hasError("required")) {
        this.toastr.error('Subject is required!', 'Feedback Submission Failed!');
      }

      if (messageControl?.hasError("required")) {
        this.toastr.error('Message is required!', 'Feedback Submission Failed!');
      }

      return;
    }
    const fv = this.postForm.value;
    const feedback: IFeedback = {
      name: fv.name,
      email: fv.email,
      subject: fv.subject,
      description: fv.message
    }

    this.userService.sendFeedback(feedback).subscribe(_ => {
      this.route.navigateByUrl(this.returnUrl);
    })
  }
}
