import { TestBed } from '@angular/core/testing';

import { CalculoServiceService } from './calculo-service.service';

describe('CalculoServiceService', () => {
  let service: CalculoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
