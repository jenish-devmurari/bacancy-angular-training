import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';
import { ProductTwoService } from '../product/services/product-two.service';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
  providers: [ProductTwoService]
})
export class CartComponent implements OnInit {
  @Input() cart: Product[] | undefined;
  public detailButton: boolean = false;
  public cartButton: boolean = false;
  public deleteButton: boolean = true;

  constructor(private productService: ProductService, private productS: ProductTwoService, private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cart = this.productService.getCartProduct();
    this.productS.call()
    this.cartService.call();
  }

}
