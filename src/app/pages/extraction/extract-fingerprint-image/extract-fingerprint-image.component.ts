import { FingerPrintImage } from './../../../dataTypeObjects/fingerPrintImage';
import { Component, OnInit } from '@angular/core';
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

  constructor() {
    this.dto = new FingerPrintImage();
    this.dto.auditToken = UUID.create();
  }

  ngOnInit() {
    this.step = 1;
    this.loading = false;
  }

}
