import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isAuthenticate: boolean = false;
  private authToken: string = "";
  constructor(private httpClient: HttpClient, private route: Router) { }

  public registerUser(userData: FormData): Observable<string> {
    return this.httpClient.post<string>("https://localhost:7127/api/Register", userData, { responseType: 'text' as 'json' });
  }

  public loginUser(loginData: FormData): Observable<{ token: string }> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.httpClient.post<{ token: string }>("https://localhost:7127/api/Login", loginData, httpOptions)
      .pipe(
        tap((response) => {
          this.authToken = response.token;
          localStorage.setItem('authToken', this.authToken);
          this.isAuthenticate = true;
        }),
        catchError((error) => {
          return throwError(error);
        })
      );
  }

  public logout(): void {
    this.isAuthenticate = false;
    localStorage.removeItem('authToken');
    this.authToken = "";
    this.route.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    return this.isAuthenticate && !!this.authToken;
  }


}
