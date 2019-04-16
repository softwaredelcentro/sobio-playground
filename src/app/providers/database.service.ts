import { BioList } from './../dataTypeObjects/bioList';
import { Injectable } from '@angular/core';
import { EndpointsDatabaseService } from './endpointsDatabaseService';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BioListResponse } from '../dataTypeObjects/bioListResponse';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private endpoints: EndpointsDatabaseService = new EndpointsDatabaseService();

  public getEndpoints(): EndpointsDatabaseService {
    return this.endpoints;
  }

  constructor(private httpClient: HttpClient) {
    this.reSetEndpoints(environment.endpoint);
  }

  public reSetEndpoints(endpoint: string) {
    this.endpoints.list = endpoint + '/' + environment.version + '/bio/list';
  }

  public getList(dto: BioList): Observable<BioListResponse> {
    const options = { headers: {'Content-Type': 'application/json'} };
    const dataSTR = JSON.stringify(dto);
    return this.httpClient.post<BioListResponse>(this.endpoints.list, dataSTR, options);
  }
}
