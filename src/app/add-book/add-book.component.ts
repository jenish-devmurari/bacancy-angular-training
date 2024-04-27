import { Component } from '@angular/core';
import { Book } from '../interface/book.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../services/book.service';
import { ErrorService } from '../services/error.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent {
  bookForm!: FormGroup;
  selectedFile!: File;
  public errorMessage: string = "";

  constructor(private formBuilder: FormBuilder, private bookService: BookService, private errorService: ErrorService) { }

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
    this.bookService.addBook(this.bookForm.value).subscribe(
      (response) => {
        this.bookForm.reset();
      },
      (error) => {
        this.errorMessage = error.message;
        this.errorService.emitError(error.message);
      }
    );
  }

  public onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
