import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/interfaces/to-do.interface';

export const loadTodos = createAction('[Todo] Load Todos');
export const loadTodosSuccess = createAction('[Todo] Load Todos Success', props<{ todos: Todo[] }>());
export const loadTodosFailure = createAction('[Todo] Load Todos Failure', props<{ error: any }>());
export const addTodo = createAction('[Todo] Add Todo', props<{ todo: Todo }>());
export const editTodo = createAction('[Todo] Edit Todo', props<{ todo: Todo }>());
export const deleteTodo = createAction('[Todo] Delete Todo', props<{ id: number }>());
export const deleteTodoSuccess = createAction(
    '[ToDo] Delete Todo Success',
    props<{ id: number }>()
);

export const deleteTodoFailure = createAction(
    '[ToDo] Delete Todo Failure',
    props<{ error: any }>()
);

