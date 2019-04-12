import { MatchingService } from './../../../providers/matching.service';
import { Component, OnInit, QueryList, ViewChildren, ElementRef } from '@angular/core';
import {
  VerifyT2t,
  CompositeFingerPrints,
  TextIndependentVoice,
  TextDependentVoices,
  FingerPrints,
  Faces
} from 'src/app/dataTypeObjects/verifyT2t';
import { VerifyT2tResponse } from 'src/app/dataTypeObjects/verifyT2tResponse';

@Component({
  selector: 'app-verify-t2t',
  templateUrl: './verify-t2t.component.html',
  styleUrls: ['./verify-t2t.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class VerifyT2tComponent implements OnInit {

  loading: boolean;
  step: number;
  dto: VerifyT2t;
  urlEndpoint: string;
  jsonResponse: string;
  error: boolean;
  response: VerifyT2tResponse;

  @ViewChildren('bi1_image_faces') bi1ImageFaces: QueryList<ElementRef>;
  @ViewChildren('bi1_image_fprints') bi1ImageFPrints: QueryList<ElementRef>;
  @ViewChildren('bi1_audio_tdv') bi1AudioTdv: QueryList<ElementRef>;
  @ViewChildren('bi1_audio_tiv') bi1AudioTiv: QueryList<ElementRef>;

  @ViewChildren('bi2_image_faces') bi2ImageFaces: QueryList<ElementRef>;
  @ViewChildren('bi2_image_fprints') bi2ImageFPrints: QueryList<ElementRef>;
  @ViewChildren('bi2_audio_tdv') bi2AudioTdv: QueryList<ElementRef>;
  @ViewChildren('bi2_audio_tiv') bi2AudioTiv: QueryList<ElementRef>;

  constructor(private matching: MatchingService) {
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

  bi1_image_faces_change(idx) {
    // bi1_image_faces
    
  }

  bi1_image_fprints_change(idx) {

  }

  bi1_audio_tdv_change(idx) {

  }

  bi1_audio_tiv_change(idx) {

  }

  bi2_image_faces_change(idx) {
    // bi1_image_faces
  }

  bi2_image_fprints_change(idx) {

  }

  bi2_audio_tdv_change(idx) {

  }

  bi2_audio_tiv_change(idx) {

  }

  send() {

    this.error = false;
    this.loading = true;
    this.matching.verifyT2T(this.dto).subscribe(resp => {
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
    this.urlEndpoint = this.matching.getEndpoints().verifyT2t;
  }

  retry() {
    this.step = 1;
  }

}
