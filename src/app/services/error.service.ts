import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSubject = new Subject<string>();

  constructor() { }

  emitError(error: string) {
    this.errorSubject.next(error);
  }

  getErrorObservable(): Observable<any> {
    return this.errorSubject.asObservable();
  }

}
