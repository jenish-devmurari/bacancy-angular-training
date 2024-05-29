import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  @Input('message') msg?: string;
  @Input() id?: number;
  @Input() name?: string;
  @Input() role?: string;
}
