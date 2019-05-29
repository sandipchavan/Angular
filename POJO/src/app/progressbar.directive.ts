
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appProgressbar]'
})
export class ProgressbarDirective {

  progressValue:number;
  constructor(private elementRef:ElementRef, private renderer:Renderer2) {}

   @HostListener('window:scroll',['$event']) onScroll(){
    this.updateProgressbarValue(event);
  }

  private updateProgressbarValue($event){
              var s = document.documentElement.scrollTop;
              let d = document.body.scrollHeight;
              let c = window.innerHeight;
              let scrollPercent = (s / (d-c)) * 100;
              this.progressValue = scrollPercent;
              this.renderer.setStyle(this.elementRef.nativeElement,'width',this.progressValue+"%");
  }

}
