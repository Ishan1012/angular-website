import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback-about-us',
  templateUrl: './feedback-about-us.component.html',
  styleUrl: './feedback-about-us.component.css'
})
export class FeedbackAboutUsComponent {
  
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
