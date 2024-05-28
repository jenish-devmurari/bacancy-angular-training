import { Component, OnInit, Signal, WritableSignal, computed, effect, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-six-and-seven',
  templateUrl: './task-six-and-seven.component.html',
  styleUrls: ['./task-six-and-seven.component.scss']
})
export class TaskSixAndSevenComponent implements OnInit {

  public registerForm !: FormGroup;
  public firstName: WritableSignal<string> = signal('');
  public lastName: WritableSignal<string> = signal('');
  public gender: WritableSignal<string> = signal('');
  public age: WritableSignal<number> = signal(0);
  public fullName: Signal<string> = computed(() => this.firstName() + " " + this.lastName())

  constructor() {
    effect((value) => {
      console.log("New updated value: ", this.firstName(), this.lastName(), this.age(), this.gender());
    }
    )
  }

  ngOnInit(): void {
    this.initializeForm();
    this.handleValueChanges();
  }

  public initializeForm(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      age: new FormControl(null, Validators.required)
    })
  }

  public onSubmit(): void {
    if (this.registerForm.valid) {
      alert(`submitted ${this.firstName()} ${this.lastName()} ${this.age()} ${this.gender()}`);
      this.registerForm.reset();
    } else {
      alert("Please fill up form");
    }
  }

  public handleValueChanges(): void {
    this.registerForm.get('firstName')?.valueChanges.forEach((value) => {
      this.firstName.set(value);
    })
    this.registerForm.get('lastName')?.valueChanges.forEach((value) => {
      this.lastName.set(value);
    })
    this.registerForm.get('age')?.valueChanges.forEach((value) => {
      this.age.set(value);
    })
    this.registerForm.get('gender')?.valueChanges.forEach((value) => {
      this.gender.set(value);
    })
  }
}
