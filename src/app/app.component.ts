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
    { id: 1, title: "Book 1", author: "xyz", description: "Description for Book 1", price: 20 },
    { id: 2, title: "Book 2", author: "xyz", description: "Description for Book 2", price: 25 },
    { id: 3, title: "Book 3", author: "xyz", description: "Description for Book 3", price: 30 },
    { id: 4, title: "Book 4", author: "xyz", description: "Description for Book 4", price: 15 },
    { id: 5, title: "Book 5", author: "xyz", description: "Description for Book 5", price: 10 },
    { id: 6, title: "Book 6", author: "xyz", description: "Description for Book 1", price: 20 },
    { id: 7, title: "Book 7", author: "xyz", description: "Description for Book 2", price: 25 },
    { id: 8, title: "Book 8", author: "xyz", description: "Description for Book 3", price: 30 },
    { id: 9, title: "Book 9", author: "xyz", description: "Description for Book 4", price: 15 },
    { id: 10, title: "Book 10", author: "xyz", description: "Description for Book 5", price: 10 }
  ];
}
