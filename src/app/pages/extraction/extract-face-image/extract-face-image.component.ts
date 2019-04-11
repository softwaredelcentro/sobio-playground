import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FaceImageDTO } from 'src/app/dataTypeObjects/faceImage';
import { ExtractionService } from 'src/app/providers/extraction.service';

@Component({
  selector: 'app-extract-face-image',
  templateUrl: './extract-face-image.component.html',
  styleUrls: ['./extract-face-image.component.sass', '../../../shared-styles/forms.scss']
})
export class ExtractFaceImageComponent implements OnInit {

  dto: FaceImageDTO;
  @ViewChild('fileInput') fileInput: ElementRef;
  loading: boolean;


  constructor(private extractionSrv: ExtractionService) {
    this.dto = new FaceImageDTO();
  }

  ngOnInit() {
  }

  fileChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.image = reader.result as string;
      this.dto.image = this.dto.image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
    };
    reader.readAsDataURL(this.fileInput.nativeElement.files[0]);
  }

  send() {
    this.loading = true;
    this.extractionSrv.extractFaceImage(this.dto).subscribe(resp => {
      this.loading = false;
      console.log(resp);
    }, err => {
      console.log(err);
      alert('Ocurrió un error con el llamado por favor vea el log');
    });
  }

}
