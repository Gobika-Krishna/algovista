import { TestBed } from '@angular/core/testing';

import { TreeLayout } from './tree-layout';

describe('TreeLayout', () => {
  let service: TreeLayout;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeLayout);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
