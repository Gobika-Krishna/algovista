import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinarySearchTree } from './binary-search-tree';

describe('BinarySearchTree', () => {
  let component: BinarySearchTree;
  let fixture: ComponentFixture<BinarySearchTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinarySearchTree],
    }).compileComponents();

    fixture = TestBed.createComponent(BinarySearchTree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
