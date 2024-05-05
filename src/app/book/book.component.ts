import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/interface/book-details.interface';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  @Input() books !: Book[];
  @Input() stockCount !: number

  @Output() edit = new EventEmitter<number>();
  @Output() deleteConfirmation = new EventEmitter<number>();
  @Output() viewClick = new EventEmitter<number>();
  @Output() viewStock = new EventEmitter<number>();

  public editBook(bookId: number): void {
    this.edit.emit(bookId);
  }

  public deleteBook(bookId: number): void {
    this.deleteConfirmation.emit(bookId);
  }

  public viewBook(bookId: number): void {
    this.viewClick.emit(bookId);
  }

  public getStock(bookId: number): void {
    this.viewStock.emit(bookId);
  }
}
