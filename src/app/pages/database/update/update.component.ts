import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class UpdateComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
