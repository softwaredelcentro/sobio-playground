import { Component, OnInit } from '@angular/core';
import { UUID } from 'src/app/Utils/UUID';
import { DatabaseService } from 'src/app/providers/database.service';
import { DeleteResponse } from 'src/app/dataTypeObjects/deleteResponse';
import { DownZipBiodataResponse } from 'src/app/dataTypeObjects/downZipBiodataResponse';
import { SubjectDataResponse } from 'src/app/dataTypeObjects/subjectDataResponse';
import { SubjectInfoResponse } from 'src/app/dataTypeObjects/subjectInfoResponse';

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

  responseDalete: DeleteResponse;
  responseDownzip: DownZipBiodataResponse;
  responseData: SubjectDataResponse;
  responseInfo: SubjectInfoResponse;

  jsonResponse: string;
  error: boolean;
  urlEndpoint: string;

  constructor(private dbSrv: DatabaseService) {}

  ngOnInit() {
    this.step = 1;
    this.auditToken = UUID.create();
  }

  delete() {
    this.dbSrv.delete({
      auditToken: this.auditToken,
      subjectId: this.subjectID
    }).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.step = 2;
      this.responseDalete = resp;
      this.jsonResponse = JSON.stringify(resp);
    }, err => {
      console.log(err);
      this.error = true;
      this.loading = false;
      this.step = 2;
      this.jsonResponse = JSON.stringify(err);
    });
    this.urlEndpoint = this.dbSrv.getEndpoints().delete;
  }

  downzip() {
    this.dbSrv.downZip(this.subjectID).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.step = 3;
      this.responseDownzip = resp;
      this.jsonResponse = JSON.stringify(resp);
    }, err => {
      console.log(err);
      this.error = true;
      this.loading = false;
      this.step = 3;
      this.jsonResponse = JSON.stringify(err);
    });
    this.urlEndpoint = this.dbSrv.getEndpoints().zip;
  }

  data() {
    this.dbSrv.getData({
      auditToken: this.auditToken,
      subjectId: this.subjectID
    }).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.step = 4;
      this.responseData = resp;
      this.jsonResponse = JSON.stringify(resp);
    }, err => {
      console.log(err);
      this.error = true;
      this.loading = false;
      this.step = 4;
      this.jsonResponse = JSON.stringify(err);
    });
    this.urlEndpoint = this.dbSrv.getEndpoints().data;
  }

  info() {
    this.dbSrv.getInfo({
      auditToken: this.auditToken,
      subjectId: this.subjectID
    }).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.step = 5;
      this.responseInfo = resp;
      this.jsonResponse = JSON.stringify(resp);
    }, err => {
      console.log(err);
      this.error = true;
      this.loading = false;
      this.step = 5;
      this.jsonResponse = JSON.stringify(err);
    });
    this.urlEndpoint = this.dbSrv.getEndpoints().info;
  }
}
