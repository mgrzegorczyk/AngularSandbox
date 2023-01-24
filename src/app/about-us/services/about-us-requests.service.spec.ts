import { TestBed } from '@angular/core/testing';

import { AboutUsRequestsService } from './about-us-requests.service';

describe('AboutUsRequestsService', () => {
  let service: AboutUsRequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutUsRequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
