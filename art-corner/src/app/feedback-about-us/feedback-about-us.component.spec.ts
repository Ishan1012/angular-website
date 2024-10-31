import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackAboutUsComponent } from './feedback-about-us.component';

describe('FeedbackAboutUsComponent', () => {
  let component: FeedbackAboutUsComponent;
  let fixture: ComponentFixture<FeedbackAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeedbackAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
