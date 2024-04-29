import { Injectable } from '@angular/core';
import { Book } from '../interface/book.interface';
import { Observable, concatMap, debounceTime, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private book: Book[] = [
    {
      id: 0,
      name: 'Book 1',
      price: 149,
      author: 'Jenish',
      publish_year: new Date(2020, 0, 1)
    },
    {
      id: 1,
      name: 'Book 2',
      price: 149,
      author: 'Jenish',
      publish_year: new Date(2018, 0, 1)
    }
  ]


  constructor() { }

  public getBooks(): Observable<Book[]> {
    return of(this.book);
  }

  public getBookById(bookId: number): Observable<Book | undefined> {
    debugger
    const book = this.book.find(b => b.id === bookId);
    return of(book);
  }
}
