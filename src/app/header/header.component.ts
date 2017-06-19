import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router' 

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() topics: any;
  constructor(public router: Router) { }

  ngOnInit() {
  }
  registerClick(dat){
    console.log(dat)
    this.router.navigate(dat)
  }
}
