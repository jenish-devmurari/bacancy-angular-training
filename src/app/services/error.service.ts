import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSubject = new Subject<string>();
  public error$ = this.errorSubject.asObservable();

  constructor() { }

  emitError(error: string) {
    this.errorSubject.next(error);
  }
}
