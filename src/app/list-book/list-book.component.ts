import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../interfaces/book-interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss'],
  providers: [BookService]
})
export class ListBookComponent {
  @Input() index!: number;
  public books: Book[] = [];
  book: Book = {
    title: '',
    description: '',
    author: '',
    price: 0,
    id: 0
  };

  constructor(private bookService: BookService) { }
  ngOnInit(): void {
    this.books = this.bookService.getBook();
  }

  // Add Book 
  public onAddBook(): void {
    if (this.book.title &&
      this.book.author &&
      this.book.price &&
      this.book.description) {
      this.bookService.addBook(this.book)
      this.book = {
        id: 0,
        title: '',
        description: '',
        author: '',
        price: 0
      };
    } else {
      alert('Please enter  all fields to add a book.');
    }
  }
}