import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-feedback-about-us',
  templateUrl: './feedback-about-us.component.html',
  styleUrl: './feedback-about-us.component.css'
})
export class FeedbackAboutUsComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: any)
  {}

  ngOnInit() {
    this.scrollToTop();
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
      element.scrollIntoView({ behavior: 
   'smooth' });
    } else {
      console.error(`Element with ID "${elementId}" 
   not found.`);
    }
  }
}
