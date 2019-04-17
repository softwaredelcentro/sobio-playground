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

  copyComposite(index) {
    try {
      (navigator as any).clipboard.writeText(this.responseData.template.compositeFingerPrints[index].template).then(() => {
        // alert('Copied A');
      });
    } catch (e) {
        const selection = document.getSelection();
        const range = document.createRange();
        range.selectNode(document.getElementById('tplComposite' + index));
        selection.removeAllRanges();
        selection.addRange(range);
        const result = document.execCommand('copy');
        if (!result) {
          alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
        } else {
          // alert('Copied B');
        }
    }
  }

  copyFaces(index) {
    try {
      (navigator as any).clipboard.writeText(this.responseData.template.faces[index].template).then(() => {
        // alert('Copied A');
      });
    } catch (e) {
        const selection = document.getSelection();
        const range = document.createRange();
        range.selectNode(document.getElementById('tplFaces' + index));
        selection.removeAllRanges();
        selection.addRange(range);
        const result = document.execCommand('copy');
        if (!result) {
          alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
        } else {
          // alert('Copied B');
        }
    }
  }

  copyFingerPrint(index) {
    try {
      (navigator as any).clipboard.writeText(this.responseData.template.fingerPrints[index].template).then(() => {
        // alert('Copied A');
      });
    } catch (e) {
        const selection = document.getSelection();
        const range = document.createRange();
        range.selectNode(document.getElementById('tplFingerPrints' + index));
        selection.removeAllRanges();
        selection.addRange(range);
        const result = document.execCommand('copy');
        if (!result) {
          alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
        } else {
          // alert('Copied B');
        }
    }
  }

  copyTDV(index) {
    try {
      (navigator as any).clipboard.writeText(this.responseData.template.textDependentVoices[index].template).then(() => {
        // alert('Copied A');
      });
    } catch (e) {
        const selection = document.getSelection();
        const range = document.createRange();
        range.selectNode(document.getElementById('tplTDV' + index));
        selection.removeAllRanges();
        selection.addRange(range);
        const result = document.execCommand('copy');
        if (!result) {
          alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
        } else {
          // alert('Copied B');
        }
    }
  }

  copyTIV() {
    try {
      (navigator as any).clipboard.writeText(this.responseData.template.textIndependentVoice.template).then(() => {
        // alert('Copied A');
      });
    } catch (e) {
        const selection = document.getSelection();
        const range = document.createRange();
        range.selectNode(document.getElementById('tplTIV'));
        selection.removeAllRanges();
        selection.addRange(range);
        const result = document.execCommand('copy');
        if (!result) {
          alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
        } else {
          // alert('Copied B');
        }
    }
  }
}
