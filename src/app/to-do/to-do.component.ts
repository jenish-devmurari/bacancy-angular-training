import { Component, ElementRef, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../interfaces/to-do.interface';
import { addTodo, deleteTodo, editTodo, loadTodos } from '../store/to-do/actions/to-do.actions';
import { TodoState } from '../store/to-do/reducers/to-do.reducer';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent {
  @ViewChild('closeModal') closeModal!: ElementRef;
  public newTodo: Todo = { id: 0, title: '', completed: false, userId: 1 };
  public editedTodo: Todo = { id: 0, title: '', completed: false, userId: 1 };
  public todoList !: Todo[];

  constructor(private store: Store<TodoState>) {
  }

  ngOnInit() {
    this.getData();
    this.store.select('todos').subscribe((event: any) => {
      this.todoList = event.todos;
    });
  }

  public getData(): void {
    this.store.dispatch(loadTodos());
  }

  public addTodoItem(): void {
    this.store.dispatch(addTodo({ todo: { ...this.newTodo, id: Date.now() } }));
    this.newTodo.title = '';
  }

  public editTodo(id: number): void {
    const todoToEdit = this.todoList.find(e => e.id == id);
    if (todoToEdit) {
      this.editedTodo = { ...todoToEdit } || {} as Todo;
    }
  }
  public updateTodo(id: number, todoText: string): void {
    this.store.dispatch(editTodo({ todo: { id, title: todoText, completed: false, userId: 1 } }));
    this.closeModal.nativeElement.click();
  }

  public deleteTodoItem(id: number): void {
    if (confirm("Are you sure you want to delete this todo-item ?")) {
      this.store.dispatch(deleteTodo({ id }));
    }
  }

  public toggleCompletion(id: number, completed: boolean): void {
    const todo = this.todoList.find(todo => todo.id === id);
    if (todo) {
      const updatedTodo = { ...todo, completed: !todo.completed };
      this.store.dispatch(editTodo({ todo: updatedTodo }));
    }
  }

}


