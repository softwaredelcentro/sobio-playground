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

  constructor(private extractionSrv: ExtractionService) {
    this.dto = new FaceVideoDTO();
  }

  ngOnInit() {
    this.step = 1;
  }

  fileChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.video = reader.result as string;
      this.dto.video = this.dto.video.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
    };
    if (this.fileInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
    }
  }

  send() {
    this.loading = true;
    this.extractionSrv.extractFaceVideo(this.dto).subscribe(resp => {
      this.loading = false;
      this.step = 2;
      this.jsonResponse = JSON.stringify(resp);
      console.log(resp);
    }, err => {
      console.log(err);
      this.loading = false;
      this.step = 2;
      this.jsonResponse = JSON.stringify(err);
      alert('Ocurrió un error con el llamado por favor vea el log');
    });
  }

  retry() {
    this.step = 1;
  }

}
