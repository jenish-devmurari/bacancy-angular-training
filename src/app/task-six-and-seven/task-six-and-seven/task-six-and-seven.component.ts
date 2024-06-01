import { Component, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-six-and-seven',
  templateUrl: './task-six-and-seven.component.html',
  styleUrls: ['./task-six-and-seven.component.scss']
})
export class TaskSixAndSevenComponent {

  public registerForm !: FormGroup;
  public formValueChanges !: Signal<any>;
  public firstName: WritableSignal<string> = signal('');
  public lastName: WritableSignal<string> = signal('');
  public gender: WritableSignal<string> = signal('');
  public age: WritableSignal<number> = signal(0);
  public fullName: Signal<string> = computed(() => this.firstName() + " " + this.lastName())

  constructor() {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required)
    });

    this.formValueChanges = toSignal(this.registerForm.valueChanges) as WritableSignal<any>;

    effect(() => {
      const formValue = this.formValueChanges();
      if (formValue) {
        this.firstName.set(formValue.firstName);
        this.lastName.set(formValue.lastName);
        this.age.set(formValue.age);
        this.gender.set(formValue.gender);
      }
    }, { allowSignalWrites: true });
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      alert(`submitted ${this.firstName()} ${this.lastName()} ${this.age()} ${this.gender()}`);
      this.registerForm.reset();
    } else {
      alert("Please fill up form");
    }
  }
}