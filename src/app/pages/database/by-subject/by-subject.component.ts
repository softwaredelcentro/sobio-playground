import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-subject',
  templateUrl: './by-subject.component.html',
  styleUrls: ['./by-subject.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class BySubjectComponent implements OnInit {

  loading: boolean;
  step: number;
  auditToken: string;
  subjectID: string;

  constructor() {}

  ngOnInit() {
    this.step = 1;
    this.auditToken = this.create_UUID();
  }

  create_UUID() {
    let dt = new Date().getTime();
    const uuid = 'xxxxxxxx'.replace(/[xy]/g, (c) => {
        // tslint:disable-next-line:no-bitwise
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        // tslint:disable-next-line:no-bitwise
        return (c === 'x' ? r : (r & 0x3 | 0x8) ).toString(16);
    });
    return uuid;
  }

}
