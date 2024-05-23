import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewReviewComponent } from './view-review.component';

const routes: Routes = [
  {
    path: '', component: ViewReviewComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewReviewRoutingModule { }
