import { Verify } from './../../../dataTypeObjects/verify';
import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { UUID } from 'src/app/Utils/UUID';
import { CompositeFingerPrints, Faces, FingerPrints, TextDependentVoices } from 'src/app/dataTypeObjects/verifyT2t';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class VerifyComponent implements OnInit {

  loading: boolean;
  dto: Verify;
  farCalculated: number;
  urlEndpoint: string;
  jsonResponse: string;
  error: boolean;
  step: number;

  @ViewChildren('bi1_image_faces') bi1ImageFaces: QueryList<ElementRef>;
  @ViewChildren('bi1_image_fprints') bi1ImageFPrints: QueryList<ElementRef>;
  @ViewChildren('bi1_audio_tdv') bi1AudioTdv: QueryList<ElementRef>;
  @ViewChildren('bi1_audio_tiv') bi1AudioTiv: QueryList<ElementRef>;

  constructor() {
    this.dto = new Verify();
  }

  ngOnInit() {
    this.loading = false;
    this.step = 1;
    this.dto.auditToken = UUID.create();
    this.farCalculated = this.dto.params.far;
  }

  addCompositeFinger() {
    this.dto.bioInfo.compositeFingerPrints.push(new CompositeFingerPrints());
  }

  removeCompositeFinger(idx: number) {
    this.dto.bioInfo.compositeFingerPrints.splice(idx, 1);
  }

  addFace() {
    this.dto.bioInfo.faces.push(new Faces());
  }

  removeFace(idx: number) {
    this.dto.bioInfo.faces.splice(idx, 1);
  }

  addFPrint() {
    this.dto.bioInfo.fingerPrints.push(new FingerPrints());
  }

  removeFPrint(idx: number) {
    this.dto.bioInfo.fingerPrints.splice(idx, 1);
  }

  addTDV() {
    this.dto.bioInfo.textDependentVoices.push(new TextDependentVoices());
  }

  removeTDV(idx: number) {
    this.dto.bioInfo.textDependentVoices.splice(idx, 1);
  }

  bi1_image_faces_change(idx) {
    this.loading = true;
    const reader  = new FileReader();
    const item = this.bi1ImageFaces.toArray()[idx];
    reader.onload = () => {
      const image = reader.result as string;
      this.dto.bioInfo.faces[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
    };
    if (item.nativeElement.files[0]) {
      reader.readAsDataURL(item.nativeElement.files[0]);
    }
  }

  bi1_image_fprints_change(idx) {
    this.loading = true;
    const reader  = new FileReader();
    const item = this.bi1ImageFPrints.toArray()[idx];
    reader.onload = () => {
      const image = reader.result as string;
      this.dto.bioInfo.fingerPrints[idx].image = image.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
    };
    if (item.nativeElement.files[0]) {
      reader.readAsDataURL(item.nativeElement.files[0]);
    }
  }

  bi1_audio_tdv_change(idx) {
    this.loading = true;
    const reader  = new FileReader();
    const item = this.bi1AudioTdv.toArray()[idx];
    reader.onload = () => {
      const audio = reader.result as string;
      this.dto.bioInfo.textDependentVoices[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
    };
    if (item.nativeElement.files[0]) {
      reader.readAsDataURL(item.nativeElement.files[0]);
    }
  }

  bi1_audio_tiv_change(idx) {
    this.loading = true;
    const reader  = new FileReader();
    const item = this.bi1AudioTiv.toArray()[idx];
    reader.onload = () => {
      const audio = reader.result as string;
      this.dto.bioInfo.textIndependentVoice[idx].audio = audio.replace(/data:([a-zA-Z0-9]+)\/([a-zA-Z0-9]+);base64,/gi, '');
      this.loading = false;
    };
    if (item.nativeElement.files[0]) {
      reader.readAsDataURL(item.nativeElement.files[0]);
    }
  }

}
