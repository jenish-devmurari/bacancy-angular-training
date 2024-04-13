import { AfterContentInit, AfterContentChecked, Component, ElementRef, Input, OnChanges, ViewChild, AfterViewChecked } from '@angular/core';
import { Book } from '../interface/book-details';
import { BookActionComponent } from './book-action/book-action.component';

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
    },
  ];


  public selectedBookInfo: Book | any;
  public selectedBook: Book | undefined;
  public isEditMode: boolean = false;
  public editBookIndex: number = -1;

  public onBookAdded(book: Book) {
    book.id = this.books.length;
    this.books.push(book);

  }



  public editBook(bookId: number): void {
    const currentIndex = this.books.findIndex(book => book.id === bookId);
    if (currentIndex === this.editBookIndex) {
      // Clicked the same card again, reset edit mode and selected book
      this.editBookIndex = -1;
      this.selectedBook = undefined;
      this.isEditMode = true;

    } else {
      // Clicked a different card, update edit mode and selected book
      this.editBookIndex = currentIndex;
      this.selectedBook = { ...this.books[this.editBookIndex] };
      this.isEditMode = true;

    }
  }

  public deleteBook(bookId: number): void {
    const index = this.books.findIndex(book => book.id === bookId);
    const confirmation = confirm("Are you sure you want to delete this book?");
    if (confirmation) {
      this.books.splice(index, 1);
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
    console.log(this.books[this.editBookIndex]);
    this.editBookIndex = -1;
    this.selectedBook = undefined;
    this.isEditMode = false;
  }

}
