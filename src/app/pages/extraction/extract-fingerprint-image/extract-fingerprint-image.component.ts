import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract-fingerprint-image',
  templateUrl: './extract-fingerprint-image.component.html',
  styleUrls: ['./extract-fingerprint-image.component.sass']
})
export class ExtractFingerprintImageComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
