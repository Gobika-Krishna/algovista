import { Component, computed, signal } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
  selector: "app-stack",
  standalone: true,
  imports: [FormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: "./stack.html",
  styleUrl: "./stack.scss",
})
export class Stack {
  readonly MAX_HISTORY = 8;
  value: number | null = null;
  stack = signal<number[]>([]);
  history = signal<string[]>([]);
  lastOperation = signal("No Operation");

  top = computed(() => {
    const items = this.stack();
    return items.length ? items[items.length - 1] : null;
  });

  size = computed(() => this.stack().length);
  isEmpty = computed(() => this.stack().length === 0);

  push(): void {
    if (this.value === null) {
      return;
    }

    const newValue = this.value;
    this.stack.update((stack) => [...stack, newValue]);
    this.addHistory(`Push(${newValue})`);
    this.lastOperation.set(`Push(${newValue})`);
    this.value = null;
  }

  pop(): void {
    if (this.isEmpty()) {
      return;
    }
    const items = [...this.stack()];
    const removed = items.pop();
    this.stack.set(items);
    this.addHistory(`Pop() → ${removed}`);
    this.lastOperation.set(`Pop() → ${removed}`);
  }

  peek(): void {
    if (this.isEmpty()) {
      return;
    }
    this.addHistory(`Peek() → ${this.top()}`);
    this.lastOperation.set(`Peek() → ${this.top()}`);
  }

  reset(): void {
    this.stack.set([]);
    this.history.set([]);
    this.lastOperation.set("Reset Stack");
  }

  private addHistory(operation: string): void {
    this.history.update((history) => {
      const updated = [operation, ...history];
      return updated.slice(0, this.MAX_HISTORY);
    });
  }
}
