import { Component } from '@angular/core';
import { NewslettersService } from '../services/newsletters.service';

@Component({
  selector: 'app-blog-news-section',
  templateUrl: './blog-news-section.component.html',
  styleUrl: './blog-news-section.component.css'
})
export class BlogNewsSectionComponent {
  newsletters!: any;

  constructor(
    private getNewsletters: NewslettersService
  ) {
    this.getNewsletters.getAll().subscribe((newsletter) => {
      this.newsletters = newsletter;
    })
  }

  trackByFn(item: any) {
    return item.id;
  }
}
