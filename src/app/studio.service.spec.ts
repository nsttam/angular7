import { TestBed } from '@angular/core/testing';

import { StudioService } from './studio.service';

describe('StudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StudioService = TestBed.get(StudioService);
    expect(service).toBeTruthy();
  });
});
