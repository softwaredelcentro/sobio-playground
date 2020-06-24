import { FingerPrintImageResponse } from './../dataTypeObjects/fingerPrintImageResponse';
import { FingerPrintImage } from './../dataTypeObjects/fingerPrintImage';
import { TextIndependentVoice } from './../dataTypeObjects/textIndependentVoice';
import { TextDependentVoice } from './../dataTypeObjects/textDependentVoice';
import { DniAr } from './../dataTypeObjects/dniAr';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaceVideoDTO } from '../dataTypeObjects/faceVideo';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FaceVideoResponse } from '../dataTypeObjects/faceVideoResponse';
import { FaceImageResponse } from '../dataTypeObjects/faceImageResponse';
import { FaceImageDTO } from '../dataTypeObjects/faceImage';
import { EndpointsExtractionService } from './endpointsExtractionService';
import { DniArResponse, FingerPrintModelVO } from '../dataTypeObjects/dniArResponse';
import { TextDependentVoiceResponse } from '../dataTypeObjects/textDependentVoiceResponse';
import { TextIndependentVoiceResponse } from '../dataTypeObjects/textIndependentVoiceResponse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {

  private endpoints: EndpointsExtractionService = new EndpointsExtractionService();

  public getEndpoints(): EndpointsExtractionService {
    return this.endpoints;
  }

  constructor(private httpClient: HttpClient, private authSrv: AuthService) {
    this.reSetEndpoints(environment.endpoint);
  }

  public reSetEndpoints(endpoint: string) {
    this.endpoints.faceImage = endpoint + '/' + environment.version + '/bio/extract-face-image';
    this.endpoints.faceVideo = endpoint + '/' + environment.version + '/bio/extract-face-video';
    this.endpoints.dniAr = endpoint + '/' + environment.version + '/document-extraction/dni-ar';
    this.endpoints.textDependentVoice = endpoint + '/' + environment.version + '/bio/extract-text-dependent-voice';
    this.endpoints.textIndependentVoice = endpoint + '/' + environment.version + '/bio/extract-text-independent-voice';
    this.endpoints.fingerPrintImage = endpoint + '/' + environment.version + '/bio/extract-fingerprint-image';
    this.endpoints.convertFingerPrint = endpoint + '/' + environment.version + '/bio/convert-fingerprint-image-wsq-to-png';
  }

  public extractFaceVideo(data: FaceVideoDTO): Observable<FaceVideoResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<FaceVideoResponse>(this.endpoints.faceVideo, dataSTR, options);
  }

  public extractFaceImage(data: FaceImageDTO): Observable<FaceImageResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<FaceImageResponse>(this.endpoints.faceImage, dataSTR, options);
  }

  public extractDni(data: DniAr): Observable<DniArResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<DniArResponse>(this.endpoints.dniAr, dataSTR, options);
  }

  public extractTextDependentVoice(data: TextDependentVoice): Observable<TextDependentVoiceResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<TextDependentVoiceResponse>(this.endpoints.textDependentVoice, dataSTR, options);
  }

  public extractTextIndependentVoice(data: TextIndependentVoice): Observable<TextIndependentVoiceResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<TextIndependentVoiceResponse>(this.endpoints.textIndependentVoice, dataSTR, options);
  }

  public extractFingerprint(data: FingerPrintImage): Observable<FingerPrintImageResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<FingerPrintImageResponse>(this.endpoints.fingerPrintImage, dataSTR, options);
  }

  getFingerPrintImage(token: string, fingerPrintImage: string): Observable<any> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify({
      autidToken: token,
      image: fingerPrintImage
    });

    return this.httpClient.post<any>(this.endpoints.convertFingerPrint, dataSTR, options);
  }
}
