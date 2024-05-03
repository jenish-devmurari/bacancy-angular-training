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
  public bookForm!: FormGroup;
  public book: Book[] = []
  public selectedFile!: File;
  public categories: string[] = ['Friction', 'Non-Friction', 'Sci-fi'];
  public subscriptions: Subscription[] = [];
  public url: string = "";

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
    const bookData: Book = this.bookForm.getRawValue()
    const addBookSubscription = this.bookService.addBook(bookData, this.url).subscribe({
      next: () => {
        this.toastr.success('Book Added Successfully');
        this.bookForm.reset();
      },
      error: (error: any) => {
        this.toastr.error("Book addition is unsuccessful", 'Error');
      }
    });
    this.subscriptions.push(addBookSubscription);
  }

  public onFileSelected(event: any): void {
    const files: FileList = event.target.files;
    if (files.length === 0) {
      this.url = '';
      return;
    }
    const file: File = files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.url = reader.result as string;
    };
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
