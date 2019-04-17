import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.sass']
})
export class SwitchComponent implements OnInit {

  @Input() initStatus: boolean;
  @Output() switch: EventEmitter<boolean> = new EventEmitter<boolean>();
  active: boolean;

  constructor() { }

  ngOnInit() {
    if (typeof this.initStatus !== 'undefined') {
      this.active = this.initStatus;
    } else {
      this.active = false;
    }
  }

  doSwitch() {
    this.active = !this.active;
    this.switch.emit(this.active);
  }

}
