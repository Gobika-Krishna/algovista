import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BinaryTree } from './binary-tree';

describe('BinaryTree', () => {
  let component: BinaryTree;
  let fixture: ComponentFixture<BinaryTree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BinaryTree],
    }).compileComponents();

    fixture = TestBed.createComponent(BinaryTree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
