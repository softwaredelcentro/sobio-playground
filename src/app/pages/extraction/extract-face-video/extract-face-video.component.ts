import { FaceVideoResponse } from './../../../dataTypeObjects/faceVideoResponse';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FaceVideoDTO } from 'src/app/dataTypeObjects/faceVideo';
import { ExtractionService } from 'src/app/providers/extraction.service';

@Component({
  selector: 'app-extract-face-video',
  templateUrl: './extract-face-video.component.html',
  styleUrls: ['./extract-face-video.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class ExtractFaceVideoComponent implements OnInit {

  dto: FaceVideoDTO;
  @ViewChild('fileInput') fileInput: ElementRef;
  loading: boolean;
  jsonResponse: string;
  step: number;
  response: FaceVideoResponse;
  error: boolean;
  urlEndpoint: string;
  dataType: string;

  constructor(private extractionSrv: ExtractionService) {
    this.dto = new FaceVideoDTO();

    this.dto.auditToken = this.create_UUID();
  }

  ngOnInit() {
    this.step = 1;
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


  fileChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.video = reader.result as string;
      const dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(this.dto.video);
      if (dataInfo) {
        this.dataType = dataInfo[1];
      }
      this.dto.video = this.dto.video.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
      this.fileInput.nativeElement.value = '';
    };
    if (this.fileInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
    }
  }

  send() {
    this.error = false;
    this.loading = true;
    this.dto.params.blinkSensibility = this.dto.params.blinkSensibility / 10;
    this.extractionSrv.extractFaceVideo(this.dto).subscribe(resp => {
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
    this.urlEndpoint = this.extractionSrv.getEndpoints().faceVideo;
  }

  retry() {
    this.step = 1;
  }

}
