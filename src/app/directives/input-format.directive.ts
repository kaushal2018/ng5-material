import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  // @Input('format') format;
  @Input('appInputFormat') format;
  constructor(private el: ElementRef) { 
    el.nativeElement.style.fontSize = '100px';
  }

  // @HostListener('focus') onfocus() {
  //   console.log('on Fucus');
  // }

  @HostListener('blur') onblur() {
    console.log('on Blur' + this.el.nativeElement.value);
    let value: string = this.el.nativeElement.value;
    if (this.format === 'lowercase')
      this.el.nativeElement.value = value.toLowerCase();
    else
      this.el.nativeElement.value = value.toUpperCase();
  }

}
