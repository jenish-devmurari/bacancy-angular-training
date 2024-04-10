import { Component } from '@angular/core';

@Component({
  selector: 'app-task-one',
  templateUrl: './task-one.component.html',
  styleUrls: ['./task-one.component.scss']
})
export class TaskOneComponent {
  public genders: string[] = ["Male", "Female", "Other"];
  public selectedOption: string = "";
}
