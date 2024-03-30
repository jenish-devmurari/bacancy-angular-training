import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'error-handling';
  public user = {
    name: "Jenish Devmurari"  // Add name : "Jenish Devmurari"
  };
  employees: any;

  addEmp(): void {
    this.employees.push('employee')
  }

  onRemoveEmp(id: number) {
    const position = id + 1;
    this.employees.splice(position, 1);
  }
}