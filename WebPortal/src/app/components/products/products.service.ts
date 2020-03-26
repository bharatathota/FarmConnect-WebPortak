import { Injectable } from '@angular/core';
import { HttpCallsService } from '../../services/http-calls.service';
import { Observable, from } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public fetchCategoriesList = 'categories';
  public crudOperations = 'crudOperations';
  public uploadFile = "fileUpload";

  constructor(private httpService: HttpCallsService) { }

  getDocumentListByCategory(): Observable<any> {
    return this.httpService.get<any>(this.fetchCategoriesList, {}).pipe(
      tap(
        response => {
          return response;
        },
        error => {
          console.log(error.message);
        }
      )
    )

  }

  crudData(params: any): Observable<any> {
    return this.httpService.post<any>(this.crudOperations, params,'').pipe(
      tap(
        response => {
          return response;
        },
        error => {
          console.log(error.message);
        }
      )
    )

  }

  uploadProductImg(params: any): Observable<any> {
    return this.httpService.post<any>(this.uploadFile, params,'').pipe(
      tap(
        response => {
          return response;
        },
        error => {
          console.log(error.message);
        }
      )
    )

  }
}
