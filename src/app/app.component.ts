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

  constructor(private eSrv: ExtractionService, private mSrv: MatchingService) { }

  ngOnInit() {
    this.apiEndpoint = environment.endpoint;
  }

  apiChange() {
    this.eSrv.reSetEndpoints(this.apiEndpoint);
    this.mSrv.reSetEndpoints(this.apiEndpoint);
  }
}
