import { Component, Input } from '@angular/core';
import { Product } from 'src/app/interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() product!: Product;
  @Input() showDetailButton!: boolean
  @Input() showCartButton!: boolean
  @Input() showDeleteButton !: boolean
  @Input() showValueButton !: boolean
  public cartValue: number = 1;

  constructor(private productService: ProductService) {
  }

  public addCart(product: Product): void {
    this.productService.addToCart(product);
  }

  public incrementCartValue(): void {
    this.cartValue++;
  }

  public decrementCartValue(): void {
    if (this.cartValue > 0) {
      this.cartValue--;
    }
  }
}
