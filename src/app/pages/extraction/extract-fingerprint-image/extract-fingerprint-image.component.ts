import { FingerPrintImage } from './../../../dataTypeObjects/fingerPrintImage';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UUID } from 'src/app/Utils/UUID';
import { ExtractionService } from 'src/app/providers/extraction.service';
import { FingerPrintImageResponse } from 'src/app/dataTypeObjects/fingerPrintImageResponse';

@Component({
  selector: 'app-extract-fingerprint-image',
  templateUrl: './extract-fingerprint-image.component.html',
  styleUrls: [
    './extract-fingerprint-image.component.sass',
    '../../../shared-styles/forms.scss',
    '../../../shared-styles/playground-response.scss'
  ]
})
export class ExtractFingerprintImageComponent implements OnInit {

  loading: boolean;
  step: number;
  dataType: string;
  dto: FingerPrintImage;
  jsonResponse: string;
  response: FingerPrintImageResponse;
  error: boolean;
  urlEndpoint: string;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private extractionSrv: ExtractionService) {
    this.dto = new FingerPrintImage();
    this.dto.auditToken = UUID.create();
  }

  ngOnInit() {
    this.step = 1;
    this.loading = false;
  }

  fileChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.image = reader.result as string;
      // extracting data
      const dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(this.dto.image);
      if (dataInfo) {
        this.dataType = dataInfo[1];
      }
      this.dto.image = this.dto.image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
      this.fileInput.nativeElement.value = '';
    };
    if (this.fileInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
    }
  }

  send() {
    this.extractionSrv.extractFingerprint(this.dto).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.response = resp;
      this.jsonResponse = JSON.stringify(resp);
      this.step = 2;
      this.error = false;
    }, err => {
      console.log(err);
      this.error = true;
      this.jsonResponse = JSON.stringify(err);
      this.step = 2;
      this.loading = false;
    });
    this.urlEndpoint = this.extractionSrv.getEndpoints().faceImage;
  }

  copy() {
    try {
      (navigator as any).clipboard.writeText(this.response.fingerPrint.template).then(() => {
        // alert('Copied A');
      });
    } catch (e) {
        const selection = document.getSelection();
        const range = document.createRange();
        range.selectNode(document.getElementById('templateResponse'));
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
