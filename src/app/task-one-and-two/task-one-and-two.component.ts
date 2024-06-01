import { Component, WritableSignal, signal } from '@angular/core';
import { IPerson } from '../interfaces/person.model';

@Component({
  selector: 'app-task-one-and-two',
  templateUrl: './task-one-and-two.component.html',
  styleUrls: ['./task-one-and-two.component.scss']
})
export class TaskOneAndTwoComponent {
  // string signal
  public name: WritableSignal<string> = signal('Jenish Devmurari');

  // number signal
  public id: WritableSignal<number> = signal(7);

  // boolean signal
  public isAvailable: WritableSignal<boolean> = signal(true);

  // object type signal 
  public person: WritableSignal<IPerson> = signal({ name: 'jenish', age: 21 });

  // array type signal
  public persons: WritableSignal<IPerson[]> = signal([{ name: 'jenish', age: 21 }, { name: 'vivek', age: 21 }])


  public changeName(): void {
    this.name.set('JENISH DEVMURARI');
  }

  public updateNumber(): void {
    this.id.update(value => value + 1);
  }

  public updateBoolean(): void {
    this.isAvailable.update(value => !value);
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
      for (let i = 0; i < this.persons().length; i++) {
        value[i].name = 'Bacancy';
        value[i].age = 29;
      }
    })
  }

  public setArray(): void {
    this.persons.set([{ name: 'hello', age: 20 }, { name: 'Hello1', age: 21 }])
  }
}
