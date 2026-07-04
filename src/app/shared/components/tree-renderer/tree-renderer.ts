import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { TreeNode } from '../../models/tree-node';
import { TreeLayoutNode } from '../../models/tree-layout-node';
import { TreeLayoutService } from '../../services/tree-layout';

@Component({
  selector: 'app-tree-renderer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-renderer.html',
  styleUrl: './tree-renderer.scss',
})
export class TreeRenderer implements OnChanges {

  @Input({ required: true })
  root!: TreeNode | null;

  nodes: TreeLayoutNode[] = [];

  constructor(
    private layoutService: TreeLayoutService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (changes['root']) {

      this.nodes = this.layoutService.layout(this.root);

    }

  }

}