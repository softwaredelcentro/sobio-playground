import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DniAr } from 'src/app/dataTypeObjects/dniAr';
import { ExtractionService } from 'src/app/providers/extraction.service';
import { DniArResponse, FingerPrintModelVO } from 'src/app/dataTypeObjects/dniArResponse';
import { UUID } from 'src/app/Utils/UUID';

@Component({
  selector: 'app-dni-ar',
  templateUrl: './dni-ar.component.html',
  styleUrls: ['./dni-ar.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class DniArComponent implements OnInit {

  loading: boolean;
  dto: DniAr = new DniAr();
  backDataType: string;
  frontDataType: string;
  step: number;

  urlEndpoint: string;
  jsonResponse: string;
  error: boolean;
  response: DniArResponse;
  public parsedFingerPrint: object;

  @ViewChild('fileBackInput') fileBackInput: ElementRef;
  @ViewChild('fileFrontInput') fileFrontInput: ElementRef;

  constructor(private extractionSrv: ExtractionService) { }

  ngOnInit() {
    this.step = 1;
    this.dto.auditToken = UUID.create();
  }

  fileBackChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.backImage = reader.result as string;
      // extracting data
      const dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(this.dto.backImage);
      if (dataInfo) {
        this.backDataType = dataInfo[1];
      }
      this.dto.backImage = this.dto.backImage.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
      this.fileBackInput.nativeElement.value = '';
    };
    if (this.fileBackInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileBackInput.nativeElement.files[0]);
    }
  }

  fileFrontChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.frontImage = reader.result as string;
      // extracting data
      const dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(this.dto.frontImage);
      if (dataInfo) {
        this.frontDataType = dataInfo[1];
      }
      this.dto.frontImage = this.dto.frontImage.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
      this.fileFrontInput.nativeElement.value = '';
    };
    if (this.fileFrontInput.nativeElement.files[0]) {
      reader.readAsDataURL(this.fileFrontInput.nativeElement.files[0]);
    }
  }


  send() {
    this.error = false;
    this.loading = true;
    this.extractionSrv.extractDni(this.dto).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.response = resp;
      this.jsonResponse = JSON.stringify(resp);
      this.step = 2;

      if (this.response.documentInfo.fingerPrint !== undefined && this.response.documentInfo.fingerPrint.image.length > 0) {
        this.getFingerPrintImage(this.response.documentInfo.fingerPrint);
      }
    }, err => {
      console.log(err);
      this.error = true;
      this.jsonResponse = JSON.stringify(err);
      this.step = 2;
      this.loading = false;
    });
    this.urlEndpoint = this.extractionSrv.getEndpoints().dniAr;
  }

  getFingerPrintImage(finger: FingerPrintModelVO): void {
    console.log('get finger');

    this.extractionSrv.getFingerPrintImage(this.dto.auditToken, finger.image).subscribe(response => {
      console.log(response);
      this.parsedFingerPrint = response;
    });
  }

  retry() {
    this.step = 1;
  }

  copy() {
    try {
      (navigator as any).clipboard.writeText(this.response.documentInfo.face.template).then(() => {
        // alert('Copied A');
      });
    } catch (e) {
        // no tiene ssl
        // $(this).find('.copyRealText').select();
        const selection = document.getSelection();
        const range = document.createRange();
        range.selectNode(document.getElementById('templateResponse'));
        selection.removeAllRanges();
        selection.addRange(range);
        const result = document.execCommand('copy');
        // tampoco funcionó:
        if (!result) {
          alert('Can\'t copy (HTTPS/Chrome +43/Permisos).');
        } else {
          // alert('Copied B');
        }
    }
  }

}
