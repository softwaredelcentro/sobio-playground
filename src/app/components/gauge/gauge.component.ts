import { Component, OnInit, Input, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.sass']
})
export class GaugeComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() percent: number;
  @Input() symbol: string;
  @Input() borderWeight: number;
  @Input() size: number;
  @Input() color: string;
  @Input() animSeconds: number;
  grade: number;

  constructor() {
    this.symbol = '%';
    this.borderWeight = 15;
    this.size = 60;
    this.grade = 45;
    this.color = '#77cc93';
    this.animSeconds = 0.5;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.render();
  }

  render() {
    this.grade = this.percent * 180 / 100 + 45;
  }

  ngOnChanges() {
    this.render();
  }

}
