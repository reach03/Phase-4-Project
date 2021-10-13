import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
@Input()
correctAnswer:boolean = false;

  constructor(private elRef:ElementRef, private render:Renderer2) { }

  @HostListener('click') onAnswered(){
    this.render.setStyle(this.elRef.nativeElement, 'background-color', 'yellow');
      }
}
