import { Component } from '@angular/core';
import { UserList } from './interface/interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public title = 'bacancy-angular-training';
  public cardImages: string[] = [
    'assets/bacancy.png',
    'assets/bacancy.png',
    'assets/bacancy.png',
    'assets/bacancy.png',
    'assets/bacancy.png',
    'assets/bacancy.png',
    'assets/bacancy.png',
    'assets/bacancy.png'
  ];

  public selectedOption: string = "";
  public options: string[] = ['Home', 'Company', 'College', 'School', 'City'];

  public userList: UserList[] = [
    { id: 0, name: 'Jenish', age: 25 },
    { id: 1, name: 'Vivek', age: 30 },
    { id: 2, name: 'Anjali', age: 28 },
    { id: 3, name: 'Raj', age: 35 },
    { id: 4, name: 'Karan', age: 40 },
    { id: 5, name: 'Naman', age: 22 },
    { id: 6, name: 'Naman', age: 22 }
  ];

}
