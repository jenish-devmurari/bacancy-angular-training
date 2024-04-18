import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from '../../interface/product.interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  public productId: number = -1;
  public product: Product | undefined;
  public size: string = "";
  public color: string = '';
  public productId2: number = -1;


  constructor(private activeRoutes: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    const queryParams = this.activeRoutes.snapshot.queryParams;
    this.productId = +queryParams['id'];
    this.size = queryParams['size'];
    this.color = queryParams['color'];
    this.product = this.productService.getProduct(this.productId);
  }


  public goBack(): void {
    this.router.navigateByUrl("/product-list");
  }

}
