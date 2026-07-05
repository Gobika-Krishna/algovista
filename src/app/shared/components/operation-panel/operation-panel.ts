import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { CodeViewer } from '../code-viewer/code-viewer';
import { OperationStatus } from '../../models/operation-status';

@Component({
  selector: 'app-operation-panel',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    CodeViewer
  ],
  templateUrl: './operation-panel.html',
  styleUrl: './operation-panel.scss'
})
export class OperationPanel {

  @Input({ required: true })
  code: string[] = [];

  @Input()
  activeLine = -1;

  @Input({ required: true })
  execution!: OperationStatus;

}