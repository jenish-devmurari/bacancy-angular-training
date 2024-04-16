import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../interfaces/book-interface';
import { BookService } from '../../services/book.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {

  @Input() index!: number;
  @Output() addBook = new EventEmitter<{ storeId: number, book: Book }>();

  book: Book = {
    title: '',
    description: '',
    author: '',
    price: 0
  };

  constructor(private bookService: BookService) { }

  public onAddBook(): void {
    const addBookEmitValue = { storeId: this.index, book: this.book };
    this.addBook.emit(addBookEmitValue);
    this.book = {
      title: '',
      description: '',
      author: '',
      price: 0
    };
  }

}
