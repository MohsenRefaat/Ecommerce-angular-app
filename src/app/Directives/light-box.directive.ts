import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[LightBox]',
  standalone:true,
})
export class LightBoxDirective {

  constructor(private elemRef: ElementRef) { 
  elemRef.nativeElement.style.border="2px solid yellow";
  }
  @HostListener('mouseover') OnMouseOver() {
    this.elemRef.nativeElement.style.border="3px solid red";
  }
  @HostListener('mouseout') OnMouseOut() {
    this.elemRef.nativeElement.style.border="2px solid yellow";
  }

}
