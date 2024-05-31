import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { IPerson } from '../interfaces/person.interface';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ParentComponent {

  public persons: IPerson[] = [
    {
      id: 0,
      name: 'Jenish',
      age: 21,
      gender: 'Male'
    },
    {
      id: 1,
      name: 'Vivek',
      age: 21,
      gender: 'Male'
    },
    {
      id: 2,
      name: 'Aryan',
      age: 21,
      gender: 'Male'
    },
    {
      id: 3,
      name: 'Nilay',
      age: 21,
      gender: 'Male'
    },

  ];
  public person: IPerson = {
    id: 0,
    name: 'Jenish',
    age: 21,
    gender: 'Male'
  };

  public currentPerson: IPerson = { id: 0, name: '', age: 0, gender: '' };

  constructor(private cd: ChangeDetectorRef) { }

  public updateArray(): void {
    this.persons = this.persons.map(value => ({
      ...value,
      name: value.name + ' Bacancy',
      gender: 'male'
    }));
  }

  public updateObject(): void {
    this.person = {
      ...this.person,
      name: 'Jenish Devmurari',
      age: 22
    };
  }

  savePerson(person: IPerson): void {
    const index: number = this.persons.findIndex(per => per.id == person.id);
    this.persons[index] = { ...person };
  }

  editPerson(person: IPerson): void {
    this.currentPerson = { ...person };
  }

  public deletePerson(person: IPerson): void {
    this.persons = this.persons.filter(per => per.id !== person.id);
  }
}
