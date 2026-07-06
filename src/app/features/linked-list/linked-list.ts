import { Component, computed, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { OperationPanel } from '../../shared/components/operation-panel/operation-panel';
import { LINKED_LIST_ALGORITHMS } from '../../shared/constants/linked-list-algorithms';
import { ExecutionEngine } from '../../shared/execution/execution-engine.service';
import { step } from '../../shared/execution/execution-builder';
import { OperationStatus } from '../../shared/models/operation-status';
import { VisualNode } from '../../shared/models/visual-node';

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

  constructor(public execution: ExecutionEngine) { }

  readonly insertValue = model<number | null>(null);

  readonly searchValue = model<number | null>(null);

  readonly nodes = signal<VisualNode[]>([]);

  readonly count = computed(() => this.nodes().length);

  readonly isEmpty = computed(() => this.count() === 0);

  readonly code = signal<string[]>(LINKED_LIST_ALGORITHMS.insertFront);

  readonly executionStatus = signal<OperationStatus>({
    operation: '',
    status: '',
    timeComplexity: '',
    spaceComplexity: ''
  });

  private createNode(value: number): VisualNode {
    return {
      value,
      active: false,
      current: false,
      visited: false,
      found: false
    };
  }

  private updateNode(
    index: number,
    changes: Partial<VisualNode>
  ): void {
    this.nodes.update(nodes =>
      nodes.map((node, i) =>
        i === index
          ? {
            ...node,
            ...changes
          }
          : node
      )
    );
  }

  private clearNodeStates(): void {
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

  private updateExecution(
    operation: string,
    status: string,
    time: string,
    space: string
  ): void {
    this.executionStatus.set({
      operation,
      status,
      timeComplexity: time,
      spaceComplexity: space
    });
  }

  reset(): void {
    this.nodes.set([]);
    this.insertValue.set(null);
    this.searchValue.set(null);
    this.code.set(LINKED_LIST_ALGORITHMS.insertFront);
    this.execution.reset();
    this.updateExecution(
      'Reset',
      'Linked List Cleared',
      '',
      ''
    );
  }

  async insertFront(): Promise<void> {

    if (this.insertValue() == null) {
      return;
    }

    this.clearNodeStates();

    this.code.set(LINKED_LIST_ALGORITHMS.insertFront);

    this.updateExecution(
      `Insert Front (${this.insertValue()})`,
      'Running',
      'O(1)',
      'O(1)'
    );

    const node = this.createNode(this.insertValue()!);

    // Line 0
    await this.execution.step(
      step(0, 'Starting Insert Front')
    );

    // Line 1
    await this.execution.step(
      step(1, 'Creating New Node')
    );

    // Line 3
    await this.execution.step(
      step(
        3,
        'Linking New Node To Head'
      )
    );

    // Line 5
    await this.execution.step(
      step(
        5,
        'Updating Head',
        () => {

          this.nodes.update(nodes => [

            {
              ...node,
              active: true
            },

            ...nodes

          ]);

        }
      )
    );

    this.insertValue.set(null);

    this.updateExecution(
      'Insert Front',
      'Completed',
      'O(1)',
      'O(1)'
    );

    this.execution.reset();

  }

  async insertEnd(): Promise<void> {

    if (this.insertValue() == null) {
      return;
    }

    this.clearNodeStates();

    this.code.set(LINKED_LIST_ALGORITHMS.insertEnd);

    this.updateExecution(
      `Insert End (${this.insertValue()})`,
      'Running',
      'O(n)',
      'O(1)'
    );

    const node = this.createNode(this.insertValue()!);

    // Line 0
    await this.execution.step(
      step(0, 'Starting Insert End')
    );

    // Line 1
    await this.execution.step(
      step(1, 'Creating New Node')
    );

    // Line 2
    await this.execution.step(
      step(2, 'Checking Head')
    );

    if (this.isEmpty()) {

      // Line 3
      await this.execution.step(
        step(
          3,
          'Head Points To New Node',
          () => {

            this.nodes.update(nodes => [

              {
                ...node,
                active: true
              }

            ]);

          }
        )
      );

      this.insertValue.set(null);

      this.updateExecution(
        'Insert End',
        'Completed',
        'O(1)',
        'O(1)'
      );

      this.execution.reset();

      return;

    }

    // Line 6
    await this.execution.step(
      step(
        6,
        'Initializing Current',
        () => {

          this.updateNode(0, {
            current: true
          });

        }
      )
    );

    for (let i = 0; i < this.count() - 1; i++) {

      // Line 7
      await this.execution.step(
        step(
          7,
          'Checking Next Node'
        )
      );

      // Line 8
      await this.execution.step(
        step(
          8,
          'Moving Current',
          () => {

            this.updateNode(i, {
              current: false,
              visited: true
            });

            this.updateNode(i + 1, {
              current: true
            });

          }
        )
      );

    }

    // Final while() check -> false
    await this.execution.step(
      step(
        7,
        'Reached Last Node'
      )
    );

    this.clearNodeStates();

    // Line 10
    await this.execution.step(
      step(
        10,
        'Connecting New Node',
        () => {

          this.nodes.update(nodes => [

            ...nodes,

            {
              ...node,
              active: true
            }

          ]);

        }
      )
    );

    this.insertValue.set(null);

    this.updateExecution(
      'Insert End',
      'Completed',
      'O(n)',
      'O(1)'
    );

    this.execution.reset();

  }

  async deleteFront(): Promise<void> {

    if (this.isEmpty()) {
      this.updateExecution(
        'Delete Front',
        'Linked List Empty',
        'O(1)',
        'O(1)'
      );
      return;
    }

    this.clearNodeStates();

    this.code.set(LINKED_LIST_ALGORITHMS.deleteFront);

    this.updateExecution(
      'Delete Front',
      'Running',
      'O(1)',
      'O(1)'
    );

    // Line 0
    await this.execution.step(
      step(
        0,
        'Starting Delete Front'
      )
    );

    // Line 1
    await this.execution.step(
      step(
        1,
        'Checking Head'
      )
    );

    // Highlight first node
    this.updateNode(0, {
      active: true
    });

    // Line 4
    await this.execution.step(
      step(
        4,
        'Moving Head',
        () => {

          this.nodes.update(nodes =>
            nodes.slice(1)
          );

        }
      )
    );

    this.updateExecution(
      'Delete Front',
      'Completed',
      'O(1)',
      'O(1)'
    );

    this.execution.reset();

  }

  async deleteEnd(): Promise<void> {

    if (this.isEmpty()) {
      this.updateExecution(
        'Delete End',
        'Linked List Empty',
        'O(n)',
        'O(1)'
      );
      return;
    }

    this.clearNodeStates();

    this.code.set(LINKED_LIST_ALGORITHMS.deleteEnd);

    this.updateExecution(
      'Delete End',
      'Running',
      'O(n)',
      'O(1)'
    );

    // Line 0
    await this.execution.step(
      step(0, 'Starting Delete End')
    );

    // Line 1
    await this.execution.step(
      step(1, 'Checking Empty List')
    );

    if (this.count() === 1) {

      // Line 4
      await this.execution.step(
        step(4, 'Checking Single Node')
      );

      // Line 5
      await this.execution.step(
        step(
          5,
          'Removing Last Node',
          () => {

            this.updateNode(0, {
              active: true
            });

            this.nodes.set([]);

          }
        )
      );

      this.updateExecution(
        'Delete End',
        'Completed',
        'O(1)',
        'O(1)'
      );

      this.execution.reset();

      return;

    }

    // Line 4
    await this.execution.step(
      step(4, 'Checking Single Node')
    );

    // Line 8
    await this.execution.step(
      step(
        8,
        'Initializing Current',
        () => {

          this.updateNode(0, {
            current: true
          });

        }
      )
    );

    for (let i = 0; i < this.count() - 2; i++) {

      // Line 9
      await this.execution.step(
        step(
          9,
          'Checking Next Node'
        )
      );

      // Line 10
      await this.execution.step(
        step(
          10,
          'Moving Current',
          () => {

            this.updateNode(i, {
              current: false,
              visited: true
            });

            this.updateNode(i + 1, {
              current: true
            });

          }
        )
      );

    }

    // Final while() check -> false
    await this.execution.step(
      step(
        9,
        'Reached Previous Node'
      )
    );

    this.clearNodeStates();

    // Line 12
    await this.execution.step(
      step(
        12,
        'Removing Last Node',
        () => {

          this.nodes.update(nodes =>
            nodes.slice(0, -1)
          );

        }
      )
    );

    this.updateExecution(
      'Delete End',
      'Completed',
      'O(n)',
      'O(1)'
    );

    this.execution.reset();

  }

  async search(): Promise<void> {

    if (this.searchValue() == null || this.isEmpty()) {
      return;
    }

    this.clearNodeStates();

    this.code.set(LINKED_LIST_ALGORITHMS.search);

    this.updateExecution(
      `Search (${this.searchValue()})`,
      'Running',
      'O(n)',
      'O(1)'
    );

    // Line 0
    await this.execution.step(
      step(0, 'Starting Search')
    );

    // Line 1
    await this.execution.step(
      step(
        1,
        'Initializing Current',
        () => {

          this.updateNode(0, {
            current: true
          });

        }
      )
    );

    for (let i = 0; i < this.count(); i++) {

      // Line 2
      await this.execution.step(
        step(
          2,
          'Checking Current Node'
        )
      );

      // Line 3
      await this.execution.step(
        step(
          3,
          'Comparing Value'
        )
      );

      if (this.nodes()[i].value === this.searchValue()) {

        this.clearNodeStates();

        this.updateNode(i, {
          found: true
        });

        this.updateExecution(
          'Search',
          `Found ${this.searchValue()} at position ${i + 1}`,
          'O(n)',
          'O(1)'
        );

        this.execution.reset();

        return;

      }

      if (i < this.count() - 1) {

        // Line 6
        await this.execution.step(
          step(
            6,
            'Moving Current',
            () => {

              this.updateNode(i, {
                current: false,
                visited: true
              });

              this.updateNode(i + 1, {
                current: true
              });

            }
          )
        );

      } else {

        this.updateNode(i, {
          current: false,
          visited: true
        });

      }

    }

    // Final while(current) == false
    await this.execution.step(
      step(
        2,
        'Reached End Of List'
      )
    );

    this.clearNodeStates();

    this.updateExecution(
      'Search',
      `${this.searchValue()} not found`,
      'O(n)',
      'O(1)'
    );

    this.execution.reset();

  }

}