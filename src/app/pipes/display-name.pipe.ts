import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayName'
})
export class DisplayNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {  
      let displayName = value.substring(0, value.lastIndexOf("@"));
      if (displayName === '') {
        displayName = value;
      }
      return displayName;
    } else {
      return value;
    }
  }

}
