import { DatabaseService } from './../../../providers/database.service';
import { UUID } from './../../../Utils/UUID';
import { Component, OnInit } from '@angular/core';
import { BioList } from 'src/app/dataTypeObjects/bioList';
import { BioListResponse } from 'src/app/dataTypeObjects/bioListResponse';
import { DeleteResponse } from 'src/app/dataTypeObjects/deleteResponse';
import { SubjectDataResponse } from 'src/app/dataTypeObjects/subjectDataResponse';
import { SubjectInfoResponse } from 'src/app/dataTypeObjects/subjectInfoResponse';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class ListComponent implements OnInit {

  loading: boolean;
  dto: BioList;
  step: number;
  popup: boolean;
  subAction: number;

  error: boolean;
  jsonResponse: string;
  urlEndpoint: string;
  response: BioListResponse;
  subAuditToken: string;
  subjectID: string;

  subError: boolean;
  subStep: number;
  subJsonResponse: string;
  subUrlEndpoint: string;
  responseDalete: DeleteResponse;
  responseData: SubjectDataResponse;
  responseInfo: SubjectInfoResponse;


  constructor(private dbSrv: DatabaseService) {
    this.dto = new BioList();
  }

  ngOnInit() {
    this.step = 1;
    this.dto.auditToken = UUID.create();
    this.popup = false;
    this.subAction = 0;
    this.subStep = 0;
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

  openPopup() {
    this.subAuditToken = UUID.create();
    this.popup = true;
  }

  delete(subjectID: string) {
    this.subjectID = subjectID;
    this.openPopup();
    this.subAction = 1;
  }

  download(subjectID: string) {
    this.subjectID = subjectID;
    this.openPopup();
    this.subAction = 2;
  }

  viewData(subjectID: string) {
    this.subjectID = subjectID;
    this.openPopup();
    this.subAction = 3;
  }

  viewInfo(subjectID: string) {
    this.subjectID = subjectID;
    this.openPopup();
    this.subAction = 4;
  }

  doDelete() {
    this.dbSrv.delete({
      auditToken: this.subAuditToken,
      subjectId: this.subjectID
    }).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.subStep = 2;
      this.responseDalete = resp;
      this.subJsonResponse = JSON.stringify(resp);
      this.subError = false;
    }, err => {
      console.log(err);
      this.subError = true;
      this.loading = false;
      this.subStep = 2;
      this.subJsonResponse = JSON.stringify(err);
    });
    this.subUrlEndpoint = this.dbSrv.getEndpoints().delete;
  }

  doDownload() {
    this.dbSrv.downZip(this.subjectID).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.subStep = 3;
      // this.responseDownzip = resp;
      const blob = new Blob([resp], { type: 'application/zip' });
      const url = window.URL.createObjectURL(blob);
      const pwa = window.open(url);
      if (!pwa || pwa.closed || typeof pwa.closed === 'undefined') {
        alert('Please disable your Pop-up blocker and try again.');
      }
      this.subJsonResponse = JSON.stringify(resp);
      this.subError = false;
    }, err => {
      console.log(err);
      this.subError = true;
      this.loading = false;
      this.subStep = 3;
      this.subJsonResponse = JSON.stringify(err);
    });
    this.subUrlEndpoint = this.dbSrv.getEndpoints().zip;
  }

  doViewData() {
    this.dbSrv.getData({
      auditToken: this.subAuditToken,
      subjectId: this.subjectID
    }).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.subStep = 4;
      this.responseData = resp;
      this.subJsonResponse = JSON.stringify(resp);
      this.subError = false;
    }, err => {
      console.log(err);
      this.subError = true;
      this.loading = false;
      this.subStep = 4;
      this.subJsonResponse = JSON.stringify(err);
    });
    this.subUrlEndpoint = this.dbSrv.getEndpoints().data;
  }

  doViewInfo() {
    this.dbSrv.getInfo({
      auditToken: this.subAuditToken,
      subjectId: this.subjectID
    }).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.subStep = 5;
      this.responseInfo = resp;
      this.subJsonResponse = JSON.stringify(resp);
      this.subError = false;
    }, err => {
      console.log(err);
      this.subError = true;
      this.loading = false;
      this.subStep = 5;
      this.subJsonResponse = JSON.stringify(err);
    });
    this.subUrlEndpoint = this.dbSrv.getEndpoints().info;
  }

  closePopup() {
    this.popup = false;
    this.subStep = 1;
  }
}
