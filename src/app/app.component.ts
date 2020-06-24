import { DatabaseService } from './providers/database.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ExtractionService } from './providers/extraction.service';
import { MatchingService } from './providers/matching.service';
import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sobio-backoffice';

  apiEndpoint: string;
  authEnabled: boolean = false;
  apiUser: string;
  apiPassword: string;
  apiToken: string;

  constructor(
    private eSrv: ExtractionService,
    private mSrv: MatchingService,
    private dbSrv: DatabaseService,
    private route: ActivatedRoute,
    private authSrv: AuthService) { }

  ngOnInit() {
    this.apiEndpoint = environment.endpoint;

    const onStorage: string = localStorage.getItem('apiUrl').toString();
    if (onStorage.length > 0) {
      this.apiEndpoint = onStorage;
      const authEnabledOnStorage: boolean = localStorage.getItem('apiAuth').toString() === 'yes';
      if (authEnabledOnStorage) {
        this.authEnabled = authEnabledOnStorage;
        this.apiUser = localStorage.getItem('apiUser').toString();
        this.apiPassword = localStorage.getItem('apiPassword').toString();
        this.apiToken = localStorage.getItem('apiToken').toString();
      }
      this.apiChange();
    }

    this.route.fragment.subscribe((fragment: string) => {
      const hash = fragment;
      if (hash) {
        const apiParam = /api=([^&]+)/gmi.exec(hash);
        if (apiParam) {
          this.apiEndpoint = decodeURIComponent(apiParam[1]);
          this.apiChange();
        }
        const tokenParam = /token=([^&]+)/gmi.exec(hash);
        if (tokenParam) {
          this.apiToken = decodeURIComponent(tokenParam[1]);
          this.apiChange();
        }
      }
    });
  }

  apiChange() {
    this.eSrv.reSetEndpoints(this.apiEndpoint);
    this.mSrv.reSetEndpoints(this.apiEndpoint);
    this.dbSrv.reSetEndpoints(this.apiEndpoint);
    this.authSrv.setAuth(this.authEnabled, this.apiUser, this.apiUser, this.apiToken);
    localStorage.setItem('apiUrl', this.apiEndpoint);
    localStorage.setItem('apiAuth', this.authEnabled ? 'yes' : 'no');
    localStorage.setItem('apiUser', this.apiUser);
    localStorage.setItem('apiPassword', this.apiUser);
    localStorage.setItem('apiToken', this.apiToken);
  }
}
