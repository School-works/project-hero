import { TestBed } from '@angular/core/testing';

import { HeroContainer } from './hero-container';

describe('HeroContainer', () => {
  let service: HeroContainer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeroContainer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
