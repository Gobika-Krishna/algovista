import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CodeViewer } from '../../shared/components/code-viewer/code-viewer';
import { AnimationEngineService } from '../../shared/services/animation-engine';
import { MatIconModule } from '@angular/material/icon';
import { OperationStatus } from '../../shared/models/operation-status';
import { OperationPanel } from '../../shared/components/operation-panel/operation-panel';
interface StackCell {
  value: number | null;
  active: boolean;
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    OperationPanel,
    MatIconModule
  ],
  templateUrl: './stack.html',
  styleUrl: './stack.scss'
})
export class Stack {

  constructor(public animation: AnimationEngineService) { }

  stackSize = 5;
  value: number | null = null;

  stack = signal<StackCell[]>([]);
  top = signal(-1);
  execution = signal<OperationStatus>({
    operation: '',
    status: '',
    timeComplexity: '',
    spaceComplexity: ''
  });

  readonly size = computed(() => this.top() + 1);
  readonly isCreated = computed(() => this.stack().length > 0);

  readonly algorithms = {
    create: [
      'create(size){',
      '   stack = new Array(size);',
      '   top = -1;',
      '}'
    ],
    push: [
      'push(value){',
      '   if(isFull()) return;',
      '   top++;',
      '   stack[top]=value;',
      '}'
    ],
    pop: [
      'pop(){',
      '   if(isEmpty()) return;',
      '   value = stack[top];',
      '   top--;',
      '}'
    ],
    peek: [
      'peek(){',
      '   if(isEmpty()) return;',
      '   return stack[top];',
      '}'
    ]
  };

  code = signal<string[]>(this.algorithms.create);

  createStack() {

    const cells: StackCell[] = [];

    for (let i = 0; i < this.stackSize; i++) {
      cells.push({
        value: null,
        active: false
      });
    }

    this.stack.set(cells);
    this.top.set(-1);

    this.code.set(this.algorithms.create);

    this.updateExecution(
      'Create Stack',
      'Ready',
      `O(${this.stackSize})`,
      `O(${this.stackSize})`
    );
  }

  async push() {

    if (this.value == null || this.stack().length === 0) {
      return;
    }

    if (this.isFull()) {
      this.code.set(this.algorithms.push);
      this.updateExecution(
        'Push',
        'Stack Overflow',
        'O(1)',
        'O(1)'
      );
      return;
    }

    this.clearActive();

    this.code.set(this.algorithms.push);

    this.updateExecution(
      `Push (${this.value})`,
      'Running',
      'O(1)',
      'O(1)'
    );

    const value = this.value;

    await this.animation.play([
      {
        line: 1,
        message: 'Checking Overflow'
      },
      {
        line: 2,
        message: 'Moving TOP'
      },
      {
        line: 3,
        message: 'Inserting Value',
        callback: () => {

          const nextTop = this.top() + 1;

          const updated = [...this.stack()];

          updated[nextTop] = {
            value,
            active: true
          };

          this.stack.set(updated);

          this.top.set(nextTop);

        }
      }
    ]);

    this.updateExecution(
      `Push (${value})`,
      'Completed',
      'O(1)',
      'O(1)'
    );

    this.value = null;

  }

  async pop() {

    if (this.isEmpty()) {
      this.code.set(this.algorithms.pop);
      this.updateExecution(
        'Pop',
        'Stack Underflow',
        'O(1)',
        'O(1)'
      );
      return;
    }

    this.clearActive();

    this.code.set(this.algorithms.pop);

    this.updateExecution(
      'Pop',
      'Running',
      'O(1)',
      'O(1)'
    );

    await this.animation.play([
      {
        line: 1,
        message: 'Checking Underflow'
      },
      {
        line: 2,
        message: 'Reading Top Element'
      },
      {
        line: 3,
        message: 'Updating TOP',
        callback: () => {

          const currentTop = this.top();

          const updated = [...this.stack()];

          updated[currentTop] = {
            value: null,
            active: false
          };

          this.stack.set(updated);

          this.top.set(currentTop - 1);

        }
      }
    ]);

    this.updateExecution(
      'Pop',
      'Completed',
      'O(1)',
      'O(1)'
    );

  }

  async peek() {

    if (this.isEmpty()) {
      this.code.set(this.algorithms.peek);
      this.updateExecution(
        'Peek',
        'Stack Empty',
        'O(1)',
        'O(1)'
      );
      return;
    }

    this.clearActive();

    const currentTop = this.top();

    const updated = [...this.stack()];

    updated[currentTop].active = true;

    this.stack.set(updated);

    this.code.set(this.algorithms.peek);

    this.updateExecution(
      'Peek',
      'Running',
      'O(1)',
      'O(1)'
    );

    await this.animation.play([
      {
        line: 1,
        message: 'Checking Stack'
      },
      {
        line: 2,
        message: `Top = ${updated[currentTop].value}`
      }
    ]);

    this.updateExecution(
      'Peek',
      `Top = ${updated[currentTop].value}`,
      'O(1)',
      'O(1)'
    );

  }

  reset() {

    this.stack.set([]);

    this.top.set(-1);

    this.value = null;

    this.code.set(this.algorithms.create);

    this.updateExecution(
      'Reset',
      'Stack Cleared',
      '',
      ''
    );

    this.animation.activeLine.set(-1);

  }

  private clearActive() {
    const updated = [...this.stack()];

    updated.forEach(cell => cell.active = false);

    this.stack.set(updated);
  }

  isFull(): boolean {
    return this.top() === this.stack().length - 1;
  }

  isEmpty(): boolean {
    return this.top() === -1;
  }

  private updateExecution(
    operation: string,
    status: string,
    time: string,
    space: string
  ) {

    this.execution.set({
      operation,
      status,
      timeComplexity: time,
      spaceComplexity: space
    });

  }
}