import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.sass']
})
export class VerifyComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}
