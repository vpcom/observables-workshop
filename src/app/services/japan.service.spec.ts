import { TestBed } from '@angular/core/testing';

import { JapanService } from './japan.service';

describe('JapanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JapanService = TestBed.get(JapanService);
    expect(service).toBeTruthy();
  });
});
