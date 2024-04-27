import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/book.interface';
import { BookService } from '../services/book.service';
import { NotifierService } from 'angular-notifier';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: Book[] = []
  public searchResult: Book[] = []
  public errorMessage: string = "";

  constructor(private bookService: BookService, private errorService: ErrorService) {
  }

  ngOnInit() {
    this.fetchBooks()
  }

  public fetchBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (books) => { this.books = books },
      error: (err) => {
        console.log(err);
        this.errorMessage = err;
      }
    });
  }

  public performSearch(): void {
    this.bookService.searchBooks('', '', '').subscribe({
      next: (results) => {
        this.searchResult = results;
        console.log(this.searchResult)
      },
      error: (err) => {
        this.errorMessage = err.message;
        console.log(this.errorMessage);
        this.errorService.emitError(err.message);
      }
    });
  }
}
