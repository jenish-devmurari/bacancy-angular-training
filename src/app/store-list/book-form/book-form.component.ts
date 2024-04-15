import { Component, DoCheck, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Book } from '../../interfaces/book-interface';
import { BookService } from '../../services/book.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnChanges {

  @Input() storeId!: number;
  public storeId1: number = 0;
  @Output() addBook = new EventEmitter<{ storeId: number, book: Book }>();

  book: Book = {
    title: '',
    description: '',
    author: '',
    price: 0
  };

  ngOnChanges(): void {
    this.storeId1 = this.storeId;
    // console.log(this.storeId1);
  }
  constructor(private bookService: BookService) { }
// 
  onAddBook(storeId1: number) {
    // console.log(storeId1);
    console.log(this.storeId);
    const addBookEmitValue = { storeId: this.storeId, book: this.book };
    this.addBook.emit(addBookEmitValue);

    this.book = {
      title: '',
      description: '',
      author: '',
      price: 0
    };
  }

}
