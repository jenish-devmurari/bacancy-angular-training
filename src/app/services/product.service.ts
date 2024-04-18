import { Injectable } from '@angular/core';
import { Product } from '../interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  public featuresProducts: Product[] = [
    {
      id: 0,
      name: 'Nike Red Shoes',
      description: 'Nike Shoes With Red Color',
      price: 10000,
      imgUrl: 'assets/product5.jpeg',
      size: '9',
      color: 'Red',
      isAvailable: true
    },
    {
      id: 1,
      name: 'Light Blue T-Shirt',
      description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg',
      size: 'L',
      color: 'Light Blue',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Blue Water Bottle',
      description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg',
      size: '1L',
      color: 'Blue',
      isAvailable: false
    },
    {
      id: 3,
      name: 'Purse',
      description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg',
      size: 'Large',
      color: 'Black',
      isAvailable: true
    },
  ];

  public Products: Product[] = [
    {
      id: 0,
      name: 'Nike Red Shoes',
      description: 'Nike Shoes With Red Color',
      price: 10000,
      imgUrl: 'assets/product5.jpeg',
      size: '9',
      color: 'Red',
      isAvailable: true
    },
    {
      id: 1,
      name: 'Light Blue T-Shirt',
      description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg',
      size: 'L',
      color: 'Light Blue',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Blue Water Bottle',
      description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg',
      size: '1L',
      color: 'Blue',
      isAvailable: false
    },
    {
      id: 3,
      name: 'Purse',
      description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg',
      size: 'Large',
      color: 'Black',
      isAvailable: true
    },
    {
      id: 4,
      name: 'Nike Red Shoes',
      description: 'Nike Shoes With Red Color',
      price: 10000,
      imgUrl: 'assets/product5.jpeg',
      size: '9',
      color: 'Red',
      isAvailable: true
    },
    {
      id: 5,
      name: 'Light Blue T-Shirt',
      description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg',
      size: 'L',
      color: 'Light Blue',
      isAvailable: true
    },
    {
      id: 6,
      name: 'Blue Water Bottle',
      description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg',
      size: '1L',
      color: 'Blue',
      isAvailable: false
    },
    {
      id: 7,
      name: 'Purse',
      description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg',
      size: 'Large',
      color: 'Black',
      isAvailable: true
    },
    {
      id: 8,
      name: 'Nike Red Shoes',
      description: 'Nike Shoes With Red Color',
      price: 10000,
      imgUrl: 'assets/product5.jpeg',
      size: '9',
      color: 'Red',
      isAvailable: true
    },
    {
      id: 9,
      name: 'Light Blue T-Shirt',
      description: 'Extra Comfort T-shirt',
      price: 299,
      imgUrl: 'assets/product2.jpeg',
      size: 'L',
      color: 'Light Blue',
      isAvailable: true
    },
    {
      id: 10,
      name: 'Blue Water Bottle',
      description: '1 Liter Water Bottle',
      price: 199,
      imgUrl: 'assets/product3.jpeg',
      size: '1L',
      color: 'Blue',
      isAvailable: false
    },
    {
      id: 11,
      name: 'Purse',
      description: 'Large Size Purse',
      price: 249,
      imgUrl: 'assets/product4.jpeg',
      size: 'Large',
      color: 'Black',
      isAvailable: true
    },
  ];

  constructor() { }

  public getProduct(productId: number): Product | undefined {
    return this.Products.find(x => x.id === productId);
  }

  public getProductMultiParameter(productId: number, size: string, color: string): Product | undefined {
    return this.Products.find(x => x.id === productId && x.size == size && x.color === color);
  }

}
