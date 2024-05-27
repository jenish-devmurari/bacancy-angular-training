import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-task-three-and-four',
  templateUrl: './task-three-and-four.component.html',
  styleUrls: ['./task-three-and-four.component.scss']
})
export class TaskThreeAndFourComponent {
  public parentSignalMessage: WritableSignal<string> = signal("Hello From Parents");

  public handleEventFromChild(value: string): void {
    alert(value);
  }
}
