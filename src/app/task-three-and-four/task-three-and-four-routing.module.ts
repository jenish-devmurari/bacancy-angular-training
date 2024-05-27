import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskThreeAndFourComponent } from './task-three-and-four/task-three-and-four.component';

const routes: Routes = [
  {
    path: '', component: TaskThreeAndFourComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskThreeAndFourRoutingModule { }
