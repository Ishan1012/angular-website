import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogNewsSectionComponent } from './blog-news-section.component';

describe('BlogNewsSectionComponent', () => {
  let component: BlogNewsSectionComponent;
  let fixture: ComponentFixture<BlogNewsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlogNewsSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogNewsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
