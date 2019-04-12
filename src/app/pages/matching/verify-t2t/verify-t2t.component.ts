import { Component, OnInit } from '@angular/core';
import {
  VerifyT2t,
  CompositeFingerPrints,
  TextIndependentVoice,
  TextDependentVoices,
  FingerPrints,
  Faces
} from 'src/app/dataTypeObjects/varifyT2t';

@Component({
  selector: 'app-verify-t2t',
  templateUrl: './verify-t2t.component.html',
  styleUrls: ['./verify-t2t.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class VerifyT2tComponent implements OnInit {

  loading: boolean;
  step: number;
  dto: VerifyT2t;

  constructor() {
    this.loading = false;
    this.step = 1;
    this.dto = new VerifyT2t();
  }

  ngOnInit() {
  }

  addCompositeFinger() {
    this.dto.bioInfo1.compositeFingerPrints.push(new CompositeFingerPrints());
  }

  removeCompositeFinger(idx: number) {
    this.dto.bioInfo1.compositeFingerPrints.splice(idx, 1);
  }

  addFace() {
    this.dto.bioInfo1.faces.push(new Faces());
  }

  removeFace(idx: number) {
    this.dto.bioInfo1.faces.splice(idx, 1);
  }

  addFPrint() {
    this.dto.bioInfo1.fingerPrints.push(new FingerPrints());
  }

  removeFPrint(idx: number) {
    this.dto.bioInfo1.fingerPrints.splice(idx, 1);
  }

  addTDV() {
    this.dto.bioInfo1.textDependentVoices.push(new TextDependentVoices());
  }

  removeTDV(idx: number) {
    this.dto.bioInfo1.textDependentVoices.splice(idx, 1);
  }

  addTIV() {
    this.dto.bioInfo1.textIndependentVoice.push(new TextIndependentVoice());
  }

  removeTIV(idx: number) {
    this.dto.bioInfo1.textIndependentVoice.splice(idx, 1);
  }

  addCompositeFinger2() {
    this.dto.bioInfo2.compositeFingerPrints.push(new CompositeFingerPrints());
  }

  removeCompositeFinger2(idx: number) {
    this.dto.bioInfo2.compositeFingerPrints.splice(idx, 1);
  }

  addFace2() {
    this.dto.bioInfo2.faces.push(new Faces());
  }

  removeFace2(idx: number) {
    this.dto.bioInfo2.faces.splice(idx, 1);
  }

  addFPrint2() {
    this.dto.bioInfo2.fingerPrints.push(new FingerPrints());
  }

  removeFPrint2(idx: number) {
    this.dto.bioInfo2.fingerPrints.splice(idx, 1);
  }

  addTDV2() {
    this.dto.bioInfo2.textDependentVoices.push(new TextDependentVoices());
  }

  removeTDV2(idx: number) {
    this.dto.bioInfo2.textDependentVoices.splice(idx, 1);
  }

  addTIV2() {
    this.dto.bioInfo2.textIndependentVoice.push(new TextIndependentVoice());
  }

  removeTIV2(idx: number) {
    this.dto.bioInfo2.textIndependentVoice.splice(idx, 1);
  }
}
