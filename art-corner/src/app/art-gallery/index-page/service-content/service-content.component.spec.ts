import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceContentComponent } from './service-content.component';

describe('ServiceContentComponent', () => {
  let component: ServiceContentComponent;
  let fixture: ComponentFixture<ServiceContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
