import { Component } from '@angular/core';
import { Book } from './interface/book-details';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bacancy-angular-training';

  public books: Book[] = [
    { imgUrl: "assets/book1.jpeg", title: "Book 1", description: "Description for Book 1", price: 20 },
    { imgUrl: "assets/book5.jpeg", title: "Book 1", description: "Description for Book 1", price: 20 },
    { imgUrl: "assets/book6.jpeg", title: "Book 1", description: "Description for Book 1", price: 20 },
    { imgUrl: "assets/book4.png", title: "Book 1", description: "Description for Book 1", price: 20 },

  ];
}
