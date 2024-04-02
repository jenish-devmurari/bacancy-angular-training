import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { Book } from '../interface/book-details';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class BookAddComponent {

  @Output('addBookAlias') addBookEvent = new EventEmitter<Book>();
  @ViewChild('bookTitleRef') bookTitleRef !: ElementRef;
  @ViewChild('bookAuthorRef') bookAuthorRef !: ElementRef;
  @ViewChild('bookPriceRef') bookPriceRef !: ElementRef;
  @ViewChild('bookDescriptionRef') bookDescriptionRef !: ElementRef;

  onAddBook(bookTitleRef: HTMLInputElement, bookAuthorRef: HTMLInputElement, bookPriceRef: HTMLInputElement, bookDescriptionRef: HTMLElement): void {

    this.addBookEvent.emit({
      title: this.bookTitleRef.nativeElement.value,
      author: this.bookAuthorRef.nativeElement.value,
      price: this.bookPriceRef.nativeElement.value,
      description: this.bookDescriptionRef.nativeElement.value
    });

  }

}


