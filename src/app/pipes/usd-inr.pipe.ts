import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Pipe({
  name: 'usdInr'
})
export class UsdInrPipe implements PipeTransform {

  transform(dollars: number, ...args: number[]): unknown {
    const [rate] = args
    return dollars * rate;
  }

}