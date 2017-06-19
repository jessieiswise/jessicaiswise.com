import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'data-filter',
  templateUrl: './data-filter.component.html',
  styleUrls: ['./data-filter.component.css']
})
export class DataFilterComponent implements OnInit,OnChanges  {
  @Input() mapKeys
  @Output() filtered_data
  filters: any[]
  constructor() { 
    this.filters = []
  }
  ngOnChanges() {
  }
  ngOnInit() {

  }
  addFilter() {
    this.filters.push({})
  }
}
