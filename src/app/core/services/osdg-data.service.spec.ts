import { TestBed } from '@angular/core/testing';

import { OsdgDataService } from './osdg-data.service';

describe('OsdgDataService', () => {
  let service: OsdgDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsdgDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
