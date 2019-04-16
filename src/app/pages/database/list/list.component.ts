import { UUID } from './../../../Utils/UUID';
import { Component, OnInit } from '@angular/core';
import { BioList } from 'src/app/dataTypeObjects/bioList';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class ListComponent implements OnInit {

  loading: boolean;
  dto: BioList;
  step: number;

  constructor() {
    this.dto = new BioList();
  }

  ngOnInit() {
    this.step = 1;
    this.dto.auditToken = UUID.create_UUID();
  }

}
