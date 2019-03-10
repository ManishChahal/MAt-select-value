import { TestBed, inject } from '@angular/core/testing';

import { CaptureDataService } from './capture-data.service';

describe('CaptureDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaptureDataService]
    });
  });

  it('should be created', inject([CaptureDataService], (service: CaptureDataService) => {
    expect(service).toBeTruthy();
  }));
});
