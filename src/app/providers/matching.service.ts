import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EndpointsMatchingService } from './EndpointsMatchingService';
import { environment } from 'src/environments/environment.prod';
import { VerifyT2t } from '../dataTypeObjects/verifyT2t';
import { Observable } from 'rxjs';
import { VerifyT2tResponse } from '../dataTypeObjects/verifyT2tResponse';

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
  }

  public verifyT2T(dto: VerifyT2t): Observable<VerifyT2tResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(dto);
    return this.httpClient.post<VerifyT2tResponse>(this.endpoints.verifyT2t, dataSTR, options);
  }
}
