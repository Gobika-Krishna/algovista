import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { OperationPanel } from '../../shared/components/operation-panel/operation-panel';
import { OperationStatus } from '../../shared/models/operation-status';
import { VisualNode } from '../../shared/models/visual-node';
import { AnimationEngineService } from '../../shared/services/animation-engine';
import { LINKED_LIST_ALGORITHMS } from '../../shared/constants/linked-list-algorithms';

@Component({
  selector: 'app-linked-list',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    OperationPanel
  ],
  templateUrl: './linked-list.html',
  styleUrl: './linked-list.scss'
})
export class LinkedList {

  constructor(public animation: AnimationEngineService) { }

  insertValue: number | null = null;

  searchValue: number | null = null;

  nodes = signal<VisualNode[]>([]);

  readonly count = computed(() => this.nodes().length);

  execution = signal<OperationStatus>({
    operation: '',
    status: '',
    timeComplexity: '',
    spaceComplexity: ''
  });

  code = signal<string[]>(LINKED_LIST_ALGORITHMS.insertFront);

  readonly isEmpty = computed(() => this.nodes().length === 0);

  // ------------------------------------------------------
  // Helpers
  // ------------------------------------------------------

  private createVisualNode(value: number): VisualNode {

    return {
      value,
      active: false,
      current: false,
      visited: false,
      found: false
    };

  }

  clearStates(): void {

    this.nodes.update(nodes =>
      nodes.map(node => ({
        ...node,
        active: false,
        current: false,
        visited: false,
        found: false
      }))
    );

  }

  setCurrent(index: number): void {

    this.nodes.update(nodes =>
      nodes.map((node, i) => ({
        ...node,
        current: i === index
      }))
    );

  }

  setVisited(index: number): void {

    this.nodes.update(nodes =>
      nodes.map((node, i) =>
        i === index
          ? { ...node, visited: true }
          : node
      )
    );

  }

  setFound(index: number): void {

    this.nodes.update(nodes =>
      nodes.map((node, i) =>
        i === index
          ? { ...node, found: true }
          : node
      )
    );

  }

  setActive(index: number): void {

    this.nodes.update(nodes =>
      nodes.map((node, i) =>
        i === index
          ? { ...node, active: true }
          : node
      )
    );

  }

  updateExecution(
    operation: string,
    status: string,
    time: string,
    space: string
  ): void {

    this.execution.set({
      operation,
      status,
      timeComplexity: time,
      spaceComplexity: space
    });

  }

  reset(): void {

    this.nodes.set([]);

    this.insertValue = null;

    this.searchValue = null;

    this.code.set(LINKED_LIST_ALGORITHMS.insertFront);

    this.animation.activeLine.set(-1);

    this.updateExecution(
      'Reset',
      'Linked List Cleared',
      '',
      ''
    );

  }

  async insertFront(): Promise<void> {

    if (this.insertValue == null) {
      return;
    }

    this.clearStates();

    this.code.set(LINKED_LIST_ALGORITHMS.insertFront);

    this.updateExecution(
      `Insert Front (${this.insertValue})`,
      'Running',
      'O(1)',
      'O(1)'
    );

    await this.animation.play([
      {
        line: 1,
        message: 'Creating new node'
      },
      {
        line: 5,
        message: 'Updating Head',
        callback: () => {

          const node = this.createVisualNode(this.insertValue!);
          node.active = true;

          this.nodes.update(nodes => [node, ...nodes]);

        }
      }
    ]);

    this.insertValue = null;

    this.updateExecution(
      'Insert Front',
      'Completed',
      'O(1)',
      'O(1)'
    );
    this.resetNodeStates();
  }

  async insertEnd(): Promise<void> {

    if (this.insertValue == null) {
      return;
    }

    this.clearStates();

    this.code.set(LINKED_LIST_ALGORITHMS.insertEnd);

    this.updateExecution(
      `Insert End (${this.insertValue})`,
      'Running',
      'O(n)',
      'O(1)'
    );

    for (let i = 0; i < this.count(); i++) {

      this.setCurrent(i);

      this.animation.activeLine.set(9);

      await new Promise(resolve => setTimeout(resolve, this.animation.speed()));

      this.setVisited(i);

    }

    this.animation.activeLine.set(12);

    const node = this.createVisualNode(this.insertValue);

    node.active = true;

    this.nodes.update(nodes => [...nodes, node]);

    await new Promise(resolve => setTimeout(resolve, this.animation.speed()));

    this.insertValue = null;

    this.updateExecution(
      'Insert End',
      'Completed',
      'O(n)',
      'O(1)'
    );
    this.resetNodeStates();
  }

  async deleteFront(): Promise<void> {

    if (this.isEmpty()) {

      this.updateExecution(
        'Delete Front',
        'List Empty',
        'O(1)',
        'O(1)'
      );

      return;

    }

    this.clearStates();

    this.code.set(LINKED_LIST_ALGORITHMS.deleteFront);

    this.updateExecution(
      'Delete Front',
      'Running',
      'O(1)',
      'O(1)'
    );

    this.setActive(0);

    await new Promise(resolve => setTimeout(resolve, this.animation.speed()));

    this.animation.activeLine.set(4);

    this.nodes.update(nodes => nodes.slice(1));

    this.updateExecution(
      'Delete Front',
      'Completed',
      'O(1)',
      'O(1)'
    );
    this.resetNodeStates();
  }

  async deleteEnd(): Promise<void> {

    if (this.isEmpty()) {

      this.updateExecution(
        'Delete End',
        'List Empty',
        'O(n)',
        'O(1)'
      );

      return;

    }

    this.clearStates();

    this.code.set(LINKED_LIST_ALGORITHMS.deleteEnd);

    this.updateExecution(
      'Delete End',
      'Running',
      'O(n)',
      'O(1)'
    );

    for (let i = 0; i < this.count() - 1; i++) {

      this.setCurrent(i);

      this.animation.activeLine.set(9);

      await new Promise(resolve => setTimeout(resolve, this.animation.speed()));

      this.setVisited(i);

    }

    this.setActive(this.count() - 1);

    await new Promise(resolve => setTimeout(resolve, this.animation.speed()));

    this.animation.activeLine.set(12);

    this.nodes.update(nodes => nodes.slice(0, -1));

    this.updateExecution(
      'Delete End',
      'Completed',
      'O(n)',
      'O(1)'
    );
    this.resetNodeStates();

  }

  async search(): Promise<void> {

    if (this.searchValue == null || this.isEmpty()) {
      return;
    }

    this.clearStates();

    this.code.set(LINKED_LIST_ALGORITHMS.search);

    this.updateExecution(
      `Search (${this.searchValue})`,
      'Running',
      'O(n)',
      'O(1)'
    );

    for (let i = 0; i < this.count(); i++) {

      this.setCurrent(i);

      this.animation.activeLine.set(2);

      await new Promise(resolve => setTimeout(resolve, this.animation.speed()));

      if (this.nodes()[i].value === this.searchValue) {

        this.animation.activeLine.set(3);

        this.setFound(i);

        this.updateExecution(
          'Search',
          'Element Found',
          'O(n)',
          'O(1)'
        );

        return;

      }

      this.setVisited(i);

    }

    this.updateExecution(
      'Search',
      'Element Not Found',
      'O(n)',
      'O(1)'
    );
    this.resetNodeStates(true);

  }
  private resetNodeStates(
    keepFound = false
  ): void {

    this.nodes.update(nodes =>
      nodes.map(node => ({
        ...node,
        active: false,
        current: false,
        visited: false,
        found: keepFound ? node.found : false
      }))
    );

  }

}