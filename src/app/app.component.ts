import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product.interface';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  public products: Product[] | undefined = [];
  public productSubscription !: Subscription

  constructor(private productService: ProductService, private toaster: ToastrService) {
  }

  ngOnInit(): void {
    this.getAllProducts();
  }
  public getAllProducts(): void {
    this.productSubscription = this.productService.getProducts().subscribe({
      next: (data: Product[]) => {
        this.products = data;
      },
      error: (err) => {
        this.toaster.error('Error fetching products: ' + err.message);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }
  }
}
