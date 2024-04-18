import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';


const productRoutes = [
    { path: '', component: ProductListComponent },
    { path: 'product-detail', component: ProductDetailsComponent },
    { path: 'product-detail/:id', component: ProductDetailsComponent },
    { path: 'product-detail/:id/:size/:color', component: ProductDetailsComponent },

];


@NgModule({
    imports: [RouterModule.forChild(productRoutes)],
    exports: [RouterModule]
})
export class ProductRoutingModule { }
