import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TreeNode } from '../../../shared/models/tree-node';
import { TreeRenderer } from '../../../shared/components/tree-renderer/tree-renderer';

@Component({
  selector: 'app-binary-tree',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    TreeRenderer
  ],
  templateUrl: './binary-tree.html',
  styleUrl: './binary-tree.scss'
})
export class BinaryTree {

  value: number | null = null;

  history = signal<string[]>([]);

  root = signal<TreeNode | null>(null);

  readonly MAX_HISTORY = 8;

  readonly size = computed(() => this.count(this.root()));

  insert() {

    if (this.value == null) {
      return;
    }

    const node: TreeNode = {
      value: this.value,
      left: null,
      right: null
    };

    if (!this.root()) {

      this.root.set(node);

    } else {

      this.insertLevelOrder(this.root()!, node);

      this.root.set(structuredClone(this.root()!));

    }

    this.addHistory(`Insert(${this.value})`);

    this.value = null;

  }

  reset() {

    this.root.set(null);

    this.history.set([]);

  }

  private insertLevelOrder(root: TreeNode, node: TreeNode) {

    const queue: TreeNode[] = [root];

    while (queue.length) {

      const current = queue.shift()!;

      if (!current.left) {

        current.left = node;

        return;

      }

      if (!current.right) {

        current.right = node;

        return;

      }

      queue.push(current.left);

      queue.push(current.right);

    }

  }

  private count(node: TreeNode | null): number {

    if (!node) {

      return 0;

    }

    return 1 +
      this.count(node.left) +
      this.count(node.right);

  }

  private addHistory(operation: string) {

    this.history.update(history => [
      operation,
      ...history
    ].slice(0, this.MAX_HISTORY));

  }

}