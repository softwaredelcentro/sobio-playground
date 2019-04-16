import { DatabaseService } from './../../../providers/database.service';
import { UUID } from './../../../Utils/UUID';
import { Component, OnInit } from '@angular/core';
import { BioList } from 'src/app/dataTypeObjects/bioList';
import { BioListResponse } from 'src/app/dataTypeObjects/bioListResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class ListComponent implements OnInit {

  loading: boolean;
  dto: BioList;
  step: number;


  error: boolean;
  jsonResponse: string;
  urlEndpoint: string;
  response: BioListResponse;

  constructor(private dbSrv: DatabaseService) {
    this.dto = new BioList();
  }

  ngOnInit() {
    this.step = 1;
    this.dto.auditToken = UUID.create();
  }

  send() {
    this.dbSrv.getList(this.dto).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.step = 2;
      this.response = resp;
      this.jsonResponse = JSON.stringify(resp);
    }, err => {
      console.log(err);
      this.error = true;
      this.loading = false;
      this.step = 2;
      this.jsonResponse = JSON.stringify(err);
    });
    this.urlEndpoint = this.dbSrv.getEndpoints().list;
  }

}
