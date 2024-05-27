import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskFiveRoutingModule } from './task-five-routing.module';
import { TaskFiveComponent } from './task-five/task-five.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    FormsModule,
    TaskFiveRoutingModule
  ]
})
export class TaskFiveModule { }
