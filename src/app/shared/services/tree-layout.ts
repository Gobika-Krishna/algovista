import { Injectable } from '@angular/core';
import { TreeNode } from '../models/tree-node';
import { TreeLayoutNode } from '../models/tree-layout-node';

@Injectable({
  providedIn: 'root',
})
export class TreeLayoutService {
  private readonly LEVEL_HEIGHT = 120;
  private readonly INITIAL_OFFSET = 220;

  layout(root: TreeNode | null): TreeLayoutNode[] {
    if (!root) {
      return [];
    }

    const result: TreeLayoutNode[] = [];

    this.calculate(
      root,
      700, // Initial X position
      60,  // Initial Y position
      this.INITIAL_OFFSET,
      0,
      undefined,
      result
    );

    return result;
  }

  private calculate(
    node: TreeNode | null,
    x: number,
    y: number,
    offset: number,
    level: number,
    parent: TreeLayoutNode | undefined,
    result: TreeLayoutNode[]
  ): void {
    if (!node) {
      return;
    }

    const current: TreeLayoutNode = {
      node,
      x,
      y,
      level,
      parent,
    };

    result.push(current);

    this.calculate(
      node.left,
      x - offset,
      y + this.LEVEL_HEIGHT,
      offset / 2,
      level + 1,
      current,
      result
    );

    this.calculate(
      node.right,
      x + offset,
      y + this.LEVEL_HEIGHT,
      offset / 2,
      level + 1,
      current,
      result
    );
  }
}