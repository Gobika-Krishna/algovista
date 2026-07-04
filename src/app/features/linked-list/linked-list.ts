import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

interface LinkedListNode {
  id: number;
  value: number;
}

@Component({
  selector: 'app-linked-list',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './linked-list.html',
  styleUrl: './linked-list.scss'
})
export class LinkedList {

  value: number | null = null;

  private nextId = 1;

  readonly MAX_HISTORY = 8;

  nodes = signal<LinkedListNode[]>([]);

  history = signal<string[]>([]);

  size = computed(() => this.nodes().length);

  head = computed(() =>
    this.nodes().length ? this.nodes()[0].value : '-'
  );

  tail = computed(() =>
    this.nodes().length
      ? this.nodes()[this.nodes().length - 1].value
      : '-'
  );

  insertHead() {

    if (this.value == null) return;

    this.nodes.update(nodes => [
      {
        id: this.nextId++,
        value: this.value!
      },
      ...nodes
    ]);

    this.addHistory(`Insert Head (${this.value})`);

    this.value = null;

  }

  insertTail() {

    if (this.value == null) return;

    this.nodes.update(nodes => [
      ...nodes,
      {
        id: this.nextId++,
        value: this.value!
      }
    ]);

    this.addHistory(`Insert Tail (${this.value})`);

    this.value = null;

  }

  deleteHead() {

    if (!this.nodes().length) return;

    const removed = this.nodes()[0];

    this.nodes.update(nodes => nodes.slice(1));

    this.addHistory(`Delete Head (${removed.value})`);

  }

  deleteTail() {

    if (!this.nodes().length) return;

    const removed = this.nodes()[this.nodes().length - 1];

    this.nodes.update(nodes => nodes.slice(0, -1));

    this.addHistory(`Delete Tail (${removed.value})`);

  }

  reset() {

    this.nodes.set([]);

    this.history.set([]);

  }

  private addHistory(message: string) {

    this.history.update(history => [

      message,

      ...history

    ].slice(0, this.MAX_HISTORY));

  }

}