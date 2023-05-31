import { TestBed } from '@angular/core/testing';

import { UtilitiesCommonService } from './utilities-common.service';

describe('UtilitiesCommonService', () => {
  let service: UtilitiesCommonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilitiesCommonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
