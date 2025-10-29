import { TestBed } from '@angular/core/testing';

import { MovieEventService } from './movie-event-service';

describe('MovieEventService', () => {
  let service: MovieEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
