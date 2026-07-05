import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { CodeViewer } from '../../shared/components/code-viewer/code-viewer';
import { AnimationEngineService } from '../../shared/services/animation-engine';
import { MatIcon } from '@angular/material/icon';

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
    CodeViewer,
    MatIcon
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

  operation = signal('');
  status = signal('');
  timeComplexity = signal('');
  spaceComplexity = signal('');

  readonly size = computed(() => this.top() + 1);

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

    this.operation.set('Create Stack');
    this.status.set('Ready');
    this.timeComplexity.set(`O(${this.stackSize})`);
    this.spaceComplexity.set(`O(${this.stackSize})`);
  }

  async push() {

    if (this.value == null || this.stack().length === 0) {
      return;
    }

    if (this.isFull()) {
      this.code.set(this.algorithms.push);
      this.operation.set('Push');
      this.status.set('Stack Overflow');
      this.timeComplexity.set('O(1)');
      this.spaceComplexity.set('O(1)');
      return;
    }

    this.clearActive();

    this.code.set(this.algorithms.push);

    this.operation.set(`Push (${this.value})`);
    this.timeComplexity.set('O(1)');
    this.spaceComplexity.set('O(1)');

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

    this.status.set('Completed');

    this.value = null;

  }

  async pop() {

    if (this.isEmpty()) {
      this.code.set(this.algorithms.pop);
      this.operation.set('Pop');
      this.status.set('Stack Underflow');
      this.timeComplexity.set('O(1)');
      this.spaceComplexity.set('O(1)');
      return;
    }

    this.clearActive();

    this.code.set(this.algorithms.pop);

    this.operation.set('Pop');
    this.timeComplexity.set('O(1)');
    this.spaceComplexity.set('O(1)');

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

    this.status.set('Completed');

  }

  async peek() {

    if (this.isEmpty()) {
      this.code.set(this.algorithms.peek);
      this.operation.set('Peek');
      this.status.set('Stack Empty');
      this.timeComplexity.set('O(1)');
      this.spaceComplexity.set('O(1)');
      return;
    }

    this.clearActive();

    const currentTop = this.top();

    const updated = [...this.stack()];

    updated[currentTop].active = true;

    this.stack.set(updated);

    this.code.set(this.algorithms.peek);

    this.operation.set('Peek');
    this.timeComplexity.set('O(1)');
    this.spaceComplexity.set('O(1)');

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

    this.status.set(`Top = ${updated[currentTop].value}`);

  }

  reset() {

    this.stack.set([]);

    this.top.set(-1);

    this.value = null;

    this.code.set(this.algorithms.create);

    this.operation.set('Reset');

    this.status.set('Stack Cleared');

    this.timeComplexity.set('');

    this.spaceComplexity.set('');

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
}