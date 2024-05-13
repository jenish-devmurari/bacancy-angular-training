import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/interface/book-details.interface';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss']
})
export class BookActionComponent {

  @Input() set book(value: Book | undefined) {
    if (value) {
      this.newBook = { ...value };
    }
  }
  @Input() isEditMode: boolean | undefined;

  newBook: Book = {
    imgUrl: '', title: '', description: '', price: 0,
    id: 0,
    review: '',
    rating: 0,
    stock: 0
  };

  @Output() bookAdded = new EventEmitter<Book>();
  @Output() bookEdited = new EventEmitter<Book>();

  public addBook(): void {
    if (this.validForm()) {
      this.bookAdded.emit(this.newBook);
      this.resetForm();
    }
    else {
      alert("Please fill up all field ");
    }
  }

  public updateBook(): void {
    this.bookEdited.emit(this.newBook);
    this.resetForm();
  }

  private validForm(): boolean {
    return this.newBook.title.trim() !== '' &&
      this.newBook.description.trim() !== '' &&
      this.newBook.imgUrl?.trim() !== '' &&
      this.newBook.price !== null &&
      this.newBook.review.trim() !== '' &&
      this.newBook.rating !== null &&
      this.newBook.stock !== null;
  }

  public resetForm(): void {
    this.newBook = {
      imgUrl: '', title: '', description: '', price: 0,
      id: 0,
      review: '',
      rating: 0, stock: 0
    };
    this.isEditMode = false;
  }
}
