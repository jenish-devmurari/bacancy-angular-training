import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.interface';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products!: Product[];

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.products = this.productService.featuresProducts;
  }

  // navigate(id: number, size: string, color: string) {
  //   this.route.navigate(['/product-list/product-detail/'])
  //   //  {
  //   //   queryParams: {
  //   //     id: id
  //   //   }
  //   // });
  // }

  navigate(id: number, size: string, color: string) {
    this.route.navigate(['/product-list/product-detail', id, size, color]);
  }

}
