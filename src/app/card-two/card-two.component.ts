import { Component } from '@angular/core';
interface ProductInfo {
  id: number;
  imgUrl: string;
  description: string;
  price: number;
  discountPrice: number;
  isAvailable: boolean;
}

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})

export class CardTwoComponent {
  public product: ProductInfo[] = [
    {
      id: 0,
      imgUrl: "assets/watch.jpeg",
      description: "Men's Stylish Watch",
      price: 99,
      discountPrice: 79.99,
      isAvailable: false
    },
    {
      id: 1,
      imgUrl: "assets/headphone.jpeg",
      description: "Brand New Headphone ",
      price: 129,
      discountPrice: 99.99,
      isAvailable: true
    },
    {
      id: 2,
      imgUrl: "assets/shoes.jpeg",
      description: "Men's Party-Wear Shoes With Black Color",
      price: 199,
      discountPrice: 179.99,
      isAvailable: false
    },
    {
      id: 3,
      imgUrl: "assets/camera.jpeg",
      description: "Camera With High Quality",
      price: 399,
      discountPrice: 279.99,
      isAvailable: true
    },
  ];

}
