import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreeRenderer } from './tree-renderer';

describe('TreeRenderer', () => {
  let component: TreeRenderer;
  let fixture: ComponentFixture<TreeRenderer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TreeRenderer],
    }).compileComponents();

    fixture = TestBed.createComponent(TreeRenderer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
