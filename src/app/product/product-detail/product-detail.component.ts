import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { ProductTwoService } from '../services/product-two.service';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
  providers: [ProductTwoService]
})
export class ProductDetailComponent implements OnInit {
  public product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router, private productS: ProductTwoService) { }

  ngOnInit(): void {
    this.getProduct();
    this.productS.call()
  }

  private getProduct(): void {
    const id = +this.route.snapshot.params['id'];
    this.product = this.productService.getProductById(id);
    if (this.product === undefined) {
      this.router.navigate(['../product/product-list']);
    }
  }

  public addCart(product: Product | undefined): void {
    if (product) {
      this.productService.addToCart(product);
    }
  }

}
