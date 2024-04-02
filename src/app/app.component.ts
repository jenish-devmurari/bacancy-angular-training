import { Component, ViewEncapsulation } from '@angular/core';
import { Book } from './interface/book-details';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  public title: string = 'bacancy-angular-training';

  public books: Book[] = [
    { title: "Book 1", author: "xyz", description: "Description for Book 1", price: 20 },
    { title: "Book 2", author: "abc", description: "Description for Book 2", price: 25 },
    { title: "Book 3", author: "def", description: "Description for Book 3", price: 30 },
    { title: "Book 4", author: "wxy", description: "Description for Book 4", price: 15 }

  ];

  onAddBook(bookDetails: Book): void {
    this.books.push(bookDetails);
  }

  notify(bookTitle: String): void {
    alert(bookTitle);
  }
}
