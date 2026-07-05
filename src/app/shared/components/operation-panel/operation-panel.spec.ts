import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationPanel } from './operation-panel';

describe('OperationPanel', () => {
  let component: OperationPanel;
  let fixture: ComponentFixture<OperationPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperationPanel],
    }).compileComponents();

    fixture = TestBed.createComponent(OperationPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
