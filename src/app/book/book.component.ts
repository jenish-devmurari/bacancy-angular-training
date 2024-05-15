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

  /**
   * Initiates editing of a book.
   * @param bookId The ID of the book to edit.
   */
  public editBook(bookId: number): void {
    this.edit.emit(bookId);
  }

  /**
  * Initiates deletion confirmation of a book.
  * @param bookId The ID of the book to delete.
  */
  public deleteBook(bookId: number): void {
    this.deleteConfirmation.emit(bookId);
  }

  /**
   * Initiates view of book
   * @param bookId The ID of the book to view
   */
  public viewBook(bookId: number): void {
    this.viewClick.emit(bookId);
  }

  /**
   * Initiates stock of book
   * @param bookId The ID of the book to see stock
   */
  public getStock(bookId: number): void {
    this.viewStock.emit(bookId);
  }
}
