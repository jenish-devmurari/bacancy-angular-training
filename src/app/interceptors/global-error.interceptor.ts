import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HttpStatusCodes } from '../enums/http-status-codes.enum';


@Injectable()
export class GlobalErrorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        switch (error.status) {
          case HttpStatusCodes.InternalServerError:
            errorMessage = "Internal server error";
            break;
          case HttpStatusCodes.BadRequest:
            errorMessage = "Bad request from client side";
            break;
          case HttpStatusCodes.Unauthorized:
            errorMessage = "Unauthorized";
            break;
          case HttpStatusCodes.NotFound:
            errorMessage = "Resource not found";
            break;
          default:
            errorMessage = "Something went wrong, please try later";
            break;
        }
        return throwError(() => errorMessage);
      })
    );
  }
}
