import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book-interface';

@Injectable()
export class BookService {

  private books: { [storeId: number]: Book[] } = {
    0: [
      { title: 'Book 1', description: 'Description for Book 1', price: 10, author: 'Author A' },
      { title: 'Book 2', description: 'Description for Book 2', price: 15, author: 'Author B' }
    ],
    1: [
      { title: 'Book 3', description: 'Description for Book 3', price: 20, author: 'Author C' },
      { title: 'Book 4', description: 'Description for Book 4', price: 25, author: 'Author D' }
    ],
    2: [
      { title: 'Book 5', description: 'Description for Book 3', price: 20, author: 'Author C' },
      { title: 'Book 6', description: 'Description for Book 4', price: 25, author: 'Author D' }
    ],

  };

  constructor() { }

  public addBook(storeId: number, book: Book): void {
    if (!this.books[storeId]) {
      this.books[storeId] = [];
    }
    this.books[storeId].push(book);
  }

  public addBooksStore(storeId: number): void {
    this.books[storeId] = []; // Initialize an empty array for the new store
  }

  public getBooks(storeId: number) {
    return this.books[storeId] || [];
  }
}
