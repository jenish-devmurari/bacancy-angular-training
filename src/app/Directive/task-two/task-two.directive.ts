import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTaskTwo]'
})
export class TaskTwoDirective {

  constructor(private element: ElementRef) {
  }

  @HostBinding('style.textTransform') textTransform: string = 'uppercase';
  @HostBinding('style.textAlign') textAlign: string = 'center';
  @HostBinding('style.color') color: string = 'blue';

  @HostListener('mouseover') onMouseOver() {
    this.color = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = 'blue';
  }

}
