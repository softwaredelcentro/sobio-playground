import { IdentifyResponse } from './../dataTypeObjects/identifyResponse';
import { Verify } from './../dataTypeObjects/verify';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointsMatchingService } from './endpointsMatchingService';
import { environment } from 'src/environments/environment';
import { VerifyT2t } from '../dataTypeObjects/verifyT2t';
import { Observable } from 'rxjs';
import { VerifyT2tResponse } from '../dataTypeObjects/verifyT2tResponse';
import { Identify } from '../dataTypeObjects/identify';
import { VerifyResponse } from '../dataTypeObjects/verifyResponse';

@Injectable({
  providedIn: 'root'
})
export class MatchingService {

  private endpoints: EndpointsMatchingService = new EndpointsMatchingService();

  public getEndpoints(): EndpointsMatchingService {
    return this.endpoints;
  }

  constructor(private httpClient: HttpClient) {
    this.reSetEndpoints(environment.endpoint);
  }

  public reSetEndpoints(endpoint: string) {
    this.endpoints.verifyT2t = endpoint + '/' + environment.version + '/bio/verify-t2t';
    this.endpoints.verify = endpoint + '/' + environment.version + '/bio/verify';
    this.endpoints.identify = endpoint + '/' + environment.version + '/bio/identify';
  }

  public verifyT2T(dto: VerifyT2t): Observable<VerifyT2tResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(dto);
    return this.httpClient.post<VerifyT2tResponse>(this.endpoints.verifyT2t, dataSTR, options);
  }

  public verify(dto: Verify): Observable<VerifyResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(dto);
    return this.httpClient.post<VerifyResponse>(this.endpoints.verify, dataSTR, options);
  }

  public identify(dto: Identify): Observable<IdentifyResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(dto);
    return this.httpClient.post<IdentifyResponse>(this.endpoints.identify, dataSTR, options);
  }
}
