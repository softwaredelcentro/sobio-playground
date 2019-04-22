import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-dependent-voice',
  templateUrl: './text-dependent-voice.component.html',
  styleUrls: ['./text-dependent-voice.component.sass']
})
export class TextDependentVoiceComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}
