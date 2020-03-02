import { Component, OnInit } from '@angular/core';
import { sharedService } from 'src/app/services/sharedService';
import { startsWithPipe } from 'src/app/services/filter.pipe';


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

  constructor(private shared: sharedService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.categories = this.shared.getCategories();
    console.log(this.categories);
    this.mainCategory = this.categories[0].categoryName;
    console.log("Main Categoryu" + this.mainCategory);
    for (let category of this.categories) {
        this.mainCategories.push(category.categoryName);
        console.log("Main Categories" + this.mainCategories);
        for(let product of category.products) {
          this.products.push(product);
        }
    }
    console.log("Products" + JSON.stringify(this.products));
  }






}
