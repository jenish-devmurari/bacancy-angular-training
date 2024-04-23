import { AfterContentInit, AfterContentChecked, Component, ElementRef, Input, OnChanges, ViewChild, AfterViewChecked } from '@angular/core';
import { Book } from '../interface/book-details.interface';
import { BookActionComponent } from '../book-action/book-action.component';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  public books: Book[] = [
    {
      id: 0, imgUrl: "assets/book1.jpeg", title: "Book 1", description: "Description for Book 1", price: 20,
      review: 'A',
      rating: 5,
      stock: 10
    },
    {
      imgUrl: "assets/book1.jpeg", title: "Book 2", description: "Description for Book 2", price: 20,
      id: 1,
      review: 'B',
      rating: 2,
      stock: 20
    },
    {
      imgUrl: "assets/book1.jpeg", title: "Book 3", description: "Description for Book 3", price: 20,
      id: 2,
      review: 'C',
      rating: 4,
      stock: 10
    },
    {
      imgUrl: "assets/book1.jpeg", title: "Book 4", description: "Description for Book 4", price: 20,
      id: 3,
      review: 'D',
      rating: 3,
      stock: 25
    }
  ];


  public selectedBookInfo: Book | any;
  public selectedBook: Book | undefined;
  public selectedBookCount: number = 0
  public isEditMode: boolean = false;
  public editBookIndex: number = -1;
  public bookToDeleteId: number | undefined;

  public onBookAdded(book: Book): void {
    book.id = this.books.length;
    book.imgUrl = "assets/book1.jpeg"
    this.books.push(book);
  }

  public editBook(bookId: number): void {
    const currentIndex = this.books.findIndex(book => book.id === bookId);
    if (currentIndex !== -1) {
      this.editBookIndex = currentIndex;
      this.selectedBook = { ...this.books[this.editBookIndex] };
      this.isEditMode = true;
    }
  }


  public viewBook(bookId: number): void {
    this.selectedBookInfo = this.books.find(book => book.id === bookId);
  }

  public viewStock(bookId: number): void {
    const selectedBook = this.books.find(book => book.id === bookId);
    if (selectedBook) {
      alert(`Stocks: ${selectedBook.stock}`);
    } else {
      alert('Stock information not available.');
    }
  }

  public updateBook(book: Book): void {
    this.books[this.editBookIndex] = book;
    this.editBookIndex = -1;
    this.selectedBook = undefined;
    this.isEditMode = false;
  }


  public deleteConfirmation(bookId: number): void {
    this.bookToDeleteId = bookId;
  }

  public onDeleteConfirmed(confirm: boolean): void {
    if (confirm && this.bookToDeleteId !== undefined) {
      const index = this.books.findIndex(book => book.id === this.bookToDeleteId);
      if (index !== -1) {
        this.books.splice(index, 1);
      }
    }
    this.bookToDeleteId = undefined;
  }


}
