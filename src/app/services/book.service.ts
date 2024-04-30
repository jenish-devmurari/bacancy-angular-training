import { Injectable } from '@angular/core';
import { Book } from '../interface/book.interface';
import { Observable, concatMap, debounceTime, from, of, switchMap } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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
    },
    {
      id: 2,
      name: 'Book 3',
      price: 199,
      author: 'Jenish',
      publish_year: new Date(2015, 0, 1)
    }
  ]

  constructor(private httpClient: HttpClient) { }

  public getBooks(): Observable<Book[]> {
    return of(this.book);
  }

  public getBookById(bookId: number): Observable<Book | undefined> {
    const book = this.book.find(b => b.id === bookId);
    return of(book);
  }


  public getBookByIdWithFakApi(id: number): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`https://freetestapi.com/api/v1/books/${id}`)
  }
}
