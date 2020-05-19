import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class sharedService{

  public dashboardRedirect: Observable<any>;
  public redirectMessage : any;
  private categories = [];
  private products = [];
  private message = "";
  //currentMessage = this.messageSource.asObservable();

  constructor() {
    this.dashboardRedirect = new Observable((data: any ) => {
      this.redirectMessage = data;
    })
  }

  getCategories() {
    return this.categories;
  }

  setCategories(cat: string[]) {
    this.categories = cat;
  }

  setMessage(data:any) {
    this.message = data;
    this.redirectMessage.next(data);
  }

  getMessage() {
    return this.message;
  }

  getProducts() {
    return this.getProducts;
  }

  setProducts(prod: string[]) {
    this.products = prod;
  }


}
