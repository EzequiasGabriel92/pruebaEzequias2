import { TestBed } from '@angular/core/testing';

import { ETrabajoService } from './e-trabajo.service';

describe('ETrabajoService', () => {
  let service: ETrabajoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ETrabajoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
