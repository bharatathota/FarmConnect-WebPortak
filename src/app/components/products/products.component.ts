import { Component, OnInit } from '@angular/core';
// import { startsWithPipe } from 'src/app/services/filter.pipe';
import { ProductsService } from './products.service';
import { sharedService } from 'src/app/services/sharedService';
import { AppComponent } from 'src/app/app.component';
 

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [];
  categories = [];
  mainCategories = [];
  mainCategory: string = "";
  showNewitem = false;
  showUpdateItem = false;
  showCategories = true;
  fileName = "Choose a File";
  base64textString = '';
  productName = '';
  price = '';
  productMinimumOrder = '';
  updateProductName = '';
  updateProductPrice = '';
  updateProductId = '';
  updateProductMinOrder = '';
  selectedCategory = '';

  constructor(private shared: sharedService, private prodServ: ProductsService,
              private appComp: AppComponent ) { 
                this.shared.dashboardRedirect.subscribe((response: any) => {
                  if(response == "Product saved successfully") {
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

  getCategories = () =>{
    this.prodServ.getDocumentListByCategory().subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.categories = data.categories;
        console.log("Categories" + JSON.stringify(this.shared.getCategories()));
        this.getProducts();
      }
    });
  }
 
  getProducts() {
    //this.mainCategory = this.categories[0].categoryName;
    for (let category of this.categories) {
        console.log("Final " + JSON.stringify(category.products));
        this.mainCategories.push(category);
        this.selectedCategory = this.mainCategories[0].categoryId;
        for(let product of category.products) {
          this.products.push(product);
        }
    }
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
  }

  showUpdateCategory (category: any){
    this.showNewitem = false;
    this.showCategories = false;
    this.showUpdateItem = true;
  }

  handleFileSelectProduct(evt: any){
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


  saveProduct = () =>{
    var product = {
      "productName" :this.productName,
      "price": this.price,
      "productMinimumOrder": this.productMinimumOrder,
      "categoryId": this.selectedCategory
    }

    var params = {
      "operationType" : "Save",
      "moduleName" : "Products",
      "product": product
    }

    
    this.prodServ.crudData(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.products = [];
        this.shared.setMessage(data.message);
        this.appComp.header = "Product Creation";
        this.appComp.message = data.message;
        this.appComp.showPopup = true;

      }
    });
  }

  uploadFile (productId: any, message: any) {
    var params = {
      "encodedString" : this.base64textString,
      "outputFileName" : this.fileName,
      "idType": "P"+productId
    }

    
    this.prodServ.uploadProductImg(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.products = [];
        this.shared.setMessage(message);
        this.appComp.header = "Product Creation";
        this.appComp.message = message;
        this.appComp.showPopup = true;
      }
    });
  }

  showUpdateProduct (product: any){
    this.showNewitem = false;
    this.showCategories = false;
    this.showUpdateItem = true;
    this.updateProductName = product.productName;
    this.updateProductPrice = product.price;
    this.updateProductId = product.productId;
    this.updateProductMinOrder = product.productMinimumOrder;
  }

  remoeveProduct(product: any) {
    var params = {
      "operationType":"Delete",
      "moduleName":"Products",
      "productId": product.productId
    }

    this.prodServ.crudData(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.shared.setMessage(data.message);
        this.appComp.header = "Product Deletion";
        this.appComp.message = data.message;
        this.appComp.showPopup = true;
    
      }
    });

  }

  updateProduct = () =>{
    var product = {
      "productName" :this.updateProductName,
      "productId": this.updateProductId,
      "price": this.updateProductPrice,
      "productMinimumOrder": this.updateProductMinOrder
    }

    var params = {
      "operationType" : "Update",
      "moduleName" : "Products",
      "product": product
    }

    this.prodServ.crudData(params).subscribe(data=>{
      if(data.status.toLowerCase() == 'success'){
        this.products = [];
        this.shared.setMessage(data.message);
        this.appComp.header = "Product Updation";
        this.appComp.message = data.message;
        this.appComp.showPopup = true;
        this.updateProductId = "";
        this.updateProductMinOrder = "";
        this.updateProductName = "";
        this.updateProductPrice = "";
      }
    });
  }

}
