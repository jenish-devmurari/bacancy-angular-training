import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() message!: string;
  @Input() type!: 'success' | 'error';
  @Output() dismissed = new EventEmitter<void>();

  onClose(): void {
    this.dismissed.emit();
  }
}
