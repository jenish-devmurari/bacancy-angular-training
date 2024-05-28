import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { ProductTwoService } from '../services/product-two.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  providers: [ProductTwoService]
})
export class ProductListComponent implements OnInit {
  public products: Product[] | undefined;
  public detailButton: boolean = true;
  public cartButton: boolean = true;
  public deleteButton: boolean = false;

  // we call product two service with separate instance with providers array of component
  constructor(private productService: ProductService, private productServiceTwo: ProductTwoService, private shared: SharedService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    this.productServiceTwo.call();
    this.shared.call();
  }
}
