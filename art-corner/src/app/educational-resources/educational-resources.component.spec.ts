import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationalResourcesComponent } from './educational-resources.component';

describe('EducationalResourcesComponent', () => {
  let component: EducationalResourcesComponent;
  let fixture: ComponentFixture<EducationalResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducationalResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationalResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
