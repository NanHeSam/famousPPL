import { TestBed, inject } from '@angular/core/testing';

import { FamousPplServiceService } from './famous-ppl-service.service';

describe('FamousPplServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FamousPplServiceService]
    });
  });

  it('should be created', inject([FamousPplServiceService], (service: FamousPplServiceService) => {
    expect(service).toBeTruthy();
  }));
});
