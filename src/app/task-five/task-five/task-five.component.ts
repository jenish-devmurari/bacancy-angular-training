import { Component, Signal, ViewChild, WritableSignal, computed, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-task-five',
  templateUrl: './task-five.component.html',
  styleUrls: ['./task-five.component.scss']
})
export class TaskFiveComponent {
  public user: User = {
    firstName: signal(''),
    lastName: signal(''),
    age: signal(0),
    gender: signal('')
  }

  public fullName = computed(() => this.user.firstName() + " " + this.user.lastName());

  public submitForm(form: NgForm): void {
    if (form.valid) {
      console.log(form.form.value);
    }
  }
}
