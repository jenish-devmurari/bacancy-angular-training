import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTaskThree]'
})
export class TaskThreeDirective {
  count: number = 0;

  constructor() { }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    this.count++;
    this.displayTotalCount();
  }

  public displayTotalCount() {
    const countDisplay = document.getElementById('totalCount');
    if (countDisplay) {
      countDisplay.textContent = this.count.toString();
    }
  }

}
