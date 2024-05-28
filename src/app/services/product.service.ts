import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private toaster: ToastrService) { }

  private cart: Product[] = [];
  private products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      description: 'Latest model smartphone with advanced features',
      price: 9999,
      imageUrl: 'assets/smartphone.jpg',
      category: 'Electronics',
      availability: 'In Stock',
      brand: 'TechBrand',
      rating: 4.5,
      reviews: [
        {
          reviewer: 'Alice',
          comment: 'Great phone with amazing battery life!',
          rating: 5,
          date: '2024-05-01'
        },
        {
          reviewer: 'Bob',
          comment: 'Good value for money.',
          rating: 4,
          date: '2024-05-03'
        }
      ]
    },
    {
      id: 2,
      name: 'Laptop',
      description: 'High performance laptop for professionals',
      price: 49999,
      imageUrl: 'assets/laptop.jpg',
      category: 'Electronics',
      availability: 'In Stock',
      brand: 'WorkTech',
      rating: 4.7,
      reviews: [
        {
          reviewer: 'Charlie',
          comment: 'Excellent laptop for work and play.',
          rating: 5,
          date: '2024-04-22'
        },
        {
          reviewer: 'Dave',
          comment: 'Solid build and great performance.',
          rating: 4,
          date: '2024-04-25'
        }
      ]
    },
    {
      id: 3,
      name: 'Headphones',
      description: 'Noise-cancelling over-ear headphones',
      price: 999,
      imageUrl: 'assets/headphone.jpg',
      category: 'Audio',
      availability: 'Out of Stock',
      brand: 'SoundMaster',
      rating: 4.3,
      reviews: [
        {
          reviewer: 'Eve',
          comment: 'Superb sound quality and very comfortable.',
          rating: 5,
          date: '2024-03-18'
        },
        {
          reviewer: 'Frank',
          comment: 'Good noise cancellation.',
          rating: 1.2,
          date: '2024-03-20'
        }
      ]
    },
    {
      id: 4,
      name: 'Smartwatch',
      description: 'Smartwatch with health tracking features',
      price: 2999,
      imageUrl: 'assets/smartwatch.jpg',
      category: 'Wearables',
      availability: 'In Stock',
      brand: 'WearTech',
      rating: 4.0,
      reviews: [
        {
          reviewer: 'Grace',
          comment: 'Very useful for tracking my workouts.',
          rating: 4,
          date: '2024-05-10'
        },
        {
          reviewer: 'Heidi',
          comment: 'Stylish and functional.',
          rating: 4,
          date: '2024-05-12'
        }
      ]
    },
    {
      id: 5,
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with excellent sound quality',
      price: 1499,
      imageUrl: 'assets/bluetooth-speaker.jpg',
      category: 'Audio',
      availability: 'In Stock',
      brand: 'SoundWave',
      rating: 4.6,
      reviews: [
        {
          reviewer: 'Ivy',
          comment: 'Great sound and battery life.',
          rating: 5,
          date: '2024-04-15'
        },
        {
          reviewer: 'Jack',
          comment: 'Compact and powerful.',
          rating: 4,
          date: '2024-04-18'
        }
      ]
    },
    {
      id: 6,
      name: 'Gaming Console',
      description: 'Next-gen gaming console with stunning graphics',
      price: 4999,
      imageUrl: 'assets/gaming-console.jpg',
      category: 'Gaming',
      availability: 'Pre-Order',
      brand: 'GameMaster',
      rating: 4.8,
      reviews: [
        {
          reviewer: 'Ken',
          comment: 'Amazing graphics and performance.',
          rating: 5,
          date: '2024-05-20'
        },
        {
          reviewer: 'Lara',
          comment: 'The best gaming experience ever.',
          rating: 5,
          date: '2024-05-21'
        }
      ]
    },
    {
      id: 7,
      name: '4K TV',
      description: 'Ultra HD 4K TV with smart features',
      price: 45499,
      imageUrl: 'assets/4k-tv.jpg',
      category: 'Electronics',
      availability: 'In Stock',
      brand: 'ViewTech',
      rating: 4.5,
      reviews: [
        {
          reviewer: 'Mona',
          comment: 'Crystal clear picture quality.',
          rating: 5,
          date: '2024-04-30'
        },
        {
          reviewer: 'Nina',
          comment: 'Great value for the price.',
          rating: 4,
          date: '2024-05-02'
        }
      ]
    },
    {
      id: 8,
      name: 'Tablet',
      description: 'Lightweight tablet with high-resolution display',
      price: 19999,
      imageUrl: 'assets/tablet.jpg',
      category: 'Electronics',
      availability: 'In Stock',
      brand: 'TabMaster',
      rating: 4.2,
      reviews: [
        {
          reviewer: 'Oscar',
          comment: 'Perfect for reading and browsing.',
          rating: 4,
          date: '2024-03-28'
        },
        {
          reviewer: 'Paul',
          comment: 'Good performance for its size.',
          rating: 4,
          date: '2024-04-01'
        }
      ]
    },
    {
      id: 9,
      name: 'Camera',
      description: 'Digital camera with 4K video recording',
      price: 59999,
      imageUrl: 'assets/camera.jpg',
      category: 'Photography',
      availability: 'In Stock',
      brand: 'CapturePro',
      rating: 4.7,
      reviews: [
        {
          reviewer: 'Quinn',
          comment: 'Fantastic image quality.',
          rating: 4.2,
          date: '2024-03-10'
        },
        {
          reviewer: 'Rita',
          comment: 'Easy to use and very versatile.',
          rating: 3,
          date: '2024-03-12'
        }
      ]
    },
  ];

  public getProducts(): Product[] | undefined {
    return this.products;
  }

  public getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  public addToCart(product: Product): void {
    const productAddToCart = this.products.find(p => p.id === product.id);
    if (productAddToCart) {
      const isAvailable = this.cart.some(value => value.id === productAddToCart.id)
      if (!isAvailable) {
        this.cart.push(productAddToCart);
        this.toaster.success('Product added to your cart');
      } else {
        this.toaster.error("This product is already added in cart");
      }
    }
  }

  public getCartProduct(): Product[] | undefined {
    return this.cart;
  }
}
