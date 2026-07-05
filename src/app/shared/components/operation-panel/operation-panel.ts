import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-operation-panel',
  standalone: true,
  templateUrl: './operation-panel.html',
  styleUrl: './operation-panel.scss'
})
export class OperationPanel {
  @Input() operation = '';
  @Input() explanation = '';
  @Input() timeComplexity = '';
  @Input() spaceComplexity = '';
  @Input() status = '';
}