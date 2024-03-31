import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title: string = 'error-handling';
  public user: { name: string } = {
    name: "Jenish Devmurari"  // Add name : "Jenish Devmurari"
  };
  public employees: string[] = [];

  public addEmp(): void {
    this.employees.push('employee')
  };

  public onRemoveEmp(id: number): void {
    this.employees.splice(id, 1);
  };

  public removeAllEmp(): void {
    this.employees = [];
  };
}