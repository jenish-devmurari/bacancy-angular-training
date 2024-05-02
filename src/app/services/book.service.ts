import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Book } from '../interface/book.interface';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = "https://bookstore-6ce7e-default-rtdb.firebaseio.com/books.json"

  constructor(private httpClient: HttpClient, private errorService: ErrorService) { }

  public addBook(data: FormData): Observable<[key: string]> {
    // const apiUrl = "https://bookstore-6ce-default-rtdb.firebaseio.com/books.json"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const jsonData: any = {};
    data.forEach((value, key) => {
      jsonData[key] = value;
    });
    return this.httpClient.post<[key: string]>(this.apiUrl, jsonData, { headers });
  }

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
        return throwError(error);
      })
    )
  }

  public getFilterBooks(value: any): Observable<Book[]> {
    return this.getAllBooks().pipe(
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
        return throwError(error);
      })
    );
  }

  checkPriceRange(price: number, priceRange: string): boolean {
    const [min, max] = priceRange.split('-').map(Number);
    if (max === undefined || Number.isNaN(max)) {
      return price >= min;
    } else {
      return price >= min && price <= max;
    }
  }
}
