import { TestBed } from '@angular/core/testing';

import { TimerconfigService } from './timerconfig.service';

describe('TimerconfigService', () => {
  let service: TimerconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimerconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
