import { Component, OnInit } from '@angular/core';
import { Book } from '../interface/book.interface';
import { BookService } from '../services/book.service';
import { Subject, Subscription, concatMap, debounceTime, from, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public bookList !: Book[];
  public searchBook: Book | undefined;
  public searchBookId!: number;
  public observables: Subscription[] = [];
  public  bookId: number[] = [0, 1, 2];
  public searchInput$: Subject<number> = new Subject<number>();


  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getBooks()
    this.searchBooks();
  }

  public getBooks(): void {
    const subscription = this.bookService.getBooks().subscribe(
      (res) => {
        console.log(res);
        this.bookList = res;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
    this.observables.push(subscription);
  }


  public searchBooks() {
    const subscription = this.searchInput$.pipe(
      debounceTime(1000),
      switchMap((bookId: number) => this.bookService.getBookById(bookId))
    ).subscribe((book: Book | undefined) => {
      this.searchBook = book;
    });
    this.observables.push(subscription);
  }

  public searchBookById(): void {
    this.searchInput$.next(this.searchBookId);
  }

  ngOnDestroy(): void {
    this.observables.forEach(subscription => subscription.unsubscribe());
  }
}
