import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-view-review',
  templateUrl: './view-review.component.html',
  styleUrls: ['./view-review.component.scss']
})
export class ViewReviewComponent implements OnInit {
  public product: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.getProduct();
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

  public starArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const starArray: number[] = [];

    for (let i = 0; i < fullStars; i++) {
      starArray.push(1);
    }

    if (hasHalfStar) {
      starArray.push(0.5);
    }

    const remainingStars = 5 - starArray.length;
    for (let i = 0; i < remainingStars; i++) {
      starArray.push(0);
    }

    return starArray;
  }

}
