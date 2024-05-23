import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewReviewRoutingModule } from './view-review-routing.module';
import { ViewReviewComponent } from './view-review.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ViewReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ViewReviewRoutingModule
  ]
})
export class ViewReviewModule { }
