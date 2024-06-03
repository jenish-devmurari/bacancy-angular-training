import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, Input } from '@angular/core';
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

  constructor(private child: ChangeDetectorRef) {
  }

  public savePerson(person: IPerson): void {
    const index: number = this.persons.findIndex(per => per.id == person.id);
    this.persons[index] = person;
  }

  public editPerson(person: IPerson): void {
    this.currentPerson = { ...person };
  }

  public deletePerson(person: IPerson): void {
    const index: number = this.persons.findIndex(per => per.id == person.id);
    this.persons.splice(index, 1);
  }

  public increaseAge(): void {
    this.person.age++;
  }

}
