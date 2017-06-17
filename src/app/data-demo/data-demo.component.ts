import { Component, OnInit } from '@angular/core';
/// <reference path="typings/tsd.d.ts" />

'use strict';

@Component({
  selector: 'app-data-demo',
  templateUrl: './data-demo.component.html',
  styleUrls: ['./data-demo.component.css']
})
export class DataDemoComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 37.678418;
  lng: number = -122.4194;
  gapi: any
  constructor() {  }
  clickEvent(){
  }
  ngOnInit() {
    console.log(this.gapi)
  
  }

}
