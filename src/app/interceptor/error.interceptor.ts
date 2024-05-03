import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        switch (error.status) {
          case 500: errorMessage = "Internal server error"; break;
          case 400: errorMessage = "Bad request from client side"; break;
          case 401: errorMessage = "Unauthorize"; break;
          case 404: errorMessage = "Resource not found"; break;
          default: errorMessage = "Something went wrong please try later"; break;
        }
        return throwError(() => errorMessage);
      })
    );
  }
}
