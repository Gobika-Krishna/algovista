import { TreeNode } from './tree-node';

export interface BstStep {

    node: TreeNode | null;

    action: 'visit' | 'left' | 'right' | 'insert';

    message: string;

}