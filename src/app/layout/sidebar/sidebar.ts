import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NAVIGATION } from '../../shared/constants/navigation.constants';
import { NavigationItem } from '../../shared/models/navigation.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sidebar {

  readonly collapsed = input(false);

  readonly toggle = output<void>();

  readonly navigation = NAVIGATION;

  readonly expandedItems = signal(
    new Set<string>([
      'Trees',
      'Graphs',
    ])
  );

  hasChildren(item: NavigationItem): boolean {
    return !!item.children?.length;
  }

  isExpanded(item: NavigationItem): boolean {
    return this.expandedItems().has(item.label);
  }

  toggleItem(item: NavigationItem): void {

    if (!this.hasChildren(item)) {
      return;
    }

    const expanded = new Set(this.expandedItems());

    if (expanded.has(item.label)) {
      expanded.delete(item.label);
    } else {
      expanded.add(item.label);
    }

    this.expandedItems.set(expanded);

  }

}