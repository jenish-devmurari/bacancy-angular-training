import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cart: Product[] | undefined;
  public detailButton: boolean = false;
  public cartButton: boolean = false;
  public deleteButton: boolean = true;
  public valueButton: boolean = true;

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.cart = this.productService.getCartProduct();
  }

}
