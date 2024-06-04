import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductDescriptionComponent } from './product-description/product-description.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';


@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductDescriptionComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProductDetailComponent,
    ProductDescriptionComponent,
    CommonModule,
  ]
})
export class ProductDetailModule { }
