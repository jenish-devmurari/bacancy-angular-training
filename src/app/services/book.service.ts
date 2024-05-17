import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Book } from '../interface/book.interface';
import { Observable, Subject, catchError, map, throwError } from 'rxjs';
import { ErrorService } from './error.service';
import { Filter } from '../interface/filter.interface';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = "https://bookstore-6ce7e-default-rtdb.firebaseio.com/books.json"
  public bookAdded$: Subject<Book> = new Subject<Book>();

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  /**
   * this method is requesting post api to add new book
   * @param book 
   * @param imageData 
   * @returns response (key)as observable of post api after adding book in firebase
   */
  public addBook(book: Book, imageData: string): Observable<[key: string]> {
    // const apiUrl = "https://bookstore-6ce-default-rtdb.firebaseio.com/books.json"
    book.File = imageData
    return this.httpClient.post<[key: string]>(this.apiUrl, book).pipe(
      map(response => {
        this.bookAdded$.next(book);
        return response;
      }),
      catchError(error => {
        this.errorService.emitError(error);
        return throwError(() => error);
      })
    );
  }

  /**
   * this method is get all books with get api
   * @returns observable of book 
   */
  public getAllBooks(): Observable<Book[]> {
    // const apiUrl = "https://bookstore-6ce-default-rtdb.firebaseio.com/books.json"
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('Access-control-Allow-Origin', '*');
    return this.httpClient.get<{ [key: string]: Book }>(this.apiUrl, { headers: headers }).pipe(
      map(response => {
        let bookArray: Book[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            bookArray.push({ ...response[key], id: key });
          }
        }
        return bookArray;
      }
      ),
      catchError(error => {
        this.errorService.emitError(error);
        return throwError(() => error);
      })
    )
  }

  /**
   * this method is get book by filter pass parameter as params into payload 
   * @param value filter value 
   * @returns observable of books based on filter
   */
  public getFilterBooks(value: Filter): Observable<Book[]> {
    let params = new HttpParams();
    if (value.title) {
      params = params.set('title', value.title);
    }
    if (value.category) {
      params = params.set('category', value.category);
    }
    if (value.priceRange) {
      params = params.set('priceRange', value.priceRange);
    }
    return this.httpClient.get<{ [key: string]: Book }>(this.apiUrl, { params }).pipe(
      map(response => {
        let bookArray: Book[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            bookArray.push({ ...response[key], id: key });
          }
        }
        return bookArray;
      }
      ),
      map((books: Book[]) => {
        return books.filter((book: Book) => {
          return (
            (value.title ? book.title.toLowerCase().includes(value.title.toLowerCase()) : true) &&
            (value.category !== 'All' ? book.category === value.category : true) &&
            (value.priceRange !== 'Any Price' ? this.checkPriceRange(book.price, value.priceRange) : true)
          );
        });
      }),
      catchError(error => {
        this.errorService.emitError(error);
        return throwError(() => error);
      })
    );
  }

  /**
   * this method is to check price of book based on filter 
   * @param price 
   * @param priceRange 
   * @returns boolean value based on condition
   */
  private checkPriceRange(price: number, priceRange: string): boolean {
    const [min, max] = priceRange.split('-').map(Number);
    if (max === undefined || Number.isNaN(max)) {
      return price >= min;
    } else {
      return price >= min && price <= max;
    }
  }
}
