import { Component } from '@angular/core';

@Component({
  selector: 'app-card-two',
  templateUrl: './card-two.component.html',
  styleUrls: ['./card-two.component.scss']
})
export class CardTwoComponent {
  product: any[] = [
    {
      id: 0,
      imgurl: "./assets/watch.jpeg",
      description: "Men's Stylish Watch",
      price: "$99",
      discountPrice: "$79.99",
      isAvailable: false
    },
    {
      id: 1,
      imgurl: "./assets/headphone.jpeg",
      description: "Brand New Headphone ",
      price: "$129",
      discountPrice: "$99.99",
      isAvailable: true
    },
    {
      id: 2,
      imgurl: "./assets/shoes.jpeg",
      description: "Men's Party-Wear Shoes With Black Color",
      price: "$199",
      discountPrice: "$179.99",
      isAvailable: false
    },
    {
      id: 3,
      imgurl: "./assets/camera.jpeg",
      description: "Camera With High Quality",
      price: "$399",
      discountPrice: "$279.99",
      isAvailable: true
    },
  ];

}
