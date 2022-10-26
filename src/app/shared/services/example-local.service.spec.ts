import { TestBed } from '@angular/core/testing';

import { ExampleLocalService } from './example-local.service';

describe('ExampleLocalService', () => {
  let service: ExampleLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
