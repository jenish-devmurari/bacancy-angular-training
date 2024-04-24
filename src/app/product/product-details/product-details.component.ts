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
  public isAvailable!: boolean;
  public availability: string = "";
  public showAvailability: boolean = false;

  constructor(private activeRoutes: ActivatedRoute, private productService: ProductService, private router: Router) {
  }

  ngOnInit(): void {
    const queryParams = this.activeRoutes.snapshot.queryParams;
    this.productId = +queryParams['id'];
    this.size = queryParams['size'];
    this.color = queryParams['color'];

    this.activeRoutes.queryParams.subscribe((params) => {
      this.isAvailable = params['isAvailable'] === 'true';
    });

    this.product = this.productService.getProduct(this.productId);

    if (this.product == undefined) {
      const Params = this.activeRoutes.snapshot.params;
      this.productId = +Params['id'];
      this.size = Params['size'];
      this.color = Params['color'];
    }

    this.product = this.productService.getProduct(this.productId);

    if (!this.product) {
      this.router.navigate(['**'])
    }
  }

  public goBack(): void {
    this.router.navigateByUrl("/product-list");
  }

  public checkSize(): void {
    this.size = (parseInt(this.size) + 1).toString();
    if (this.product) {
      this.product.size = this.size;
    }

    this.router.navigate(['/product-list/product-detail'], {
      queryParams: {
        id: this.productId,
        size: this.size,
        color: this.color,
      }
    });
  }
}
