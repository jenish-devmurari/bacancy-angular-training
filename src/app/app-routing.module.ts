import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskOneAndTwoComponent } from './task-one-and-two/task-one-and-two.component';

const routes: Routes = [
  {
    path: 'task-one-two', component: TaskOneAndTwoComponent, pathMatch: 'full'
  },
  {
    path: 'task-three-four', pathMatch: 'prefix',
    loadChildren: () => import('./task-three-and-four/task-three-and-four.module').then(m => m.TaskThreeAndFourModule)
  },
  {
    path: 'task-five', pathMatch: 'prefix',
    loadChildren: () => import('./task-five/task-five.module').then(m => m.TaskFiveModule)
  },
  {
    path: 'task-six-seven', pathMatch: 'prefix',
    loadChildren: () => import('./task-six-and-seven/task-six-and-seven.module').then(m => m.TaskSixAndSevenModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
