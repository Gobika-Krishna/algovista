import { TestBed } from '@angular/core/testing';

import { AnimationEngine } from './animation-engine';

describe('AnimationEngine', () => {
  let service: AnimationEngine;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimationEngine);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
