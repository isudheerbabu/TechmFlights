import { TestBed } from '@angular/core/testing';

import { FlightResultsService } from './flight-results.service';

describe('FlightResultsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlightResultsService = TestBed.get(FlightResultsService);
    expect(service).toBeTruthy();
  });
});
