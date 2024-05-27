import { Component, EventEmitter, Input, Output, Signal, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-task-three-and-four-child',
  templateUrl: './task-three-and-four-child.component.html',
  styleUrls: ['./task-three-and-four-child.component.scss']
})
export class TaskThreeAndFourChildComponent {
  @Input() childSignalMessage: WritableSignal<string> = signal('')
  @Output() updateFromChild: EventEmitter<string> = new EventEmitter<string>();

  public updateValue(): void {
    this.childSignalMessage.update(() => "Hello From Child");
    this.updateFromChild.emit(this.childSignalMessage());
  }

}
