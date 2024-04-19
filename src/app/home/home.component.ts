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

  public products!: Product[];

  constructor(private productService: ProductService, private route: Router) { }

  ngOnInit(): void {
    this.products = this.productService.featuresProducts;
  }

  navigate(id: number, size: string, color: string): void {
    this.route.navigate(['/product-list/product-detail', id, size, color]);
  }



}
