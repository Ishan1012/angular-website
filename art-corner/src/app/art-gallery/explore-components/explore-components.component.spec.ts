import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreComponentsComponent } from './explore-components.component';

describe('ExploreComponentsComponent', () => {
  let component: ExploreComponentsComponent;
  let fixture: ComponentFixture<ExploreComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreComponentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExploreComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
