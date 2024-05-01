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
  book: Book[] = []
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
    debugger
    const formData: any = new FormData();
    formData.append('title', this.bookForm.get('title')?.value);
    formData.append('category', this.bookForm.get('category')?.value);
    formData.append('price', this.bookForm.get('price')?.value);
    formData.append('file', this.selectedFile.name);

    this.bookService.addBook(formData).subscribe(
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
