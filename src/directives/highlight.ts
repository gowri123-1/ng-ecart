import { Directive, ElementRef, HostListener, Input, } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class Highlight {

  // constructor() { }
  @Input() appHighlight = 'green';

  constructor(private el: ElementRef) {
    console.log('Test ', el);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor = this.appHighlight;
    this.el.nativeElement.style.color = 'white';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor = '';
    this.el.nativeElement.style.color = 'black';
  }

}
