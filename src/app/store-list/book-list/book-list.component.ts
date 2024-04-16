import { Component, Input, Output } from '@angular/core';
import { Book } from '../../interfaces/book-interface';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  providers: []
})
export class BookListComponent {

  @Input() storeId!: number;
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooksForStore();
  }

  public getBooksForStore(): void {
    this.books = this.bookService.getBooks(this.storeId);
  }



}
