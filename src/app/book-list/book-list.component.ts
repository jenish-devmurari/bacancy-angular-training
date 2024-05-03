import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../interface/book.interface';
import { BookService } from '../services/book.service';
import { ErrorService } from '../services/error.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit, OnDestroy {
  public filterForm  !: FormGroup
  public categories: string[] = ['All', 'Friction', 'Non-Friction', 'Sci-fi'];
  public books: Book[] = []
  public errorSubscription!: Subscription;
  public subscriptions: Subscription[] = [];
  public priceRanges: { label: string }[] = [
    { label: 'Any Price' },
    { label: '99-199' },
    { label: '199-299' },
    { label: '299-399' },
    { label: '399-more' }
  ];

  constructor(private bookService: BookService, private errorService: ErrorService, private toastr: ToastrService, private form: FormBuilder) {
  }

  ngOnInit() {
    this.errorSubscription = this.errorService.getErrorObservable().subscribe(error => {
      this.toastr.error(error, 'Error');
    });
    this.subscriptions.push(this.errorSubscription);
    this.initializeForm();
    this.fetchBooks();
  }

  public initializeForm(): void {
    this.filterForm = this.form.group({
      title: [''],
      category: ['All'],
      priceRange: ['Any Price']
    });
  }

  public onSubmit(): void {
    const filterSubscription = this.bookService.getFilterBooks(this.filterForm.value).subscribe({
      next: (books: Book[]) => {
        this.books = books;
      },
      error: (error: any) => {
        this.toastr.error(error, 'Error');
      }
    });
    this.subscriptions.push(filterSubscription);
  }

  public fetchBooks(): void {
    const fetchSubscription = this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books = books
      },
      error: (err) => {
        this.toastr.error(err, 'Error');
      }
    });
    this.subscriptions.push(fetchSubscription);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
