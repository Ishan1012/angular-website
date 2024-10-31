import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsProfilesComponent } from './artists-profiles.component';

describe('ArtistsProfilesComponent', () => {
  let component: ArtistsProfilesComponent;
  let fixture: ComponentFixture<ArtistsProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtistsProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtistsProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
