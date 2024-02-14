import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClicked]',
})
export class ClickedDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onSelectedUser() {
    this.setSelectedStyles();
  }

  @HostListener('mouseleave') onCanceledSelected() {
    this.removeSelectedStyle();
  }

  private setSelectedStyles() {
    this.renderer.addClass(this.element.nativeElement, 'selected-user');
  }

  private removeSelectedStyle() {
    this.renderer.removeClass(this.element.nativeElement, 'selected-user');
  }
}
