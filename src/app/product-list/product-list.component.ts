import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.interface';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products!: Product[];
  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.Products;
  }



  navigateToProductDetail(productId: number) {
    this.router.navigateByUrl(`/product-detail/${productId}`);
  }


}
