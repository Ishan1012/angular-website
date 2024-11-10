import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityDescriptionComponent } from './community-description.component';

describe('CommunityDescriptionComponent', () => {
  let component: CommunityDescriptionComponent;
  let fixture: ComponentFixture<CommunityDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommunityDescriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommunityDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
