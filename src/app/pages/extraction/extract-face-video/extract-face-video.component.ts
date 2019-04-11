import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FaceVideoDTO } from 'src/app/dataTypeObjects/faceVideo';
import { ExtractionService } from 'src/app/providers/extraction.service';

@Component({
  selector: 'app-extract-face-video',
  templateUrl: './extract-face-video.component.html',
  styleUrls: ['./extract-face-video.component.sass', '../../../shared-styles/forms.scss']
})
export class ExtractFaceVideoComponent implements OnInit {

  dto: FaceVideoDTO;
  @ViewChild('fileInput') fileInput: ElementRef;
  loading: boolean;

  constructor(private extractionSrv: ExtractionService) {
    this.dto = new FaceVideoDTO();
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
    this.extractionSrv.extractFaceVideo(this.dto).subscribe(resp => {
      this.loading = false;
    }, err => {
      alert('Ocurrió un error con el llamado por favor vea el log');
    });
  }

}