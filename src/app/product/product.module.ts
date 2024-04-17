import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const productRoutes = [
  { path: 'product-list', component: ProductListComponent },
  { path: 'product-list/product-detail/:id', component: ProductDetailsComponent },
  { path: 'product-list/product-detail/:id/:size/:isAvailable', component: ProductDetailsComponent },
  { path: 'product-list/product-detail/:id/:size/:color', component: ProductDetailsComponent }
];

@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productRoutes)
  ]
})
export class ProductModule { }
