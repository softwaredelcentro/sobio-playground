import { Pipe, PipeTransform } from '@angular/core';
import { TMTP } from './TMTP';

@Pipe({
  name: 'DateParsed'
})
export class DateParsedPipe implements PipeTransform {

  transform(value: string): any {
    return TMTP.formatTimestamp(value);
  }

}
