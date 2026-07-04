import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-queue',
  standalone: true,
  imports: [
    FormsModule,
    NgClass,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './queue.html',
  styleUrl: './queue.scss'
})
export class Queue {

  value: number | null = null;

  readonly CAPACITY = 6;

  readonly MAX_HISTORY = 8;

  queue = signal<number[]>([]);

  history = signal<string[]>([]);

  front = computed(() =>
    this.queue().length ? this.queue()[0] : null
  );

  rear = computed(() =>
    this.queue().length
      ? this.queue()[this.queue().length - 1]
      : null
  );

  size = computed(() => this.queue().length);

  isEmpty = computed(() => this.size() === 0);

  isFull = computed(() => this.size() === this.CAPACITY);

  enqueue() {

    if (this.value == null) return;

    if (this.isFull()) {
      this.addHistory('Queue Overflow');
      return;
    }

    this.queue.update(q => [...q, this.value!]);

    this.addHistory(`Enqueue(${this.value})`);

    this.value = null;

  }

  dequeue() {

    if (this.isEmpty()) {

      this.addHistory('Queue Underflow');

      return;

    }

    const removed = this.queue()[0];

    this.queue.update(q => q.slice(1));

    this.addHistory(`Dequeue() → ${removed}`);

  }

  peekFront() {

    if (!this.isEmpty()) {

      this.addHistory(`Front → ${this.front()}`);

    }

  }

  peekRear() {

    if (!this.isEmpty()) {

      this.addHistory(`Rear → ${this.rear()}`);

    }

  }

  reset() {

    this.queue.set([]);

    this.history.set([]);

  }

  private addHistory(message: string) {

    this.history.update(history => [

      message,

      ...history

    ].slice(0, this.MAX_HISTORY));

  }

}