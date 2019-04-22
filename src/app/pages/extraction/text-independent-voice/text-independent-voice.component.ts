import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-text-independent-voice',
  templateUrl: './text-independent-voice.component.html',
  styleUrls: ['./text-independent-voice.component.sass']
})
export class TextIndependentVoiceComponent implements OnInit {

  loading: boolean;

  constructor() { }

  ngOnInit() {
    this.loading = false;
  }

}
