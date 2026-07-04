import { TreeNode } from './tree-node';

export interface TreeLayoutNode {

    node: TreeNode;

    x: number;

    y: number;

    level: number;

    parent?: TreeLayoutNode;

}