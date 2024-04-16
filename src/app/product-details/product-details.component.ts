import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../interface/product.interface';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public productId: number = -1;
  public product: Product | undefined;

  constructor(private activeRoutes: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    this.productId = +this.activeRoutes.snapshot.params['id'];
    this.product = this.productService.getProduct(this.productId);
    if (!this.product) {
      this.router.navigate(['**'])
    }
  }

  public goBack(): void {
    this.router.navigateByUrl("/product-list");
  }

}
