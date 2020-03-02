import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { sharedService } from 'src/app/services/sharedService';
import * as $ from 'jquery';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Farm-Connect';
  categories = [];
  showNewitem = false;
  constructor(private dashboardService: DashboardService,
              private shared: sharedService) { }

  ngOnInit() {
    console.log("inside categories");
    this.getCategories();
  }

  addNewCategory() {
    console.log("inside addNewCategory");
    this.showNewitem = true;
  }

  hideCreate() {
    this.showNewitem = false;
  }

  getCategories = () =>{
  this.dashboardService.getDocumentListByCategory().subscribe(data=>{
    if(data.status.toLowerCase() == 'success'){
      this.categories = data.categories;
      this.shared.setCategories(this.categories);
      console.log("Categories" + this.shared.getCategories());
    }
  });
}
}
