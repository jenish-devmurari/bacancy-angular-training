import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-task-child',
  templateUrl: './task-child.component.html',
  styleUrls: ['./task-child.component.scss']
})
export class TaskChildComponent {
  @Input({ required: true, transform: numberAttribute }) rank: number | undefined
}
