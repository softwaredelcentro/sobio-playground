import { FingerPrintImage } from './../../../dataTypeObjects/fingerPrintImage';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { UUID } from 'src/app/Utils/UUID';

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
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor() {
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

}
