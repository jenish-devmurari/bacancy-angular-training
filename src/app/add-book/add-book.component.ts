import { Component, OnDestroy, OnInit } from '@angular/core';
import { Book } from '../interface/book.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { ErrorService } from '../services/error.service';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit, OnDestroy {
  bookForm!: FormGroup;
  book: Book[] = []
  selectedFile!: File;
  public categories: string[] = ['Friction', 'Non-Friction', 'Sci-fi'];
  public errorMessage: string = "";
  public subscriptions: Subscription[] = [];

  constructor(private formBuilder: FormBuilder, private bookService: BookService, private errorService: ErrorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.initializeForm();
  }

  public initializeForm(): void {
    this.bookForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      price: [null, Validators.required],
      file: [null, Validators.required]
    });
  }

  public onSubmit(): void {
    const formData: any = new FormData();
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('category', this.bookForm.get('category')?.value);
    formData.append('price', this.bookForm.get('price')?.value);
    formData.append('file', this.selectedFile);

    const addBookSubscription = this.bookService.addBook(formData).subscribe(
      (response) => {
        this.toastr.success('Book Added Successfully');
        this.bookForm.reset();
      },
      (error) => {
        this.errorMessage = error.message;
        this.toastr.error("Book addition is unsuccessfully", 'Error');
      }
    );
    this.subscriptions.push(addBookSubscription);
  }

  public onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
