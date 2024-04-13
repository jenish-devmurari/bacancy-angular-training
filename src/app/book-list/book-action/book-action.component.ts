import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book } from 'src/app/interface/book-details';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.scss']
})
export class BookActionComponent implements OnChanges {

  @Input() book: Book | undefined;
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

  ngOnChanges(changes: SimpleChanges): void {
    if (this.book) {
      this.newBook = { ...this.book };
    }
  }

  public addBook(): void {
    this.bookAdded.emit(this.newBook);
    this.resetForm();

  }

  public updateBook(): void {
    this.bookEdited.emit(this.newBook);
    this.resetForm();

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
