import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FaceImageDTO } from 'src/app/dataTypeObjects/faceImage';
import { ExtractionService } from 'src/app/providers/extraction.service';
import { FaceImageResponse } from 'src/app/dataTypeObjects/faceImageResponse';

@Component({
  selector: 'app-extract-face-image',
  templateUrl: './extract-face-image.component.html',
  styleUrls: ['./extract-face-image.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class ExtractFaceImageComponent implements OnInit {

  dto: FaceImageDTO;
  @ViewChild('fileInput') fileInput: ElementRef;
  loading: boolean;
  jsonResponse: string;
  step: number;
  response: FaceImageResponse;
  error: boolean;
  urlEndpoint: string;

  constructor(private extractionSrv: ExtractionService) {
    this.dto = new FaceImageDTO();

    // mock inicial
    this.dto.auditToken = 'tok123';
  }

  ngOnInit() {
    this.step = 1;
    // this.step = 2;
    // this.jsonResponse = '{asdasdsa: asdadsd, asdasd : qweqwe}';
  }

  fileChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.image = reader.result as string;
      this.dto.image = this.dto.image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
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
    this.extractionSrv.extractFaceImage(this.dto).subscribe(resp => {
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
    this.urlEndpoint = this.extractionSrv.getEndpoints().faceImage;
  }

  retry() {
    this.step = 1;
  }

}
