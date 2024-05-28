import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';

import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductDetailRoutingModule,
    SharedModule
  ]
})
export class ProductDetailModule {

}
