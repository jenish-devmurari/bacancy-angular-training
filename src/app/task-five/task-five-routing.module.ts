import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFiveComponent } from './task-five/task-five.component';

const routes: Routes = [
  {
    path: '', component: TaskFiveComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskFiveRoutingModule { }
