import { TestBed } from '@angular/core/testing';

import { AtletasService } from './atletismo.service';

describe('AtletasService', () => {
  let service: AtletasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtletasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
