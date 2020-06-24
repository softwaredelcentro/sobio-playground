import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authEnabled: boolean;
  private authUser: string;
  private authPassword: string;
  private authToken: string;

  constructor() { }

  setAuth(auth: boolean, user?: string, password?: string, token?: string) {
    this.authEnabled = auth;
    this.authUser = user;
    this.authPassword = password;
    this.authToken = token;
  }

  setAuthOnOptions(options: any) {
    if(this.authEnabled) {
      // const hash = btoa(this.authUser + '.' + this.authPassword);
      // options.headers.Authorization = 'Basic <' + hash + '>';
      options.headers.Authorization = 'Bearer <' + this.authToken + '>';
    }
    return options;
  }
}
