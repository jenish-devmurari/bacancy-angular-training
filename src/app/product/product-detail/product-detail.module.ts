import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ViewReviewModule } from './view-review/view-review.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ViewReviewModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule { }
