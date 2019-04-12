import { TestBed } from '@angular/core/testing';

import { MatchingService } from './matching.service';

describe('MatchingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MatchingService = TestBed.get(MatchingService);
    expect(service).toBeTruthy();
  });
});
