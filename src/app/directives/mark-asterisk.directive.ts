import { Directive,OnInit ,ElementRef, Renderer2, NgModule } from '@angular/core';

@Directive({
  selector: '[required]'
})
export class MarkAsteriskDirective {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  ngOnInit(){
    const parent = this.renderer.parentNode(this.el.nativeElement);

    console.log("parent" +  parent)
    if (parent.getElementsByTagName('label').length && !parent.getElementsByClassName('required-asterisk').length) {
      parent.getElementsByTagName('label')[0].innerHTML += '<span class="required-asterisk">*</span>';
    }
  }


}
@NgModule({
  declarations: [ MarkAsteriskDirective ],
  exports: [ MarkAsteriskDirective ]
})

export class MarkAsteriskDirectiveModule {}
