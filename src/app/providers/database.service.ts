import { DeleteResponse } from './../dataTypeObjects/deleteResponse';
import { SubjectInfoResponse } from './../dataTypeObjects/subjectInfoResponse';
import { SubjectDataResponse } from './../dataTypeObjects/subjectDataResponse';
import { DBData } from './../dataTypeObjects/DBData';
import { BioList } from './../dataTypeObjects/bioList';
import { Injectable } from '@angular/core';
import { EndpointsDatabaseService } from './endpointsDatabaseService';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { BioListResponse } from '../dataTypeObjects/bioListResponse';
import { Enroll } from '../dataTypeObjects/enroll';
import { EnrollResponse } from '../dataTypeObjects/enrollResponse';
import { Update } from '../dataTypeObjects/update';
import { UpdateResponse } from '../dataTypeObjects/updateResponse';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private endpoints: EndpointsDatabaseService = new EndpointsDatabaseService();

  public getEndpoints(): EndpointsDatabaseService {
    return this.endpoints;
  }

  constructor(private httpClient: HttpClient, private authSrv: AuthService) {
    this.reSetEndpoints(environment.endpoint);
  }

  public reSetEndpoints(endpoint: string) {
    this.endpoints.list = endpoint + '/' + environment.version + '/bio/list';
    this.endpoints.delete = endpoint + '/' + environment.version + '/bio/delete';
    this.endpoints.zip = endpoint + '/' + environment.version + '/bio/download-zipped-biodata/';
    this.endpoints.data = endpoint + '/' + environment.version + '/bio/subject-data';
    this.endpoints.info = endpoint + '/' + environment.version + '/bio/subject-info';
    this.endpoints.enroll = endpoint + '/' + environment.version + '/bio/enroll';
    this.endpoints.update = endpoint + '/' + environment.version + '/bio/update';
  }

  public getList(dto: BioList): Observable<BioListResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(dto);
    return this.httpClient.post<BioListResponse>(this.endpoints.list, dataSTR, options);
  }

  public delete(data: DBData): Observable<DeleteResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<DeleteResponse>(this.endpoints.delete, dataSTR, options);
  }

  public downZip(subjectId: string): Observable<any> {
    return this.httpClient.get(
      this.endpoints.zip + subjectId,
      {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        }),
        responseType: 'blob' as 'json'
      }
    );
  }

  public getData(data: DBData): Observable<SubjectDataResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<SubjectDataResponse>(this.endpoints.data, dataSTR, options);
  }

  public getInfo(data: DBData): Observable<SubjectInfoResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<SubjectInfoResponse>(this.endpoints.info, dataSTR, options);
  }

  public enroll(data: Enroll): Observable<EnrollResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<EnrollResponse>(this.endpoints.enroll, dataSTR, options);
  }

  public update(data: Update): Observable<UpdateResponse> {
    let options = { headers: {'Content-Type': 'application/json'} };
    options = this.authSrv.setAuthOnOptions(options);
    const dataSTR = JSON.stringify(data);
    return this.httpClient.post<UpdateResponse>(this.endpoints.update, dataSTR, options);
  }

}
