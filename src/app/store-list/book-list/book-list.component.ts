import { Component, Input, Output } from '@angular/core';
import { Book } from '../../interfaces/book-interface';
import { BookService } from '../../services/book.service';
import { StoreService } from '../../services/store.service';
@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {

  @Input() storeId!: number;
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooksForStore();
  }

  getBooksForStore() {
    this.books = this.bookService.getBooks(this.storeId);
  }



}
