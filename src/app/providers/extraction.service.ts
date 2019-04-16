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
import { DniArResponse } from '../dataTypeObjects/dniArResponse';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {

  private endpoints: EndpointsExtractionService = new EndpointsExtractionService();

  public getEndpoints(): EndpointsExtractionService {
    return this.endpoints;
  }

  constructor(private httpClient: HttpClient) {
    this.reSetEndpoints(environment.endpoint);
  }

  public reSetEndpoints(endpoint: string) {
    this.endpoints.faceImage = endpoint + '/' + environment.version + '/bio/extract-face-image';
    this.endpoints.faceVideo = endpoint + '/' + environment.version + '/bio/extract-face-video';
    this.endpoints.dniAr = endpoint + '/' + environment.version + '/document-extraction/dni-ar';
  }

  public extractFaceVideo(data: FaceVideoDTO): Observable<FaceVideoResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<FaceVideoResponse>(this.endpoints.faceVideo, dataSTR, options);
  }

  public extractFaceImage(data: FaceImageDTO): Observable<FaceImageResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<FaceImageResponse>(this.endpoints.faceImage, dataSTR, options);
  }

  public extractDni(data: DniAr): Observable<DniArResponse>{
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<DniArResponse>(this.endpoints.dniAr, dataSTR, options);
  }

}
