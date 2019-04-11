import { TestBed } from '@angular/core/testing';

import { ExtractionService } from './extraction.service';

describe('ExtractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExtractionService = TestBed.get(ExtractionService);
    expect(service).toBeTruthy();
  });
});
