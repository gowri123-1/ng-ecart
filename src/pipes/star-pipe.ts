import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'starPipe',
  standalone: false
})
export class StarPipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return "⭐ "+value+" ⭐";
  }

}
