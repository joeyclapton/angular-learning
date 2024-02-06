import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[accentColor]',
  standalone: true,
})
export class AccentColorDirective {
  @Input() color = '';
  element: ElementRef;

  constructor(element: ElementRef) {
    this.element = element;
  }

  ngOnInit() {
    this.element.nativeElement.style.color = this.color;
  }
}
