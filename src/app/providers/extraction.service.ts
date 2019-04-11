import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FaceVideoDTO } from '../dataTypeObjects/faceVideo';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { FaceVideoResponse } from '../dataTypeObjects/faceVideoResponse';
import { FaceImageResponse } from '../dataTypeObjects/faceImageResponse';
import { FaceImageDTO } from '../dataTypeObjects/faceImage';

@Injectable({
  providedIn: 'root'
})
export class ExtractionService {

  public static endpoints = {
    faceImage: environment.endpoint + '/' + environment.version + '/bio/extract-face-image',
    faceVideo: environment.endpoint + '/' + environment.version + '/bio/extract-face-video'
  };

  constructor(private httpClient: HttpClient) { }

  public extractFaceVideo(data: FaceVideoDTO): Observable<FaceVideoResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<FaceVideoResponse>(ExtractionService.endpoints.faceVideo, dataSTR, options);
  }

  public extractFaceImage(data: FaceImageDTO): Observable<FaceImageResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<FaceImageResponse>(ExtractionService.endpoints.faceImage, dataSTR, options);
  }

}
