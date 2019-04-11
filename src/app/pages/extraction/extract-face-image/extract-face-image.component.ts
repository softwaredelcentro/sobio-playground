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

  constructor(private extractionSrv: ExtractionService) {
    this.dto = new FaceImageDTO();
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
    };
    if (this.fileInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
    }
  }

  send() {
    this.loading = true;
    this.extractionSrv.extractFaceImage(this.dto).subscribe(resp => {
      this.loading = false;
      console.log(resp);
      this.jsonResponse = JSON.stringify(resp);
      this.step = 2;
    }, err => {
      console.log(err);
      alert('Ocurrió un error con el llamado por favor vea el log');
      this.jsonResponse = JSON.stringify(err);
    });
  }

}
