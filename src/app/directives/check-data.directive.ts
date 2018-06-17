import { Directive, Output, EventEmitter, Input, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appCheckData]'
})
export class CheckDataDirective {

  @Output() appCheckData: EventEmitter<any> = new EventEmitter<any>();
  constructor() {
    
  }

  ngOnInit() {      
    this.appCheckData.emit('dummy');
 } 

}
