import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class AppHighlightDirective {

  constructor() { }

  @HostBinding('style.box-shadow') boxShadow: string | null = null;
  @HostBinding('style.transform') transform: string | null = null;

  @HostListener('mouseover') onMouseOver() {
    this.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
    this.transform = 'scale(1.05)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.boxShadow = 'none';
    this.transform = 'scale(1)';
  }


}
