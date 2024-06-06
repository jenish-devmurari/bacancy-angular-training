import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/to-do.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl: string = "https://dummyjson.com/docs/todos"

  constructor(private http: HttpClient) { }

  public getAllTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl);
  }

}
