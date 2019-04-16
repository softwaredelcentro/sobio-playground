import { Component, OnInit } from '@angular/core';
import { UUID } from 'src/app/Utils/UUID';

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
    this.auditToken = UUID.create();
  }

}
