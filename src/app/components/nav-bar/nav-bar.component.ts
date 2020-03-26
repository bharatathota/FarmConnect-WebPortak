import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import * as $ from 'jquery';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goto (route) {
    console.log("Route" + route);
    $("#dashboard").removeClass("active");
    $("#products").addClass("active");
    this.router.navigate([route]);
  }

}
