import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'my-crud',
  imports: [FormsModule],
  templateUrl: './base-crud-component.html',
  styleUrl: './base-crud-component.scss',
})
export class BaseCrudComponent {
  @Input() myaction: string = 'list';
  @Output() onAdd = new EventEmitter;
  @Output() onCancle = new EventEmitter;
  @Input() column: column[] = [];
  @Input() data: any[] = [];
  @Output() onEdit = new EventEmitter<any>;
  @Output() onRemove = new EventEmitter<any>;
  @Output() onSave=new EventEmitter;
}
export interface column {
  title: string;
  field: string;
}
