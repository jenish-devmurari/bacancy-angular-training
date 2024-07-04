
import { createReducer, on } from "@ngrx/store";
import { Todo } from "src/app/interfaces/to-do.interface";
import { addTodo, deleteTodo, deleteTodoFailure, editTodo, loadTodos, loadTodosFailure, loadTodosSuccess } from "../actions/to-do.actions";


export interface TodoState {
  todos: Todo[];
  error: any;
}

export const initialState: TodoState = {
  todos: [],
  error: null
};


const _todoReducer = createReducer(
  initialState,
  on(loadTodos, state => ({ ...state })),
  on(loadTodosSuccess, (state, { todos }) => ({ ...state, todos })),
  on(loadTodosFailure, (state, { error }) => ({ ...state, error })),
  on(addTodo, (state, { todo }) => ({ ...state, todos: [...state.todos, todo] })),
  on(editTodo, (state, { todo }) => ({
    ...state,
    todos: state.todos.map(t => t.id === todo.id ? todo : t)
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(deleteTodoFailure, (state, { error }) => ({ ...state, error })),
);

export function todoReducer(state: any, action: any) {
  return _todoReducer(state, action);
}