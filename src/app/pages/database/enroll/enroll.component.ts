import { Component, OnInit, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { Enroll, DuplicateSearchParameters } from 'src/app/dataTypeObjects/enroll';
import { CompositeFingerPrints, Faces, FingerPrints, TextDependentVoices } from 'src/app/dataTypeObjects/verifyT2t';
import { UUID } from 'src/app/Utils/UUID';
import { DatabaseService } from 'src/app/providers/database.service';
import { EnrollResponse } from 'src/app/dataTypeObjects/enrollResponse';

@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.sass', '../../../shared-styles/forms.scss', '../../../shared-styles/playground-response.scss']
})
export class EnrollComponent implements OnInit {

  loading: boolean;

  step: number;
  dto: Enroll = new Enroll();
  farCalculated: number;
  urlEndpoint: string;
  jsonResponse: string;
  error: boolean;
  response: EnrollResponse;
  duplicatedSearch: boolean;

  @ViewChildren('bi1_image_faces') bi1ImageFaces: QueryList<ElementRef>;
  @ViewChildren('bi1_image_fprints') bi1ImageFPrints: QueryList<ElementRef>;
  @ViewChildren('bi1_audio_tdv') bi1AudioTdv: QueryList<ElementRef>;
  @ViewChildren('bi1_audio_tiv') bi1AudioTiv: QueryList<ElementRef>;

  constructor(private dbSrv: DatabaseService) { }

  ngOnInit() {
    this.step = 1;
    this.duplicatedSearch = true;
    this.dto.auditToken = UUID.create();
    this.farCalculated = this.dto.params.duplicateSearchParameters.far;
    this.duplicatedSearch = true;
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

  send() {
    this.error = false;
    this.loading = true;
    this.dto.params.duplicateSearchParameters.far = this.farCalculated / 100;
    if (!this.duplicatedSearch) {
      this.dto.params.duplicateSearchParameters = undefined;
    }
    this.dbSrv.enroll(this.dto).subscribe(resp => {
      console.log(resp);
      this.loading = false;
      this.step = 2;
      this.response = resp;
      this.jsonResponse = JSON.stringify(resp);
      this.dto.params.duplicateSearchParameters = new DuplicateSearchParameters();
    }, err => {
      console.log(err);
      this.error = true;
      this.loading = false;
      this.step = 2;
      this.jsonResponse = JSON.stringify(err);
      this.dto.params.duplicateSearchParameters = new DuplicateSearchParameters();
    });
    this.urlEndpoint = this.dbSrv.getEndpoints().enroll;
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
