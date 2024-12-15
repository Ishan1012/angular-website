import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridOneContentComponent } from './grid-one-content.component';

describe('GridOneContentComponent', () => {
  let component: GridOneContentComponent;
  let fixture: ComponentFixture<GridOneContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridOneContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridOneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
