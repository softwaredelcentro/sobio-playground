import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DniAr } from 'src/app/dataTypeObjects/dniAr';
import { ExtractionService } from 'src/app/providers/extraction.service';
import { DniArResponse } from 'src/app/dataTypeObjects/DniArResponse';

@Component({
  selector: 'app-dni-ar',
  templateUrl: './dni-ar.component.html',
  styleUrls: ['./dni-ar.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class DniArComponent implements OnInit {

  loading: boolean;
  dto: DniAr = new DniAr();
  backDataType: string;
  frontDataType: string;
  step: number;

  urlEndpoint: string;
  jsonResponse: string;
  error: boolean;
  response: DniArResponse;

  @ViewChild('fileBackInput') fileBackInput: ElementRef;
  @ViewChild('fileFrontInput') fileFrontInput: ElementRef;

  constructor(private extractionSrv: ExtractionService) { }

  ngOnInit() {
    this.step = 1;
    this.dto.auditToken = this.create_UUID();
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

  fileBackChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.backImage = reader.result as string;
      // extracting data
      const dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(this.dto.backImage);
      if (dataInfo) {
        this.backDataType = dataInfo[1];
      }
      this.dto.backImage = this.dto.backImage.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
      this.fileBackInput.nativeElement.value = '';
    };
    if (this.fileBackInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileBackInput.nativeElement.files[0]);
    }
  }

  fileFrontChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.frontImage = reader.result as string;
      // extracting data
      const dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(this.dto.frontImage);
      if (dataInfo) {
        this.frontDataType = dataInfo[1];
      }
      this.dto.frontImage = this.dto.frontImage.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
      this.fileFrontInput.nativeElement.value = '';
    };
    if (this.fileFrontInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileFrontInput.nativeElement.files[0]);
    }
  }


  send() {
    this.error = false;
    this.loading = true;
    this.extractionSrv.extractDni(this.dto).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.response = resp;
      this.jsonResponse = JSON.stringify(resp);
      this.step = 2;
    }, err => {
      console.log(err);
      this.error = true;
      this.jsonResponse = JSON.stringify(err);
      this.step = 2;
      this.loading = false;
    });
    this.urlEndpoint = this.extractionSrv.getEndpoints().dniAr;
  }

  retry() {
    this.step = 1;
  }

}
