import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityName',
})
export class PriorityNamePipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    console.log(args);
    if(value.includes(args[2])){
      return args[0] + value + args[1];

    } else{
      return value;
    }
  }
}
