import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { SharedModule } from "../shared/shared.module";
import { ProductTwoService } from '../product/services/product-two.service';




@NgModule({
    declarations: [
        CartComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        SharedModule
    ],
    // providers: [ProductTwoService]
})
export class CartModule { }
