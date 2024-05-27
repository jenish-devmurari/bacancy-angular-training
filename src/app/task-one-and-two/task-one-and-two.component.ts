import { Component, WritableSignal, signal } from '@angular/core';

@Component({
  selector: 'app-task-one-and-two',
  templateUrl: './task-one-and-two.component.html',
  styleUrls: ['./task-one-and-two.component.scss']
})
export class TaskOneAndTwoComponent {
  // string signal
  public stringSignal: WritableSignal<string> = signal('Jenish Devmurari');

  // number signal
  public numberSignal: WritableSignal<number> = signal(7);

  // boolean signal
  public booleanSignal: WritableSignal<boolean> = signal(true);

  // object type signal 
  public person: WritableSignal<{ name: string, age: number }> = signal({ name: 'jenish', age: 21 });

  // array type signal
  public persons: WritableSignal<{ name: string, age: number }[]> = signal([{ name: 'jenish', age: 21 }, { name: 'vivek', age: 21 }])


  public changeName(): void {
    this.stringSignal.set('JENISH DEVMURARI');
  }

  public updateNumber(): void {
    this.numberSignal.update(value => value + 1);
  }

  public updateBoolean(): void {
    this.booleanSignal.update(() => !this.booleanSignal);
  }

  public updateObject(): void {
    this.person.mutate(v => v.name = 'hello');
  }

  public setNewObject(): void {
    this.person.set({ name: "Bacancy", age: 24 })
  }

  public addPerson(): void {
    this.persons.update(persons => [...persons, { name: 'Hello', age: 22 }]);
  }

  public mutateArray(): void {
    this.persons.mutate(value => {
      if (value) {
        for (let i = 0; i < this.persons().length; i++) {
          value[i].name = 'Bacancy';
          value[i].age = 29;
        }
      }
    })
  }

  public setArray(): void {
    this.persons.set([{ name: 'hello', age: 20 }, { name: 'Hello1', age: 21 }])
  }
}
