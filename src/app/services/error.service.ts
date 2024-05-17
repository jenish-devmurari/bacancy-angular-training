import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  private errorSubject = new Subject<string>();

  constructor() { }

  /**
   * get error while api call and emit into subject
   * @param error 
   */
  public emitError(error: string) {
    this.errorSubject.next(error);
  }

  /**
   * this method simply return subject as observable
   * @returns return subject as observables
   */
  public getErrorObservable(): Observable<any> {
    return this.errorSubject.asObservable();
  }

}
