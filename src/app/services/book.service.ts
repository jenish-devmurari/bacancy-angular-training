import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Book } from '../interface/book.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl: string = "https://bookstore-6ce7e-default-rtdb.firebaseio.com/books.json"

  constructor(private httpClient: HttpClient) { }

  public addBook(data: FormData): Observable<any> {
    const apiUrl = "https://bookstore-6ce7-default-rtdb.firebaseio.com/books.json"
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.httpClient.post<{ name: String }>(this.apiUrl, data, { headers })

  }

  public getAllBooks(): Observable<Book[]> {
    // const apiUrl = "https://bookstore-6ce7-default-rtdb.firebaseio.com/books.json"
    let headers = new HttpHeaders();
    headers = headers.set('content-type', 'application/json');
    headers = headers.set('Access-control-Allow-Origin', '*');
    headers = headers.set('jenish', '*');
    return this.httpClient.get<{ [key: string]: Book }>(this.apiUrl, { headers: headers }).pipe(
      map(response => {
        let bookArray: Book[] = [];
        for (let key in response) {
          if (response.hasOwnProperty(key)) {
            bookArray.push({ ...response[key], id: key });
          }
        }
        return bookArray;
      })
    )
  }

  searchBooks(query: string, category: string, priceRange: string): Observable<Book[]> {
    debugger
    let params = new HttpParams();
    if (query) {
      params = params.set('title', query);
    }
    if (category) {
      params = params.set('category', category);
    }
    if (priceRange) {
      params = params.set('priceRange', priceRange);
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
      })
    )
  }
}
