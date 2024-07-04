import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { ToDoService } from 'src/app/services/to-do.service';
import { deleteTodo, deleteTodoFailure, deleteTodoSuccess, loadTodos, loadTodosFailure, loadTodosSuccess } from '../actions/to-do.actions';

@Injectable()
export class ToDoEffects {

  constructor(private actions$: Actions, private todoService: ToDoService) { }

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      switchMap(() => this.todoService.getAllTodoList()
        .pipe(
          tap(todos => console.log('API Response:', todos)),
          map(todos => loadTodosSuccess({ todos })),
          catchError(error => of(loadTodosFailure({ error })))
        ))
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      switchMap(action => this.todoService.deleteTodoById(action.id)
        .pipe(
          tap(() => console.log(`Deleted ToDo with ID: ${action.id}`)),
          map(() => deleteTodoSuccess({ id: action.id })),
          catchError(error => of(deleteTodoFailure({ error })))
        ))
    )
  );

}
