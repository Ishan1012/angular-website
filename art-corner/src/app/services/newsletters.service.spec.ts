import { TestBed } from '@angular/core/testing';

import { NewslettersService } from './newsletters.service';

describe('NewslettersService', () => {
  let service: NewslettersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewslettersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
