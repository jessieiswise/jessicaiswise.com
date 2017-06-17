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
      "Demo",
      "Resume"
    ]
  }

  ngOnInit() {
    console.log(this.topics)
  }

}
