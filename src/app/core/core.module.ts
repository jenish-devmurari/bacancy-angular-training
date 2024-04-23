import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogBoxComponent } from './confirmation-dialog-box/confirmation-dialog-box.component';



@NgModule({
  declarations: [ConfirmationDialogBoxComponent],
  imports: [
    CommonModule
  ],
  exports: [ConfirmationDialogBoxComponent]
})
export class CoreModule { }
