import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[customFor]',
  standalone: true,
})
export class CustomForDirective implements OnInit {
  @Input('customForIn') numbers: number[];

  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {
    console.log(this.container, this.template);
    this.numbers = [];
  }

  ngOnInit(): void {
    for (let number of this.numbers) {
      this.container.createEmbeddedView(this.template, {
        $implicit: number,
      });
    }
    console.log(this.numbers);
  }
}
