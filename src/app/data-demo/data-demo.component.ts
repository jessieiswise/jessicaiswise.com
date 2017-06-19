import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from "../utils.service"
/// <reference path="typings/tsd.d.ts" />

'use strict';

@Component({
  selector: 'app-data-demo',
  templateUrl: './data-demo.component.html',
  styleUrls: ['./data-demo.component.css']
})
export class DataDemoComponent implements OnInit {
  title: string = 'My first AGM project';
  lat: number = 37.744;
  lng: number = -122.4194;
  url: string = "http://maps.google.com/mapfiles/kml/shapes/parks.png";
  trees: any;
  keys: any;
  constructor(private utilsService: UtilsService) { }
  clickEvent() {
  }
  ngOnInit() {
    this.loadMapData()

  }
  loadMapData() {
    this.utilsService.makeGetRequest("https://data.sfgov.org/resource/2zah-tuvt.json").subscribe(res =>{
      this.trees = res
      this.keys = Object.keys(this.trees[0])
    })
      
  }
  private convertStringToNumber(value: string): number {
        return +value;
    }

}
