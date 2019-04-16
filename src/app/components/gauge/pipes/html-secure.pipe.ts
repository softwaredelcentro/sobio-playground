import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'styleSecure'
})
export class HtmlSecurePipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {}

  transform(html: string): any {
    return this.sanitizer.bypassSecurityTrustStyle(html);
  }

}
