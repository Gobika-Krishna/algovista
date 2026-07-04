import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from '../../models/tree-node';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule, TreeView],
  templateUrl: './tree-view.html',
  styleUrl: './tree-view.scss'
})
export class TreeView {

  @Input({ required: true })
  root!: TreeNode | null;

  @Input()
  depth = 0;

}