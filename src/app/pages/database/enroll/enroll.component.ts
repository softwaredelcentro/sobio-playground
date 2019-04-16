import { Component, OnInit } from '@angular/core';
import { Enroll } from 'src/app/dataTypeObjects/enroll';
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

  constructor(private dbSrv: DatabaseService) { }

  ngOnInit() {
    this.step = 1;
    this.dto.auditToken = UUID.create();
    this.farCalculated = this.dto.params.duplicateSearchParameters.far;
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
    this.dbSrv.enroll(this.dto).subscribe(resp => {
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
    this.urlEndpoint = this.dbSrv.getEndpoints().enroll;
  }

}
