import { TestBed } from '@angular/core/testing';

import { Theme.ServiceService } from './theme.service';

describe('Theme.ServiceService', () => {
  let service: Theme.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Theme.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
