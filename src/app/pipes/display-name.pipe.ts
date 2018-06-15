import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayName'
})
export class DisplayNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {  
      const displayName = value.substring(0, value.lastIndexOf("@"));
      return displayName;
    } else {
      return value;
    }
  }

}
