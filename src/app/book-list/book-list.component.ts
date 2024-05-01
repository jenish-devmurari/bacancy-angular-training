import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/book.interface';
import { BookService } from '../services/book.service';
import { ErrorService } from '../services/error.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  public books: Book[] = []
  public searchResult: Book[] = []
  public errorMessage: string = "";
  public errorSubscription!: Subscription;

  constructor(private bookService: BookService, private errorService: ErrorService) {
  }

  ngOnInit() {
    this.fetchBooks();
    this.errorSubscription = this.errorService.getErrorObservable().subscribe(error => {
      this.errorMessage = error.message;
    });
  }

  public fetchBooks() {
    this.bookService.getAllBooks().subscribe({
      next: (books) => { this.books = books },
      error: (err) => {
        this.errorMessage = err.message;
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
