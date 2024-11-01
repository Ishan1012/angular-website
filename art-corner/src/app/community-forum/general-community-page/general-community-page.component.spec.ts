import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCommunityPageComponent } from './general-community-page.component';

describe('GeneralCommunityPageComponent', () => {
  let component: GeneralCommunityPageComponent;
  let fixture: ComponentFixture<GeneralCommunityPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GeneralCommunityPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralCommunityPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
