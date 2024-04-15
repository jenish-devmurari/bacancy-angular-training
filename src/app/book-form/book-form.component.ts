import { Component, Input } from '@angular/core';
import { Book } from '../interfaces/book-interface';
import { BookService } from '../services/book.service';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

  @Input() storeId!: number;

  book: Book = {
    title: '',
    description: '',
    author: '',
    price: 0
  };

  constructor(private bookService: BookService, private storeService: StoreService) { }

  addBook() {
    this.bookService.addBook(this.storeId, this.book);
    console.log("Book added at form")
    this.book = {
      title: '',
      description: '',
      author: '',
      price: 0
    };
  }




}
