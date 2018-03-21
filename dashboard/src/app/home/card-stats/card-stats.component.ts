import { Component, OnInit, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import { single } from '../data';

@Component({
  selector: 'app-card-stats',
  templateUrl: './card-stats.component.html',
  styleUrls: ['./card-stats.component.css']
})
export class CardStatsComponent implements OnInit {

  single: any[];
  multi: any[];
  view: any[];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  constructor() {
    Object.assign(this, {single});
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
