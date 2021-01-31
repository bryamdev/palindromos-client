import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booleanPipe'
})
export class BooleanPipe implements PipeTransform {

  transform(value: any): unknown {
    return (value)? "SI": "NO";
  }

}
