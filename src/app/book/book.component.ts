import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Book } from 'src/app/interface/book-details';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {

  @Input() books !: Book[];
  public selectedBookIdForDeletion !: number

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
  @Output() viewClick = new EventEmitter<number>();
  @Output() viewStock = new EventEmitter<number>();

  public isEditMOde: boolean = false;

  public editBook(bookId: number): void {
    console.log(bookId);
    this.edit.emit(bookId);

  }

  public onDeleteBookConfirmed(bookId: number): void {
    this.selectedBookIdForDeletion = bookId; // Store the book id to be deleted
  }

  public onDeleteConfirmed(confirmed: boolean): void {
    if (confirmed) {
      // Perform delete operation
      this.deleteBook(this.selectedBookIdForDeletion);
    } else {
      alert('Delete operation canceled');
    }
  }


  public deleteBook(bookId: number): void {
    this.delete.emit(bookId);
  }

  public viewBook(bookId: number): void {
    this.viewClick.emit(bookId);
  }

  public getStock(bookId: number): void {
    this.viewStock.emit(bookId);
  }
}
