import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class EnrollComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
