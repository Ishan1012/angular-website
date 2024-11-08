import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginDashboardComponent } from './admin-login-dashboard.component';

describe('AdminLoginDashboardComponent', () => {
  let component: AdminLoginDashboardComponent;
  let fixture: ComponentFixture<AdminLoginDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLoginDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminLoginDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
