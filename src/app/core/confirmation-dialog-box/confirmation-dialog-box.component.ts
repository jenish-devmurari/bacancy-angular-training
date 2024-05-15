import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-confirmation-dialog-box',
  templateUrl: './confirmation-dialog-box.component.html',
  styleUrls: ['./confirmation-dialog-box.component.scss']
})
export class ConfirmationDialogBoxComponent {
  @Output() confirmed = new EventEmitter<boolean>();

  /**
   * emit confirm dialog box event
   * @param confirm 
   */
  confirmAction(confirm: boolean): void {
    this.confirmed.emit(confirm);
  }
}
