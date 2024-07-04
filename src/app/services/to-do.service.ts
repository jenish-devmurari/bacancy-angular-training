import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Todo } from '../interfaces/to-do.interface';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private apiUrl: string = "https://jsonplaceholder.typicode.com/todos"

  constructor(private http: HttpClient) { }

  public getAllTodoList(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.apiUrl).pipe(
      map(todos => todos.slice(0, 10)));
  }

  public deleteTodoById(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
