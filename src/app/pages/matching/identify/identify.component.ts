import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identify',
  templateUrl: './identify.component.html',
  styleUrls: ['./identify.component.sass']
})
export class IdentifyComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}
