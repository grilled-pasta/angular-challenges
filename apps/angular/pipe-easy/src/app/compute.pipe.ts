import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'compute',
  pure: true,
})
export class ComputePipe implements PipeTransform {
  transform(value: string, index: number): string {
    return `${value} - ${index}`;
  }
}
