import { Component, Input, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-task-three-and-four-child',
  templateUrl: './task-three-and-four-child.component.html',
  styleUrls: ['./task-three-and-four-child.component.scss']
})
export class TaskThreeAndFourChildComponent {
  @Input() childSignalMessage !: WritableSignal<string>

  public updateValue(): void {
    this.childSignalMessage.update(() => "Hello From Child");
  }
}
