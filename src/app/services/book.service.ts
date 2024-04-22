import { Injectable } from '@angular/core';
import { Book } from '../interfaces/book-interface';

@Injectable()
export class BookService {

  private bookList: Book[] = [
    {
      title: 'Book 1', description: 'Description for Book 1', price: 10, author: 'Author A',
      id: 0
    },
    {
      title: 'Book 2', description: 'Description for Book 2', price: 15, author: 'Author B',
      id: 1
    }
  ];

  public getBook(): Book[] {
    return this.bookList;
  }

  public addBook(newBook: Book): void {
    newBook.id = this.generateUniqueId();
    this.bookList.push(newBook);
    alert("Book Added");
  }

  private generateUniqueId(): number {
    const lastBook = this.bookList[this.bookList.length - 1];
    return lastBook ? lastBook.id + 1 : 1;
  }
}
