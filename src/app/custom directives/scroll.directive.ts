import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor(private element:ElementRef,private renderer:Renderer2) { }
 @HostListener('mouseenter') scroll(){
    this.renderer.setStyle(this.element.nativeElement,'padding','20px')
    this.renderer.setStyle(this.element.nativeElement,'transition','.5s')
  }

}
