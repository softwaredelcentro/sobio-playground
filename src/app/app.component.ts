import { DatabaseService } from './providers/database.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { ExtractionService } from './providers/extraction.service';
import { MatchingService } from './providers/matching.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'sobio-backoffice';

  apiEndpoint: string;

  constructor(
    private eSrv: ExtractionService,
    private mSrv: MatchingService,
    private dbSrv: DatabaseService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.apiEndpoint = environment.endpoint;

    const onStorage: string = localStorage.getItem('apiUrl').toString();
    if (onStorage.length > 0) {
      this.apiEndpoint = onStorage;
      this.apiChange();
    }

    this.route.fragment.subscribe((fragment: string) => {
      const hash = fragment;
      if (hash) {
        const params = /api=([^&]+)/gmi.exec(hash);
        if (params) {
          this.apiEndpoint = decodeURIComponent(params[1]);
          this.apiChange();
        }
      }
    });
  }

  apiChange() {
    this.eSrv.reSetEndpoints(this.apiEndpoint);
    this.mSrv.reSetEndpoints(this.apiEndpoint);
    this.dbSrv.reSetEndpoints(this.apiEndpoint);
    localStorage.setItem('apiUrl', this.apiEndpoint);
  }
}
