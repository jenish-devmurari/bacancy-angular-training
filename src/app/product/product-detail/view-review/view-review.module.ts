import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewReviewRoutingModule } from './view-review-routing.module';
import { ViewReviewComponent } from './view-review.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ViewReviewComponent
  ],
  imports: [
    CommonModule,
    ViewReviewRoutingModule,
    SharedModule
  ]
})
export class ViewReviewModule { }
