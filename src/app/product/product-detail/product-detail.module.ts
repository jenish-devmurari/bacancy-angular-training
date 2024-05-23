import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ProductDetailRoutingModule
  ]
})
export class ProductDetailModule {
  
}
