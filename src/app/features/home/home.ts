import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatChipsModule,
    MatIconModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {

  readonly technologies = [
    'Angular 21',
    'TypeScript',
    'Signals',
    'RxJS',
    'Angular Material',
    'SCSS',
    'Responsive Design',
    'Animations'
  ];

  readonly highlights = [
    {
      icon: 'animation',
      title: 'Interactive Visualizations',
      description: 'Smooth animations bringing data structures and algorithms to life.'
    },
    {
      icon: 'code',
      title: 'Algorithm Execution',
      description: 'Step-by-step execution with syntax highlighting and complexity analysis.'
    },
    {
      icon: 'widgets',
      title: 'Reusable Components',
      description: 'Built with modular standalone components and clean architecture.'
    },
    {
      icon: 'bolt',
      title: 'Modern Angular',
      description: 'Angular 21, Signals, Material Design and optimized rendering.'
    }
  ];

  readonly visualizers = [
    {
      icon: 'layers',
      title: 'Stack',
      description: 'Push • Pop • Peek',
      route: '/stack'
    },
    {
      icon: 'east',
      title: 'Queue',
      description: 'Enqueue • Dequeue • Front',
      route: '/queue'
    },
    {
      icon: 'device_hub',
      title: 'Linked List',
      description: 'Insert • Delete • Search',
      route: '/linked-list'
    }
  ];

  readonly upcoming = [
    {
      icon: 'account_tree',
      title: 'Trees',
      description: 'Binary Tree • Binary Search Tree'
    },
    {
      icon: 'hub',
      title: 'Graphs',
      description: 'DFS • BFS • Shortest Path'
    }
  ];

}