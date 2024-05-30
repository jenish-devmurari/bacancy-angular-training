import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {
    path: 'employee/:id/:name/:role/:rank', component: TaskComponent, pathMatch: 'full', data: { message: 'Welcome to Bacancy Technology' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
