import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class sharedService{

  private categories = [];
  //currentMessage = this.messageSource.asObservable();

  constructor() { }

  getCategories() {
    return this.categories;
  }

  setCategories(cat: string[]) {
    this.categories = cat;
  }


}
