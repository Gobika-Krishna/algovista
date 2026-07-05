import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { TreeRenderer } from '../../../shared/components/tree-renderer/tree-renderer';
import { TreeNode } from '../../../shared/models/tree-node';
import { BstStep } from '../../../shared/models/bst-step';
import { effect } from '@angular/core';
@Component({
  selector: 'app-binary-search-tree',
  standalone: true,
  imports: [
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    TreeRenderer
  ],
  templateUrl: './binary-search-tree.html',
  styleUrl: './binary-search-tree.scss'
})
export class BinarySearchTree {

  value: number | null = null;

  root = signal<TreeNode | null>(null);

  history = signal<string[]>([]);

  steps = signal<BstStep[]>([]);
  currentStep = signal(-1);

  highlightValue = signal<number | null>(null);

  playing = signal(false);

  readonly MAX_HISTORY = 8;

  readonly size = computed(() => this.count(this.root()));


  constructor() {

    effect(() => {

      const index = this.currentStep();

      const steps = this.steps();

      if (
        index >= 0 &&
        index < steps.length
      ) {

        this.highlightValue.set(
          steps[index].node?.value ?? null
        );

      }

    });

  }
  insert(): void {

    if (this.value == null) {
      return;
    }

    const traversalSteps: BstStep[] = [];

    this.root.update(root =>
      this.insertNode(root, this.value!, traversalSteps)
    );

    this.steps.set(traversalSteps);

    this.addHistory(`Insert(${this.value})`);

    this.value = null;
  }

  reset(): void {

    this.root.set(null);

    this.steps.set([]);

    this.history.set([]);

    this.value = null;

  }

  insertSampleData(): void {

    const sample = [
      50,
      30,
      70,
      20,
      40,
      60,
      80,
      25,
      35,
      45,
      65,
      90
    ];

    this.reset();

    for (const value of sample) {

      const steps: BstStep[] = [];

      this.root.update(root =>
        this.insertNode(root, value, steps)
      );

      this.addHistory(`Insert(${value})`);

    }

    this.steps.set([]);

  }

  insertRandomTree(): void {

    this.reset();

    const numbers = new Set<number>();

    while (numbers.size < 12) {

      numbers.add(
        Math.floor(Math.random() * 90) + 10
      );

    }

    numbers.forEach(value => {

      const steps: BstStep[] = [];

      this.root.update(root =>
        this.insertNode(root, value, steps)
      );

      this.addHistory(`Insert(${value})`);

    });

    this.steps.set([]);

  }

  private insertNode(
    root: TreeNode | null,
    value: number,
    steps: BstStep[]
  ): TreeNode {

    if (!root) {

      const newNode: TreeNode = {
        value,
        left: null,
        right: null
      };

      steps.push({
        node: newNode,
        action: 'insert',
        message: `Inserted ${value}`
      });

      return newNode;
    }

    steps.push({
      node: root,
      action: 'visit',
      message: `Visit ${root.value}`
    });

    if (value < root.value) {

      steps.push({
        node: root,
        action: 'left',
        message: `${value} < ${root.value}, go left`
      });

      return {
        ...root,
        left: this.insertNode(root.left, value, steps)
      };

    }

    if (value > root.value) {

      steps.push({
        node: root,
        action: 'right',
        message: `${value} > ${root.value}, go right`
      });

      return {
        ...root,
        right: this.insertNode(root.right, value, steps)
      };

    }

    steps.push({
      node: root,
      action: 'visit',
      message: `${value} already exists`
    });

    this.addHistory(`Duplicate (${value})`);

    return root;

  }

  private count(node: TreeNode | null): number {

    if (!node) {
      return 0;
    }

    return (
      1 +
      this.count(node.left) +
      this.count(node.right)
    );

  }

  private addHistory(message: string): void {

    this.history.update(history => [

      message,

      ...history

    ].slice(0, this.MAX_HISTORY));

  }

  playSteps(): void {

    if (this.playing()) {
      return;
    }

    if (!this.steps().length) {
      return;
    }

    this.playing.set(true);

    this.currentStep.set(-1);

    const timer = setInterval(() => {

      this.currentStep.update(i => i + 1);

      if (
        this.currentStep() >= this.steps().length
      ) {

        clearInterval(timer);

        this.playing.set(false);

        this.highlightValue.set(null);

      }

    }, 700);

  }

}