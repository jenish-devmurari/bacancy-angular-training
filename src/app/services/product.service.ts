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
      imgUrl: 'assets/product5.jpeg'
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
      imgUrl: 'assets/product5.jpeg'
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
      id: 4, name: 'Nike Red Shoes', description: 'Nike Shoes With Red Color ',
      price: 10000,
      imgUrl: 'assets/product5.jpeg'
    },
    {
      id: 5, name: 'Light Blue T-Shirt', description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg'
    },
    {
      id: 6, name: 'Blue Water Bottle', description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg'
    },
    {
      id: 7, name: 'Purse', description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg'
    },
    {
      id: 8, name: 'Nike Red Shoes', description: 'Nike Shoes With Red Color ',
      price: 10000,
      imgUrl: 'assets/product5.jpeg'
    },
    {
      id: 9, name: 'Light Blue T-Shirt', description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg'
    },
    {
      id: 10, name: 'Blue Water Bottle', description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg'
    },
    {
      id: 11, name: 'Purse', description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg'
    },
  ];

  constructor() { }

  public getProduct(productId: number): Product | undefined {
    return this.Products.find(x => x.id === productId);
  }
}
