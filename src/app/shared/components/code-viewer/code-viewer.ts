import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-code-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-viewer.html',
  styleUrl: './code-viewer.scss'
})
export class CodeViewer {

  @Input({ required: true })
  code: string[] = [];

  @Input()
  activeLine = -1;

}