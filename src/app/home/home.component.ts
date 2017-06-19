import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public topics: any[];
  constructor() { 
    this.topics = [
      {"title" : "Demo", "route": "datademo"},
      {"title" : "Resume", "route": "resume"}
    ]
  }

  ngOnInit() {
    console.log(this.topics)
  }

}
