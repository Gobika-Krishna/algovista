import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { AnimationEngineService } from '../../shared/services/animation-engine';
import { OperationPanel } from '../../shared/components/operation-panel/operation-panel';
import { OperationStatus } from '../../shared/models/operation-status';
import { QUEUE_ALGORITHMS } from '../../shared/constants/queue-algorithms';

interface QueueCell {
  value: number | null;
  active: boolean;
}

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    OperationPanel
  ],
  templateUrl: './queue.html',
  styleUrl: './queue.scss'
})
export class Queue {

  constructor(public animation: AnimationEngineService) { }

  queueSize = 5;

  value: number | null = null;

  queue = signal<QueueCell[]>([]);

  front = signal(-1);

  rear = signal(-1);

  execution = signal<OperationStatus>({
    operation: '',
    status: '',
    timeComplexity: '',
    spaceComplexity: ''
  });

  code = signal<string[]>(QUEUE_ALGORITHMS.create);

  readonly size = computed(() => {
    if (this.isEmpty()) {
      return 0;
    }

    return this.rear() - this.front() + 1;
  });

  readonly isCreated = computed(() => {
    return this.queue().length > 0;
  });

  async createQueue() {

    const cells: QueueCell[] = [];

    for (let i = 0; i < this.queueSize; i++) {

      cells.push({
        value: null,
        active: false
      });

    }

    this.code.set(QUEUE_ALGORITHMS.create);

    this.updateExecution(
      'Create Queue',
      'Running',
      `O(${this.queueSize})`,
      `O(${this.queueSize})`
    );

    await this.animation.play([
      {
        line: 0,
        message: 'Allocating Queue'
      },
      {
        line: 1,
        message: 'Initializing Queue'
      },
      {
        line: 2,
        message: 'Setting Front & Rear',
        callback: () => {

          this.queue.set(cells);

          this.front.set(-1);

          this.rear.set(-1);

        }
      },
      {
        line: 3,
        message: 'Queue Ready'
      }
    ]);

    this.updateExecution(
      'Create Queue',
      'Completed',
      `O(${this.queueSize})`,
      `O(${this.queueSize})`
    );

  }

  private clearActive() {

    const updated = [...this.queue()];

    updated.forEach(cell => cell.active = false);

    this.queue.set(updated);

  }

  isFull(): boolean {

    return this.rear() === this.queue().length - 1;

  }

  isEmpty(): boolean {

    return this.front() === -1;

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

  async enqueue() {

    if (this.value == null || !this.isCreated()) {
      return;
    }

    if (this.isFull()) {

      this.code.set(QUEUE_ALGORITHMS.enqueue);

      this.updateExecution(
        'Enqueue',
        'Queue Overflow',
        'O(1)',
        'O(1)'
      );

      return;

    }

    this.clearActive();

    this.code.set(QUEUE_ALGORITHMS.enqueue);

    this.updateExecution(
      `Enqueue (${this.value})`,
      'Running',
      'O(1)',
      'O(1)'
    );

    const value = this.value;

    await this.animation.play([
      {
        line: 0,
        message: 'Starting Enqueue'
      },
      {
        line: 1,
        message: 'Checking Overflow'
      },
      {
        line: 2,
        message: 'Initializing FRONT',
        callback: () => {

          if (this.front() === -1) {
            this.front.set(0);
          }

        }
      },
      {
        line: 3,
        message: 'Moving REAR'
      },
      {
        line: 4,
        message: 'Inserting Value',
        callback: () => {

          const nextRear = this.rear() + 1;

          const updated = [...this.queue()];

          updated[nextRear] = {
            value,
            active: true
          };

          this.queue.set(updated);

          this.rear.set(nextRear);

        }
      }
    ]);

    this.updateExecution(
      `Enqueue (${value})`,
      'Completed',
      'O(1)',
      'O(1)'
    );

    this.value = null;

  }

  async dequeue() {

    if (this.isEmpty()) {

      this.code.set(QUEUE_ALGORITHMS.dequeue);

      this.updateExecution(
        'Dequeue',
        'Queue Underflow',
        'O(1)',
        'O(1)'
      );

      return;

    }

    this.clearActive();

    this.code.set(QUEUE_ALGORITHMS.dequeue);

    this.updateExecution(
      'Dequeue',
      'Running',
      'O(1)',
      'O(1)'
    );

    await this.animation.play([
      {
        line: 0,
        message: 'Starting Dequeue'
      },
      {
        line: 1,
        message: 'Checking Underflow'
      },
      {
        line: 2,
        message: 'Removing Front Element',
        callback: () => {

          const currentFront = this.front();

          const updated = [...this.queue()];

          updated[currentFront] = {
            value: null,
            active: false
          };

          this.queue.set(updated);

          if (currentFront === this.rear()) {

            this.front.set(-1);
            this.rear.set(-1);

          } else {

            this.front.set(currentFront + 1);

          }

        }
      }
    ]);

    this.updateExecution(
      'Dequeue',
      'Completed',
      'O(1)',
      'O(1)'
    );

  }

  async frontElement() {

    if (this.isEmpty()) {

      this.code.set(QUEUE_ALGORITHMS.front);

      this.updateExecution(
        'Front',
        'Queue Empty',
        'O(1)',
        'O(1)'
      );

      return;

    }

    this.clearActive();

    const updated = [...this.queue()];

    updated[this.front()].active = true;

    this.queue.set(updated);

    this.code.set(QUEUE_ALGORITHMS.front);

    this.updateExecution(
      'Front',
      'Running',
      'O(1)',
      'O(1)'
    );

    await this.animation.play([
      {
        line: 0,
        message: 'Reading Front Element'
      },
      {
        line: 1,
        message: `Front = ${updated[this.front()].value}`
      }
    ]);

    this.updateExecution(
      'Front',
      `Front = ${updated[this.front()].value}`,
      'O(1)',
      'O(1)'
    );

  }

  reset() {

    this.queue.set([]);

    this.front.set(-1);

    this.rear.set(-1);

    this.value = null;

    this.code.set(QUEUE_ALGORITHMS.create);

    this.updateExecution(
      'Reset',
      'Queue Cleared',
      '',
      ''
    );

    this.animation.activeLine.set(-1);

  }

}