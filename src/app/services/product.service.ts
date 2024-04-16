import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public featuresProducts: Product[] = [
    {
      id: 0, name: 'Nike Red Shoes', description: 'Nike Shoes With Red Color ',
      price: 10000,
      imgUrl: 'assets/product1.jpeg'
    },
    {
      id: 1, name: 'Light Blue T-Shirt', description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg'
    },
    {
      id: 2, name: 'Blue Water Bottle', description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg'
    },
    {
      id: 3, name: 'Purse', description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg'
    }
  ];

  public Products: Product[] = [
    {
      id: 0, name: 'Nike Red Shoes', description: 'Nike Shoes With Red Color ',
      price: 10000,
      imgUrl: 'assets/product1.jpeg'
    },
    {
      id: 1, name: 'Light Blue T-Shirt', description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg'
    },
    {
      id: 2, name: 'Blue Water Bottle', description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg'
    },
    {
      id: 3, name: 'Purse', description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg'
    },
    {
      id: 4, name: 'Product 1', description: 'Lorem ipsum dolor sit amet.',
      price: 0,
      imgUrl: 'assets/product1.jpeg'
    },
    {
      id: 5, name: 'Product 2', description: 'Suspendisse vel ligula vitae felis sollicitudin fringilla.',
      price: 0,
      imgUrl: 'assets/product2.jpeg'
    },
    {
      id: 6, name: 'Product 3', description: 'Fusce eget enim a ipsum luctus malesuada.',
      price: 0,
      imgUrl: 'assets/product3.jpeg'
    },
    {
      id: 7, name: 'Product 4', description: 'Fusce eget enim a ipsum luctus malesuada.',
      price: 0,
      imgUrl: 'assets/product4.jpeg'
    },
    {
      id: 8, name: 'Product 1', description: 'Lorem ipsum dolor sit amet.',
      price: 0,
      imgUrl: 'assets/product1.jpeg'
    },
    {
      id: 9, name: 'Product 2', description: 'Suspendisse vel ligula vitae felis sollicitudin fringilla.',
      price: 0,
      imgUrl: 'assets/product2.jpeg'
    },
    {
      id: 10, name: 'Product 3', description: 'Fusce eget enim a ipsum luctus malesuada.',
      price: 0,
      imgUrl: 'assets/product3.jpeg'
    },
    {
      id: 11, name: 'Product 4', description: 'Fusce eget enim a ipsum luctus malesuada.',
      price: 0,
      imgUrl: 'assets/product4.jpeg'
    }
  ];

  constructor() { }

  public getProduct(productId: number): Product[] {
    return this.Products.filter(x => x.id = productId);
  }
}
