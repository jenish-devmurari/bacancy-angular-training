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

  constructor(private activeRoutes: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {

    this.activeRoutes.params.subscribe(params => {
      this.productId = +params['id'];
      this.size = params['size'] as string;
      this.color = params['isAvailable'] as string;
      this.product = this.productService.getProductMultiParameter(this.productId, this.size, this.color);
      if (!this.product) {
        this.router.navigate(['dbanad']);
      }
    });


  }

  public goBack(): void {
    this.router.navigateByUrl("/product-list");
  }

}
