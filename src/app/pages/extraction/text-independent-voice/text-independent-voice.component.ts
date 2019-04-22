import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { TextIndependentVoice } from 'src/app/dataTypeObjects/textIndependentVoice';
import { UUID } from 'src/app/Utils/UUID';
import { TextIndependentVoiceResponse } from 'src/app/dataTypeObjects/textIndependentVoiceResponse';
import { ExtractionService } from 'src/app/providers/extraction.service';

@Component({
  selector: 'app-text-independent-voice',
  templateUrl: './text-independent-voice.component.html',
  styleUrls: [
    './text-independent-voice.component.sass',
    '../../../shared-styles/forms.scss',
    '../../../shared-styles/playground-response.scss'
  ]
})
export class TextIndependentVoiceComponent implements OnInit {

  loading: boolean;
  dto: TextIndependentVoice;
  dataType: string;
  step: number;
  jsonResponse: string;
  response: TextIndependentVoiceResponse;
  error: boolean;
  urlEndpoint: string;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private extractionSrv: ExtractionService) {
    this.dto = new TextIndependentVoice();
  }

  ngOnInit() {
    this.loading = false;
    this.step = 1;
    this.dto.auditToken = UUID.create();
  }

  fileChange() {
    this.loading = true;
    const reader  = new FileReader();
    reader.onload = () => {
      this.dto.audio = reader.result as string;
      const dataInfo = /data:([a-zA-Z0-9\/]+);/gi.exec(this.dto.audio);
      if (dataInfo) {
        this.dataType = dataInfo[1];
      }
      this.dto.audio = this.dto.audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
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
    this.extractionSrv.extractTextIndependentVoice(this.dto).subscribe(resp => {
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
    this.urlEndpoint = this.extractionSrv.getEndpoints().textIndependentVoice;
  }

  retry() {
    this.step = 1;
  }

  copy() {
    try {
      (navigator as any).clipboard.writeText(this.response.voice.template).then(() => {
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
