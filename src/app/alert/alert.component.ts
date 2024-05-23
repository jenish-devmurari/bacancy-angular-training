import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  public message!: string;
  public type!: 'success' | 'error';
  @Output() dismissed = new EventEmitter<void>();

  public onClose(): void {
    this.dismissed.emit();
  }
}
