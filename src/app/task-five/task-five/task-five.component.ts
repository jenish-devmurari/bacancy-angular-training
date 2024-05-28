import { Component, computed, signal } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/interfaces/user.model'

@Component({
  selector: 'app-task-five',
  templateUrl: './task-five.component.html',
  styleUrls: ['./task-five.component.scss']
})
export class TaskFiveComponent {
  public user: IUser = {
    firstName: signal(''),
    lastName: signal(''),
    age: signal(0),
    gender: signal('')
  };

  public fullName = computed(() => this.user.firstName() + " " + this.user.lastName());

  public submitForm(form: NgForm): void {
    if (form.valid) {
      alert('submitted');
      form.reset();
    } else {
      alert('Form is invalid. Please fill out all required fields.');
    }
  }
}
