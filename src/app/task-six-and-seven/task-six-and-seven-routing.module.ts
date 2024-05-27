import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskSixAndSevenComponent } from './task-six-and-seven/task-six-and-seven.component';

const routes: Routes = [
  {
    path: '', component: TaskSixAndSevenComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskSixAndSevenRoutingModule { }
