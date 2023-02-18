import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'des'
})
export class DesPipe implements PipeTransform {

  transform(description:string): string {
    return description.split(" ").slice(0,7).join(' ');
  }

}
