import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        ProductComponent,
        ProductListComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        ProductRoutingModule,
        SharedModule
    ]
})
export class ProductModule { }
