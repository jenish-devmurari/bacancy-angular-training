import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Subscription, concatMap, debounceTime, distinctUntilChanged, forkJoin, from, switchMap } from 'rxjs';
import { Book } from '../interface/book.interface';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public bookIdForm!: FormGroup
  public bookList!: Book[];
  public searchBook: Book | undefined;
  public observables: Subscription[] = [];
  public bookIds: number[] = [0, 1, 2, 3, 4, 5];

  constructor(private bookService: BookService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initializeForm();
    this.getBooks();
    this.searchBooks();
    this.getBooksUsingForkJoin();
    this.getBookByIdUsingConcatMap();
  }

  public initializeForm(): void {
    this.bookIdForm = this.formBuilder.group({
      id: [null]
    });
  }

  // Task-2 get books from mock data
  public getBooks(): void {
    const subscription = this.bookService.getBooks().subscribe(
      (res) => {
        this.bookList = res;
      },
      (error) => {
        console.error('Error fetching books:', error);
      }
    );
    this.observables.push(subscription);
  }

  // Task-3 Get Book details using concatMap
  public getBookByIdUsingConcatMap(): void {
    const subscription = from(this.bookIds).pipe(
      concatMap(id => this.bookService.getBookById(id)),
    ).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.error('Error fetching book:', error);
      }
    );
    this.observables.push(subscription);
  }

  // Task-4 Get search book 
  public searchBooks(): void {
    const subscription = this.bookIdForm.controls['id'].valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((bookId: number) => this.bookService.getBookById(bookId))
    ).subscribe((book: Book | undefined) => {
      this.searchBook = book;
    });
    this.observables.push(subscription);
  }

  // Task -6 for forkJoin
  public getBooksUsingForkJoin(): void {
    const obs1$ = this.bookService.getBookByIdWithFakApi(1);
    const obs2$ = this.bookService.getBookByIdWithFakApi(2);
    const obs3$ = this.bookService.getBookByIdWithFakApi(0);
    forkJoin([obs1$, obs2$, obs3$]).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    )
  }

  ngOnDestroy(): void {
    this.observables.forEach(subscription => subscription.unsubscribe());
  }
}
