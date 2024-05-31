import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPerson } from '../interfaces/person.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent {
  @Input({ required: true }) persons !: IPerson[];
  @Input({ required: true }) person !: IPerson;

  public currentPerson: IPerson = { id: 0, name: '', age: 0, gender: '' };

  constructor() {
  }

  // savePerson(person: IPerson): void {
  //   const index: number = this.persons.findIndex(per => per.id == person.id);
  //   this.persons[index] = person;
  // }

  // editPerson(person: IPerson): void {
  //   this.currentPerson = { ...person };
  // }

  // deletePerson(person: IPerson): void {
  //   this.persons = this.persons.filter(per => per.id !== person.id);
  // }

}
