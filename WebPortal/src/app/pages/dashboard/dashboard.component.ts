import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { sharedService } from 'src/app/services/sharedService';
import { AppComponent } from 'src/app/app.component';
import { Observable } from 'rxjs';
import * as $ from 'jquery';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  title = 'Farm-Connect';
  categories = [];
  showNewitem = false;
  showUpdateItem = false;
  showCategories = true;
  categoryName = '';
  updateCategoryName = '';
  updateCategoryId = '';
  base64textString = '';
  fileName = 'Choose a File';

  constructor(private dashboardService: DashboardService,
              private shared: sharedService,
              private appComp: AppComponent) {
                this.shared.dashboardRedirect.subscribe((response: any) => {
                  console.log("Response" + response);
                  if(response == "Category saved successfully") {
                    this.showNewitem = false;
                    this.showUpdateItem = false;
                    this.showCategories = true;
                    this.getCategories();
                  }
                })
              }

  ngOnInit() {
    this.getCategories();
  }

  addNewCategory() {
    this.showNewitem = true;
    this.showCategories = false;
    this.showUpdateItem = false;
  }

  hideCreate() {
    this.showNewitem = false;
    this.showCategories = true;
    this.showUpdateItem = false;
    this.categoryName = "";
  }

  showUpdateCategory (category: any){
    console.log("Category" + JSON.stringify(category));
    this.showNewitem = false;
    this.showCategories = false;
    this.showUpdateItem = true;
    this.updateCategoryName = category.categoryName;
    this.updateCategoryId = category.categoryId;
  }

  remoeveCategory(category: any) {
    var params = {
      "operationType":"Delete",
      "moduleName":"Categories",
      "categoryId": category.categoryId
    }

    this.dashboardService.crudData(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.shared.setMessage(data.message);
        this.appComp.header = "Categort Deletion";
        this.appComp.message = data.message;
        this.appComp.showPopup = true;
    
      }
    });

  }

  getCategories = () =>{
    this.dashboardService.getDocumentListByCategory().subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.categories = data.categories;
        this.shared.setCategories(this.categories);
        console.log("Categories" + JSON.stringify(this.shared.getCategories()));
        
      }
    });
  }

  saveCategory = () =>{
    var category = {
      "categoryName" :this.categoryName,
    }

    var params = {
      "operationType" : "Save",
      "moduleName" : "Categories",
      "category": category
    }

    console.log("params" + JSON.stringify(params));

    this.dashboardService.crudData(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        console.log("Category Creation");
        // this.shared.setMessage(data.message);
        // this.appComp.header = "Categort Creation";
        // this.appComp.message = data.message;
        // this.appComp.showPopup = true;
        // this.categoryName = "";
        this.uploadFile(data.categoryId, data.message);

      }
    });
  }

  uploadFile (categoryId: any, message: any) {
    var params = {
      "encodedString" : this.base64textString,
      "outputFileName" : this.fileName,
      "idType": "C"+categoryId
    }

    console.log("Params" + JSON.stringify(params));

    this.dashboardService.uploadCategoryImg(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.shared.setMessage(message);
        this.appComp.header = "Category Creation";
        this.appComp.message = message;
        this.appComp.showPopup = true;
        this.updateCategoryId = "";
        this.updateCategoryName = "";
      }
    });
  }

  updateCategory = () =>{
    var category = {
      "categoryName" :this.updateCategoryName,
      "categoryId": this.updateCategoryId
    }

    var params = {
      "operationType" : "Update",
      "moduleName" : "Categories",
      "category": category
    }

    this.dashboardService.crudData(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.shared.setMessage(data.message);
        this.appComp.header = "Category Updation";
        this.appComp.message = data.message;
        this.appComp.showPopup = true;
        this.updateCategoryId = "";
        this.updateCategoryName = "";
      }
    });
  }

  handleFileSelect(evt: any){
    var files = evt.target.files;
    var file = files[0];
    this.fileName = file.name;
    if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any) {
    var binaryString = readerEvt.target.result;
    this.base64textString= btoa(binaryString);
  }

}
