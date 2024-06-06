import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { Todo } from '../interfaces/to-do.interface';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrl: './to-do.component.scss'
})
export class ToDoComponent implements OnInit {

  public todoList !: Todo[]
  private todoSubscription !: Subscription;
  constructor(private todoService: ToDoService) { }

  ngOnInit(): void {
    this.getTodoList();
  }

  public getTodoList() {
    this.todoSubscription = this.todoService.getAllTodoList().subscribe({
      next: (data: Todo[]) => {
        this.todoList = data
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
