import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewReviewRoutingModule } from './view-review-routing.module';
import { ViewReviewComponent } from './view-review.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ViewReviewComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ViewReviewRoutingModule,
    SharedModule
  ]
})
export class ViewReviewModule { }
